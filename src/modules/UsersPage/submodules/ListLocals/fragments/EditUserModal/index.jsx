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
import { DialogLogin } from "./style";
import TextField from "../../../../../../Components/TextField/index";
import Form from "../../../../../../Components/Form/index";
import { usersUseCases } from "../../../../../MainPage/submodules/MainHeader/fragments/Login/providers";
import { useState } from "react";

const EditUserModal = ({ id, modal, handleClose }) => {
  const formMethods = useForm({
    defaultValues: {},
    resolver: yupResolver(formSchema),
    validationContext: {
      abortEarly: false,
    },
  });
  const { control } = formMethods;

  const handleSubmit = async (formData) => {
    const verificada = formData.verificada === "sim" ? true : false;
    const dataObj = { ...formData, verificada };
    console.log(dataObj);
    const response = await usersUseCases.patchUser(id, dataObj);

    return response;
  };

  return (
    <DialogLogin open={modal} onClose={handleClose} maxWidth="md">
      <DialogTitle
        display="flex"
        sx={{
          padding: "12px 36px",
          borderBottom: `2px solid #333333`,
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1">Login</Typography>
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
              <TextField control={control} name="nome" label="Nome" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="email" label="Email" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="login" label="Login" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                control={control}
                name="verificada"
                label="Verificada"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="estado" label="Estado" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="cidade" label="Cidade" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="bairro" label="Bairro" />
            </Grid>
            <Grid item xs={6}>
              <TextField control={control} name="senha" label="Senha" />
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
    </DialogLogin>
  );
};
export default EditUserModal;
