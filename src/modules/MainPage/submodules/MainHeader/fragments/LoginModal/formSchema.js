import * as Yup from 'yup';

const formSchema = Yup.object().shape(
  {
    nome: Yup.string().required(),
    email: Yup.string().email().required(),
    login: Yup.string().required(),
    senha: Yup.string().required(),
    verificada: Yup.string().required(),
    estado: Yup.string().required(),
    cidade: Yup.string().required(),
    bairro: Yup.string().required(),
    
  },
);
export default formSchema;
