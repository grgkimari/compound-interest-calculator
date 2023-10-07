import { CategoryScale, Chart, LinearScale } from "chart.js/auto"; // Note the import changes
import { Bar } from "react-chartjs-2";
import { BarChartPropType } from "./BarChart.types";
import { BarChartContainer } from "./BarChart.styles";

Chart.register(LinearScale, CategoryScale);

const BarChart = (props: BarChartPropType) => {
  return (
    <BarChartContainer>
      <Bar
        data={{
          labels: props.chartDataState.map((item) => item.label),
          datasets: [
            {
              label: `Investment Value`,
              borderWidth: 1,
              data: props.chartDataState.map((item) => item.value),
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          backgroundColor: "blue",
        }}
      />
      </BarChartContainer>
  
  );
};

export default BarChart;
