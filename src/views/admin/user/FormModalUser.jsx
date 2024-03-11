import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const FormModalUser = () => {
  let initValues = { nome: '', email: '' };

  const handleSubmitUser = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 400);
  };

  // locale i18n
  Yup.setLocale({
    string: {
      default: 'Não é válido',
      required: 'Campo obrigatório',
      min: 'Tamanho mínimo não permitido',
      max: 'Tamanho máximo não permitido',
      email: 'Formato inválido',
      matches: 'Somente letras',
    },
    mixed: {
      default: 'Não é válido',
      required: 'Campo obrigatório',
    },
    number: {
      min: 'Deve ser maior que ${min}',
    },
  });

  const userValidationSchema = Yup.object().shape({
    nome: Yup.string().required().min(3).max(80).matches('/^[a-zA-Zs]+$/'),
    email: Yup.string().email().required(),
  });

  return (
    <Formik
      initialValues={initValues}
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
                  <Alert variant={'danger'}>* {errors.nome}</Alert>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
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
                  <Alert variant={'danger'}>* {errors.email}</Alert>
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
          </Container>
        </>
      )}
    </Formik>
  );
};

export default FormModalUser;
