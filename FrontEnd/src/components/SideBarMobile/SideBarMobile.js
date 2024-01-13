// React //
import { useState } from "react";
// CSS //
import classes from "./SideBarMobile.module.css";
// Images //
import Briefcase from "../../Assets/Briefcase.png";
import StatBoardImage from "../../Assets/StatBoard.png";
import CircledMenu from "../../Assets/Circled Menu.png";
import Support from "../../Assets/Support.png";
import Plugin from "../../Assets/Puzzle.png";
import Help from "../../Assets/Help.png";
import Logout from "../../Assets/Shutdown.png";
// Custom //
import SideBarButton from "../SideBarButton/SideBarButton";
// MUI //
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const SideBarMobile = () => {
  const [open, setOpen] = useState(false);

  const Styles = {
    position: "absolute",
    top: 5,
    right: 5,
    color: "white",
  };
  return (
    <div
      className={`${classes.SideBarMobileMainContainer} ${
        open ? classes.open : null
      }`}
    >
      {open ? (
        <ChevronLeftIcon
          sx={Styles}
          fontSize="large"
          onClick={() => {
            setOpen(false);
          }}
        />
      ) : (
        <ChevronRightIcon
          onClick={() => {
            setOpen(true);
          }}
          fontSize="large"
          sx={Styles}
        />
      )}

      <div className={classes.SideBarMobileTopSection}>
        <img
          style={{ width: open ? null : "100%" }}
          src={Briefcase}
          alt="Briefcase"
        />
        <img
          style={{ width: open ? null : "100%" }}
          src={StatBoardImage}
          alt="StatBoardImage"
        />
      </div>
      <div className={classes.SideBarMobileMidSection}>
        <SideBarButton
          buttonText={open ? "Dashboard" : ""}
          image={CircledMenu}
        />
        <SideBarButton buttonText={open ? "Support" : ""} image={Support} />
        <SideBarButton buttonText={open ? "Plugin" : ""} image={Plugin} />
        <SideBarButton buttonText={open ? "Help" : ""} image={Help} />
      </div>
      <div className={classes.SideBarMobileFooter}>
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

export default SideBarMobile;
