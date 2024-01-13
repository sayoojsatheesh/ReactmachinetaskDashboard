// React //
import { Fragment, useState } from "react";
// CSS //
import classes from "./SideBar.module.css";
// Custom //
import SideBarButton from "../SideBarButton/SideBarButton";
// Images //
import Briefcase from "../../Assets/Briefcase.png";
import StatBoard from "../../Assets/StatBoard.png";
import CircledMenu from "../../Assets/Circled Menu.png";
import Support from "../../Assets/Support.png";
import Plugin from "../../Assets/Puzzle.png";
import Help from "../../Assets/Help.png";
import Logout from "../../Assets/Shutdown.png";

const SideBarDesktop = () => {
  return (
    <div className={`${classes.SideBarMainContainer} `}>
      <div className={classes.TopSection}>
        <img alt="Briefcase" src={Briefcase} />
        <img alt="StatBoard" src={StatBoard} />
      </div>

      <div className={classes.MidSection}>
        <SideBarButton buttonText={"Dashboard"} image={CircledMenu} />
        <SideBarButton buttonText={"Support"} image={Support} />
        <SideBarButton buttonText={"Plugin"} image={Plugin} />
        <SideBarButton buttonText={"Help"} image={Help} />
      </div>
      <div className={classes.BottomSection}>
        <div>
          <span>Logout</span>
          <span>
            <img src={Logout} alt="Logout" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBarDesktop;
