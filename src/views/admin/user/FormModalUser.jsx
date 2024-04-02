import { Formik } from 'formik';
import { Alert, Button, Container, Form, Toast } from 'react-bootstrap';
import { useUser } from '../../UserContext';
import { useState } from 'react';

const FormModalUser = () => {
  let { blancUser, userValidationSchema, cadastrarUser } = useUser();

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
    <Formik
      initialValues={blancUser}
      onSubmit={handleSubmitUser}
      validationSchema={userValidationSchema}
    >
      {/* Formulário */}
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <Container>
            <Form onSubmit={handleSubmit}>
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

              <Button
                className="mb-3"
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Cadastrar
              </Button>
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
        </>
      )}
    </Formik>
  );
};

export default FormModalUser;
