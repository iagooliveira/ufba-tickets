import * as Yup from 'yup';

const formSchema = Yup.object().shape(
  {
    //idevent: Yup.number().required(),
    nome: Yup.string().required(),
    endereco: Yup.string().required(),
    categoria: Yup.string().required(),
    horario: Yup.string().required(),
    preco: Yup.string().required()

    
  },
);
export default formSchema;
