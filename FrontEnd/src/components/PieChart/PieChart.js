// React //
import React, { useState,useEffect } from "react";
// Libaries //
import Chart from "react-apexcharts";
// Custom //
import PieChartCategories from "./PieChartCategories/PieChartCategories";

const PieChart = () => {
  let chartData = {
    options: {
      labels: [
        "Category A",
        "Category B",
        "Category C",
        "Category D",
        "Category E",
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },

      colors: ["#67c587", "#88d1a1", "#a9deba", "#c9ead4", "#eaf6ed"],
    },

    series: [30, 20, 15, 25, 10], // Example data, replace with your own values
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
