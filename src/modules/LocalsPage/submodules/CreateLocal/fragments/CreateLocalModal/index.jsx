import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./formSchema";
import {
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  Grid,
} from "@mui/material";
import { DialogCreateLocal } from "./style";
import TextField from "../../../../../../Components/TextField/index";
import Form from "../../../../../../Components/Form/index";
import { localsUseCases } from "../../../../providers/index";

const CreateLocalModal = ({ modal, handleClose }) => {
  const formMethods = useForm({
    defaultValues: {},
    resolver: yupResolver(formSchema),
    validationContext: {
      abortEarly: false,
    },
  });
  const { control } = formMethods;

  const handleSubmit = async (formData) => {
    console.log(formData);
    const data = { ...formData, usuario: { userId: 1 } };
    const response = await localsUseCases.createLocal(data);
    return response;
  };

  return (
    <DialogCreateLocal open={modal} onClose={handleClose} maxWidth="md">
      <DialogTitle
        display="flex"
        sx={{
          padding: "12px 36px",
          borderBottom: `2px solid #333333`,
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1">Criar Local</Typography>
        </Box>
      </DialogTitle>
      <DialogContent
        divider
        sx={{
          padding: "16px 48px",
        }}
      >
        <Form formMethods={formMethods} onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField control={control} name="id_locais" label="IdLocal" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="nome" label="Nome" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="categoria" label="Categoria" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="endereco" label="Endereço" />
            </Grid>
          </Grid>
          <DialogActions sx={{ marginTop: "20px" }}>
            <Button
              sx={{ backgroundColor: "#333333" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Submeter
            </Button>
          </DialogActions>
        </Form>
      </DialogContent>
    </DialogCreateLocal>
  );
};
export default CreateLocalModal;
