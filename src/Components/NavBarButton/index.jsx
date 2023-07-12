import { StyledNavButton } from "./style";

const NavBarButton = ({ text, handleClick }) => {
  return <StyledNavButton onClick={handleClick}>{text}</StyledNavButton>;
};

export default NavBarButton;
