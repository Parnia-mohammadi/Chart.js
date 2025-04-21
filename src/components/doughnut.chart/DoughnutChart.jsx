import { Doughnut } from "react-chartjs-2";
import { dataArc } from "../pie.chart/PieChart";
import { plugins } from "chart.js";

function DoughnutChart() {
  return (
    <div>
      <h2>DoughnutChart</h2>
      <Doughnut
        data={dataArc}
        options={{ plugins: { legend: { position: "right" } } }}
      />
    </div>
  );
}

export default DoughnutChart;
