// Libaries //
import ReactApexChart from "react-apexcharts";
// Custom //
import useAxios from "../../hooks/useAxios";
import { Fragment } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";
// MUI //
import Skeleton from "@mui/material/Skeleton";

const LineChart = () => {
  const { data, loading, error } = useAxios("http://localhost:3001/api/graph");

  // Process Data
  let lineChartData = processData(data ? data : []);

  // Chart Data and Options
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

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false, // Set this to false to hide the toolbar
      },
      margin: {
        right: 40, // Adjusted right margin to leave space
      },
    },
    markers: {
      size: [5, 7],
      colors: "#a6cee3",
      strokeColors: "#a6cee3",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: chartData.categories,
      labels: {
        style: { colors: "#c8c8c8" },
      },
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 4, // This sets the number of ticks on the y-axis
      labels: {
        style: { colors: "#c8c8c8" },
      },
    },
    grid: {
      show: true,
      borderColor: "#f6f6f6",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
        labels: {
          show: true,
          offsetX: 20, // Set desired padding in pixels
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
  };

  // Function helps to intialize values not provided to 0 //
  function processData(data) {
    const result = Array.from({ length: 12 }, (_, index) => 0);

    data.forEach(({ x, y }) => {
      const monthIndex = getMonthIndex(x);
      if (monthIndex !== -1) {
        result[monthIndex] = y;
      }
    });

    return result;
  }

  // Helper function to get the index of a month in the array
  function getMonthIndex(monthName) {
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
  }

  if (loading) {
    return <Skeleton variant="rectangular" width={"100%"} height={350} />;
  }
  return (
    <Fragment>
      {error ? (
        <ErrorPage />
      ) : (
        <ReactApexChart
          options={chartOptions}
          series={chartData.series}
          type="line"
          height={350}
        />
      )}
    </Fragment>
  );
};

export default LineChart;
