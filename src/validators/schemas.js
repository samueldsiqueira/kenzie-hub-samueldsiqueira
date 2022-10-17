import * as yup from 'yup';



export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Deve ser um email válido!'),
  password: yup.string().required('Deve ser uma senha válida!'),
});



