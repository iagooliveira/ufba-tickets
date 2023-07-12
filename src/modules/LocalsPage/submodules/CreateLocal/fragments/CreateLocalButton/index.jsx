import { Button } from "@mui/material";
import { CreateLocalButtonWrapper } from "./styles";

const CreateLocalButton = ({ children, ...props }) => {
  return (
    <CreateLocalButtonWrapper>
      <Button {...props}>{children}</Button>
    </CreateLocalButtonWrapper>
  );
};

export default CreateLocalButton;
