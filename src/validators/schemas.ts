import * as yup from 'yup';



export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Deve ser um email válido!'),
  password: yup.string().required('Deve ser uma senha válida!'),
});

export const registerSchema = yup.object().shape({

  nome: yup.string().required("Campo obrigatório").matches(/\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi, "Digite seu nome e sobrenome nesse campo."),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "E-mail inválido"),
  password: yup.string().min(6, "Mínimo de 6 caracteres").required("Campo vazio ou inválido").matches(  /^   / , "(Mínimo de 6 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número)"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não coincidem").required("Campo obrigatório"),
  bio: yup.string().required().matches(/^[a-zA-Z0-9\s.,!?-]{0,300}$/, "Máximo de 300 caracteres"),
  contact: yup.string().required("Campo obrigatório"),
});
