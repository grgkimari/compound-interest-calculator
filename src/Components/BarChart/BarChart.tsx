import { CategoryScale, Chart, LinearScale } from 'chart.js/auto'; // Note the import changes
import { Bar } from "react-chartjs-2";
import { BarChartPropType } from "./BarChart.types";

Chart.register(LinearScale, CategoryScale);

const BarChart = (props: BarChartPropType) => {
  return (
    <div>
      <Bar
        width={800}
        height={450}
        data={{
          labels: props.chartDataState.map((item) => item.label),
          datasets: [{
            label: `Investment Value`,
            borderWidth: 1,
            data: props.chartDataState.map((item) => item.value),
            
          }],
        }}
        options={{
            maintainAspectRatio : false,
            backgroundColor : "blue"
        }}
      />
    </div>
  );
}

export default BarChart;
