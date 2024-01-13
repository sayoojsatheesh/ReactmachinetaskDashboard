// Custom //
import SideBar from "../SideBar/SideBar";
import DashBoardContent from "../DashBoardContent/DashBoardContent";
// CSS //
import classes from "./DashBoardHomePage.module.css";

const DashboardHomePage = () => {
  return (
    <div className={classes.DashboardHomePageMainContainer}>
      <div className={classes.LeftSide}>
        <SideBar />
      </div>
      <div className={classes.RightSide}>
        <DashBoardContent />
      </div>
    </div>
  );
};

export default DashboardHomePage;
