import { useState } from "react";
import CreateLocalButton from "../CreateLocal/fragments/CreateLocalButton/index";
import CreateLocalModal from "./fragments/CreateLocalModal";
import { CreateLocalWrapper } from "./style";

const CreateLocal = () => {
  const [localModal, setLocalModal] = useState(false);
  const handleOpen = () => setLocalModal(true);
  const setClose = () => setLocalModal(false);
  return (
    <CreateLocalWrapper>
      <CreateLocalButton
        size="large"
        sx={{ backgroundColor: "#333333" }}
        variant="contained"
        onClick={handleOpen}
      >
        Criar Local
      </CreateLocalButton>
      <CreateLocalModal modal={localModal} handleClose={setClose} />
    </CreateLocalWrapper>
  );
};

export default CreateLocal;
