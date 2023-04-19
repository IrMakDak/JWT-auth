import {
  StyledContentContainer,
  StyledChartContainer,
} from "../styles/styledComponents";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Data } from "../data/chartsData";

Chart.register(CategoryScale);

export default function Charts() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <StyledContentContainer>
        <BarChart chartData={chartData} />
        <PieChart chartData={chartData} />
      </StyledContentContainer>
    </>
  );
}
function BarChart({ chartData }) {
  return (
    <StyledChartContainer>
      <h2>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </StyledChartContainer>
  );
}
function PieChart({ chartData }) {
  return (
    <StyledChartContainer>
      <h2>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
          },
        }}
      />
    </StyledChartContainer>
  );
}
