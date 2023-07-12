import { StyledLoginMuiButton } from "./style";

const LoginButton = ({ children, ...props }) => {
  return <StyledLoginMuiButton {...props}>{children}</StyledLoginMuiButton>;
};

export default LoginButton;
