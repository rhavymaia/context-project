import { Formik } from 'formik';
import { Alert, Button, Container, Form, Modal, Toast } from 'react-bootstrap';
import { useUser } from './UserContext';
import { useState } from 'react';

const FormModalUser = () => {
  let { show, handleShow, blancUser, userValidationSchema, cadastrarUser } =
    useUser();

  const [showToast, setShowToast] = useState(false);

  const handleSubmitUser = async (e, values, { setSubmitting, resetForm }) => {
    try {
      e.preventDefault();
      cadastrarUser(values);
      setSubmitting(false);
      setShowToast(true);
      resetForm();
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Usuário</Modal.Title>
        </Modal.Header>

        <Formik
          initialValues={blancUser}
          onSubmit={handleSubmitUser}
          validationSchema={userValidationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Container>
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      name="nome"
                      value={values.nome || ''}
                      type="text"
                      placeholder="Digite o nome"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.nome && touched.nome && (
                      <Alert variant={'danger'} className="mt-2">
                        * {errors.nome}
                      </Alert>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      name="email"
                      value={values.email || ''}
                      type="email"
                      placeholder="Digite o email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors.email && touched.email && (
                      <Alert variant={'danger'} className="mt-2">
                        * {errors.email}
                      </Alert>
                    )}
                  </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleShow}>
                    Fechar
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Salvar
                  </Button>
                </Modal.Footer>
              </Form>

              {/* Toast */}
              <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={5000}
                className="d-inline-block m-1"
                bg={'success'}
                autohide
              >
                <Toast.Header>
                  <strong className="me-auto">Context Project</strong>
                </Toast.Header>
                <Toast.Body>Usuário cadastrado com sucesso!</Toast.Body>
              </Toast>
            </Container>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default FormModalUser;
