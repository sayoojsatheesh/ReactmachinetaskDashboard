// React //
import { useEffect, useState } from "react";
// Images //
import sun from "../../Assets/sun.png";
// CSS //
import classes from "./DashBoardContent.module.css";
// Custom //
import UserDetailsButton from "../UserDetailsButton/UserDetailsButton";
import LineChart from "../LineChart/LineChart";
import PieChart from "../PieChart/PieChart";
// MUI //
import Grid from "@mui/material/Grid";
// Libaries //
import axios from "axios";

const DashBoardContent = () => {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    series: [
      {
        name: "Value",
        data: lineChartData,
        color: "#a9cfe4",
      },
    ],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const fetchData = async () => {
    try {
      // Make the GET request using Axios
      const response = await axios.get("http://localhost:3001/api/graph");
      setLineChartData(processData(response.data));
    } catch (error) {
      console.log("Error in fetchData =", error);
    } finally {
      // Set loading to false once the request is completed
      // setLoading(false);
    }
  };

  // Function helps to intialize values not provided to 0 //
  const processData = (data) => {
    const result = Array.from({ length: 12 }, (_, index) => 0);

    data.forEach(({ x, y }) => {
      const monthIndex = getMonthIndex(x);
      if (monthIndex !== -1) {
        result[monthIndex] = y;
      }
    });

    return result;
  };

  // Helper function to get the index of a month in the array
  const getMonthIndex = (monthName) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames.indexOf(monthName);
  };

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
              <LineChart chartData={chartData} />
            </div>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={classes.PieChartContainer}>
              <PieChart />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            3
          </Grid>
          <Grid item xs={12} md={4}>
            4
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashBoardContent;
