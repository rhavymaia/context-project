import { setLocale } from 'yup';

// locale i18n
setLocale({
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
