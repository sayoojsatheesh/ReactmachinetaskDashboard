// Libaries //
import ReactApexChart from "react-apexcharts";

const LineChart = ({ chartData }) => {
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
      curve: "smooth", // or "stepline" or ["smooth", "stepline"] for multiple series
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
        // formatter: (value) => {
        //   return value.toFixed(0); // You can format the label as needed
        // },
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
  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData.series}
      type="line"
      height={350}
    />
  );
};

export default LineChart;
