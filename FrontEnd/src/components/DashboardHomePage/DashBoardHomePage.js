// Custom //
import SideBarDesktop from "../SideBar/SideBarDesktop";
import DashBoardContent from "../DashBoardContent/DashBoardContent";
// CSS //
import classes from "./DashBoardHomePage.module.css";

const DashboardHomePage = () => {
  return (
    <div className={classes.DashboardHomePageMainContainer}>
      <div className={classes.LeftSide}>
        <SideBarDesktop />
      </div>
      <div className={classes.RightSide}>
        <DashBoardContent />
      </div>
    </div>
  );
};

export default DashboardHomePage;
