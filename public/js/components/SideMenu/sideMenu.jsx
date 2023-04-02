import React, { useState } from "react";
import SideMenuContent from "./style";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";

const Sidemenu = ( props ) => {
 const [show, setShow] = useState(false);

  return (
    <>
    <MenuIcon id="ham-menu" onClick={ () => setShow(!show) }/>
    <SideMenuContent show={ show }>
        <CloseIcon id="menu-close" onClick={ () => setShow(!show) }/>
        <div className="card col-md-4">
          <div className="user-img"></div>
          <span className="user-name">John Doe </span>
          <span className="user-title">Full Stack Web Developer</span>
        </div>

        <nav>
          <a href="/">Log Out</a>
        </nav>
    </SideMenuContent>
    </>
  );
};

export default Sidemenu;
