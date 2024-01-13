// Images //
import sun from "../../Assets/sun.png";
// CSS //
import classes from "./DashBoardContent.module.css";
// Custom //
import UserDetailsButton from "../UserDetailsButton/UserDetailsButton";
import LineChart from "../LineChart/LineChart";
import PieChart from "../PieChart/PieChart";
import Table from "../Table/Table";
import UserDetails from "../UserDetails/UserDetails";
// MUI //
import Grid from "@mui/material/Grid";

const DashBoardContent = () => {
  return (
    <div>
      <UserDetailsButton />
      <div className={classes.heading}>
        <h3>Good Morning !</h3>
        <img src={sun} alt="sun" />
      </div>
      <div style={{ width: "100%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <div className={classes.LineChartContainer}>
              <LineChart />
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={classes.PieChartContainer}>
              <PieChart />
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <Table />
          </Grid>
          <Grid item xs={12} md={3}>
            <UserDetails UserName={"John Doe"} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashBoardContent;
