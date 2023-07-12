import { IconButton, Typography } from "@mui/material";
import { ListCardWrapper } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback } from "react";
import { eventsUseCases } from "../../../../providers";

const EventCard = ({ data }) => {
  const { idEventos, nome, endereco, categoria, horario, preco } = data;
  console.log(data);
  const deleteEvent = useCallback(async () => {
    const event = eventsUseCases.deleteEventById(idEventos);
    console.log(data);
    return event;
  });
  return (
    <ListCardWrapper>
      <Typography
        name="nome"
        variant="subtitle2"
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
        name="categoria"
        variant="subtitle2"
        sx={{ marginBottom: "12px", marginLeft: "12px" }}
      >
        Categoria: {categoria}
      </Typography>
      <Typography
        name="horario"
        variant="subtitle2"
        sx={{ marginBottom: "12px", marginLeft: "12px" }}
      >
        Horario: {horario}
      </Typography>
      <Typography
        name="preco"
        variant="subtitle2"
        sx={{ marginBottom: "12px", marginLeft: "12px" }}
      >
        Preço: {preco}
      </Typography>
      <IconButton aria-label="delete" onClick={deleteEvent}>
        <DeleteIcon />
      </IconButton>
    </ListCardWrapper>
  );
};

export default EventCard;
