import { Typography } from "@mui/material";
import { ListCardWrapper } from "./style";

const LocalCard = ({ data }) => {
  const { nome, endereco, categoria } = data;
  return (
    <ListCardWrapper>
      <Typography
        name="nome"
        variant="subtitle1"
        sx={{ marginBottom: "24px", marginLeft: "12px", marginTop: "12px" }}
      >
        Nome: {nome}
      </Typography>
      <Typography
        name="endereco"
        variant="subtitle2"
        sx={{ marginBottom: "24px", marginLeft: "12px" }}
      >
        Endereço: {endereco}
      </Typography>
      <Typography
        name="campo"
        variant="subtitle2"
        sx={{ marginBottom: "12px", marginLeft: "12px" }}
      >
        Categoria: {categoria}
      </Typography>
    </ListCardWrapper>
  );
};

export default LocalCard;
