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
import { DialogEventLocal } from "./style";
import TextField from "../../../../../../Components/TextField/index";
import NumberTextField from "../../../../../../Components/NumberTextField";
import Form from "../../../../../../Components/Form/index";
import { eventsUseCases } from "../../../../providers/index";

const CreateEventModal = ({ modal, handleClose }) => {
  const formMethods = useForm({
    defaultValues: {},
    resolver: yupResolver(formSchema),
    validationContext: {
      abortEarly: false,
    },
  });
  const { control } = formMethods;

  const handleSubmit = async (formData) => {
    const data = {
      ...formData,
      userId: { userId: 1 },
      preco: Number(formData.preco),
    };
    const response = await eventsUseCases.createEvent(data);

    return response;
  };

  return (
    <DialogEventLocal open={modal} onClose={handleClose} maxWidth="md">
      <DialogTitle
        display="flex"
        sx={{
          padding: "12px 36px",
          borderBottom: `2px solid #333333`,
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1">Criar Evento</Typography>
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
            {/* <Grid item xs={6}>
              <TextField control={control} name="idevent" label="IdEvento" />
            </Grid> */}
            <Grid item xs={6}>
              <TextField control={control} name="nome" label="Nome" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="endereco" label="Endereço" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="categoria" label="Categoria" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="horario" label="Horario" />
            </Grid>
            <Grid item xs={6}>
              <NumberTextField
                currency
                control={control}
                name="preco"
                label="Preço"
              />
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
    </DialogEventLocal>
  );
};
export default CreateEventModal;
