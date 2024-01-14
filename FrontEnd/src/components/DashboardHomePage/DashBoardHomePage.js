// Custom //
import SideBarDesktop from "../SideBar/SideBarDesktop";
import DashBoardContent from "../DashBoardContent/DashBoardContent";
import SideBarMobile from "../SideBarMobile/SideBarMobile";
// CSS //
import classes from "./DashBoardHomePage.module.css";
// MUI //
import { useMediaQuery } from "@mui/material";

const DashboardHomePage = () => {
  const isMobileScreen = useMediaQuery("(max-width: 891.99px)");
  return (
    <div className={classes.DashboardHomePageMainContainer}>
      <div className={classes.LeftSide}>
        {isMobileScreen ? <SideBarMobile /> : <SideBarDesktop />}
      </div>
      <div className={classes.RightSide}>
        <DashBoardContent />
      </div>
    </div>
  );
};

export default DashboardHomePage;
