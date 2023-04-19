import {
  StyledContentContainer,
  StyledChartContainer,
} from "../styles/styledComponents";
import Chart from "chart.js/auto";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Data } from "../data/chartsData";
import {ChartTitle} from "../naming";

Chart.register(CategoryScale);

interface IDataSets {
  label: string,
  data: number[],
  borderWidth?: number
}
interface ICharData {
  labels: number[];
  datasets: IDataSets[]
}
interface IMyProps {
  chartData: ICharData,
}

export default function Charts() {
  const [chartData, setChartData] = useState<ICharData>({
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


const BarChart = (props: IMyProps) =>  {
  console.log(props)
  return (
    <StyledChartContainer>
      <h2>Bar Chart</h2>
      <Bar
        data={props.chartData}
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
}
function PieChart(props: IMyProps) {
  return (
    <StyledChartContainer>
      <h2>Pie Chart</h2>
      <Pie
        data={props.chartData}
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
