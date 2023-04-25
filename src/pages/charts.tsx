import {
  StyledContainer,
  StyledChart,
  StyledChartsTitles,
  StyledChartsGraphics,
} from "../styles/styledChartsPage";
import Chart from "chart.js/auto";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Data } from "../data/chartsData";
import { StyledH3 } from "../styles/styledGlobals";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(CategoryScale);

interface LineProps {
  options?: ChartOptions<"line">;
  chartData: ChartData<"line">;
}
interface BarProps {
  options?: ChartOptions<"bar">;
  chartData: ChartData<"bar">;
}

export default function Charts() {
  const [chartDataLine, setChartDataLine] = useState({
    labels: Data.map((data) => data.date),
    datasets: [
      {
        label: "Входящие звонки",
        data: Data.map((data) => data.incomingCalls),
        borderColor: "#4F46E5",
        background: "#4F46E5",
        backgroundColor: "#4F46E5",
        pointBorderColor: "#4F46E5",
        pointBackgroundColor: "#4F46E5",
        pointHoverBackgroundColor: "#FFFFFF",
        tension: 0.3,
        borderWidth: 2,
        pointStyleWidth: true,
        pointHoverRadius: 5,
        pointRadius: 2,
      },
      {
        label: "Исходящие звонки",
        data: Data.map((data) => data.outgoingCalls),
        borderColor: "#EAA43A",
        backgroundColor: "#EAA43A",
        pointHoverBackgroundColor: "#FFFFFF",
        pointBorderColor: "#EAA43A",
        pointBackgroundColor: "#EAA43A",
        tension: 0.3,
        pointHoverRadius: 5,
        pointRadius: 2,
        borderWidth: 2,
      },
    ],
  });
  const [chartDataBar, setChartDataBar] = useState({
    labels: Data.map((data) => data.date),
    datasets: [
      {
        data: Data.map((data) => data.outgoingCalls),
        backgroundColor: "#F7B7CD",
        hoverBackgroundColor: "#DB5E88",
      },
    ],
  });
  return (
    <>
      <StyledContainer>
        <StyledChartsTitles>
          <StyledH3>Вся аналитика в одном кабинете</StyledH3>
          <p>Отслеживайте работу голосового ассистента в личном кабинете</p>
          <p>
            Уникальные виджеты позволяют настроить дашборд под задачи различных
            подразделений вашей компании
          </p>
        </StyledChartsTitles>
        <StyledChartsGraphics>
          <LineChart chartData={chartDataLine} />
          <BarChart chartData={chartDataBar} />
        </StyledChartsGraphics>
      </StyledContainer>
    </>
  );
}

const BarChart = ({ chartData }: BarProps) => {
  return (
    <StyledChart>
      <h2>Исходящие звонки</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </StyledChart>
  );
};

function LineChart({ chartData }: LineProps) {
  return (
    <StyledChart>
      <h2>Звонки</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: true,
              position: "bottom",
              align: "start",

              labels: {
                boxWidth: 3.5,
                boxHeight: 3.5,
                usePointStyle: true,
                pointStyle: "circle",
              },
            },
          },
        }}
      />
    </StyledChart>
  );
}
