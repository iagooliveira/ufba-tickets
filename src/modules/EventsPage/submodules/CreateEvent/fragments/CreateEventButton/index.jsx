import { Button } from "@mui/material";
import { CreateEventButtonWrapper } from "./styles";

const CreateEventButton = ({ children, ...props }) => {
  return (
    <CreateEventButtonWrapper>
      <Button {...props}>{children}</Button>
    </CreateEventButtonWrapper>
  );
};

export default CreateEventButton;
