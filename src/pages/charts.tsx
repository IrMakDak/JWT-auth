import {
  StyledContentContainer,
  StyledChartContainer,
} from "../styles/styledComponents";
import Chart from "chart.js/auto";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Data } from "../data/chartsData";
import { ChartTitle } from "../naming";
import { useDispatch, useSelector } from "react-redux";

Chart.register(CategoryScale);

interface IDataSets {
  label?: string;
  data: number[];
  borderWidth?: number;
}
interface IChartData {
  labels: number[];
  datasets: IDataSets[];
}

export default function Charts() {
  const [chartData, setChartData] = useState<IChartData>({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
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

const BarChart = ({ chartData }: ICharData) => {
  return (
    <StyledChartContainer>
      <h2>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: ChartTitle,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </StyledChartContainer>
  );
};
function PieChart({ chartData }: ICharData) {
  return (
    <StyledChartContainer>
      <h2>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: ChartTitle,
            },
          },
        }}
      />
    </StyledChartContainer>
  );
}
