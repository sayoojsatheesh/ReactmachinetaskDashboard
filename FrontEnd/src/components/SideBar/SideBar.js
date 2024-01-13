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
// MUI //
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const iconStyle = { color: "white", fontSize: "50px" };

const SideBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  function handleChevronRight() {
    setOpenSideBar(true);
  }

  function handleChevronLeft() {
    setOpenSideBar(false);
  }
  return (
    <div
      className={`${classes.SideBarMainContainer} ${
        openSideBar ? classes.SmallScreen: ""
      }`}
    >
      <div className={classes.ToggleButton}>
        {!openSideBar ? (
          <ChevronRightIcon onClick={handleChevronRight} sx={iconStyle} />
        ) : (
          <ChevronLeftIcon onClick={handleChevronLeft} sx={iconStyle} />
        )}
      </div>

      <div className={classes.TopSection}>
        {openSideBar ? (
          <Fragment>
            <img alt="Briefcase" src={Briefcase} />
            <img alt="StatBoard" src={StatBoard} />
          </Fragment>
        ) : null}
      </div>

      <div className={classes.MidSection}>
        <SideBarButton
          openSideBar={openSideBar}
          buttonText={"Dashboard"}
          image={CircledMenu}
        />
        <SideBarButton
          openSideBar={openSideBar}
          buttonText={"Support"}
          image={Support}
        />
        <SideBarButton
          openSideBar={openSideBar}
          buttonText={"Plugin"}
          image={Plugin}
        />
        <SideBarButton
          openSideBar={openSideBar}
          buttonText={"Help"}
          image={Help}
        />
      </div>
      <div className={classes.BottomSection}>
        <div>
          {openSideBar ? <span>Logout</span> : ""}
          <span>
            <img src={Logout} alt="Logout" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
