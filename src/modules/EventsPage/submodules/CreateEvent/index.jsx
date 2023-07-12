import { useState } from "react";
import CreateEventButton from "../CreateEvent/fragments/CreateEventButton/index";
import CreateEventModal from "./fragments/CreateEventModal";
import { CreateEventWrapper } from "./style";

const CreateLocal = () => {
  const [eventModal, setEventModal] = useState(false);
  const handleOpen = () => setEventModal(true);
  const setClose = () => setEventModal(false);
  return (
    <CreateEventWrapper>
      <CreateEventButton
        size="large"
        sx={{ backgroundColor: "#333333" }}
        variant="contained"
        onClick={handleOpen}
      >
        Criar Evento
      </CreateEventButton>
      <CreateEventModal modal={eventModal} handleClose={setClose} />
    </CreateEventWrapper>
  );
};

export default CreateLocal;
