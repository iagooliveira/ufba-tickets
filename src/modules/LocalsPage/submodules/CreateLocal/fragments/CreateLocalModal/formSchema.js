import * as Yup from 'yup';

const formSchema = Yup.object().shape(
  {
    id_locais: Yup.number().required(),
    nome: Yup.string().required(),
    categoria: Yup.string().required(),
    endereco: Yup.string().required(),
  },
);
export default formSchema;
