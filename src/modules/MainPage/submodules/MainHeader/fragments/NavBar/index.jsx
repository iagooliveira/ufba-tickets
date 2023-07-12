import { useState } from "react";
import NavBarButton from "../../../../../../Components/NavBarButton/index";
import LoginButton from "../Login";
import LoginModal from "../LoginModal";
import HeaderLogo from "../Logo";
import { Header, Wrapper } from "./style";
import { Link } from "react-router-dom";
import "./style.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [loginModal, setLoginModal] = useState(false);
  const handleOpen = () => setLoginModal(true);
  const setClose = () => setLoginModal(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#1f5f61" }}>
        <Header>
          <Link to="/">
            <HeaderLogo
              styles={{
                height: "30px",
                marginLeft: "26px",
                float: "left",
                position: "relative",
                top: "3px",
              }}
            />
          </Link>
          <Wrapper>
            <NavBarButton text="Home" />
            <NavBarButton text="Sobre Nós" />
            <NavBarButton text="Parceiros" />
            <LoginButton
              onClick={handleOpen}
              variant="text"
              sx={{ color: "#333333" }}
            >
              Login
            </LoginButton>
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </Wrapper>

          {loginModal && (
            <LoginModal modal={loginModal} handleClose={setClose} />
          )}
        </Header>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
