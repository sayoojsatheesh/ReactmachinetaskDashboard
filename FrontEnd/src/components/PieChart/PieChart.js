// Libaries //
import Chart from "react-apexcharts";
// Custom //
import PieChartCategories from "./PieChartCategories/PieChartCategories";
import useAxios from "../../hooks/useAxios";

const PieChart = () => {
  const { data, loading, error } = useAxios(
    "http://localhost:3001/api/pie-chart"
  );

  // Extracting Labels //
  const labels = data?.map((item) => item.label) || [];
  // Extracting Values //
  const pieChartData = data?.map((item) => item.value) || [];

  let chartData = {
    options: {
      labels: labels,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },

      colors: ["#67c587", "#88d1a1", "#a9deba", "#c9ead4", "#eaf6ed"],
    },

    series: pieChartData,
  };
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
        height="250"
      />
      <PieChartCategories
        lables={[
          "Category A",
          "Category B",
          "Category C",
          "Category D",
          "Category E",
        ]}
      />
    </div>
  );
};

export default PieChart;
