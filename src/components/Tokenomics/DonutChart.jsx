import React from "react";
//Chart.js
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Crowdsale investors", "Foundation"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#0082FF", "#FAA002"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 20,
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "400px", height: "200px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
