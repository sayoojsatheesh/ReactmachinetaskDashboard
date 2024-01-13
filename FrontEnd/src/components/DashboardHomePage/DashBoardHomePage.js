// Custom //
import SideBarDesktop from "../SideBar/SideBarDesktop";
import DashBoardContent from "../DashBoardContent/DashBoardContent";
import SideBarMobile from "../SideBarMobile/SideBarMobile";
// CSS //
import classes from "./DashBoardHomePage.module.css";
// MUI //
import { useTheme, useMediaQuery } from "@mui/material";

const DashboardHomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.DashboardHomePageMainContainer}>
      <div className={classes.LeftSide}>
        {isSmallScreen ? <SideBarMobile /> : <SideBarDesktop />}
      </div>
      <div className={classes.RightSide}>
        <DashBoardContent />
      </div>
    </div>
  );
};

export default DashboardHomePage;
