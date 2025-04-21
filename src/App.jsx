import "./App.css";
import BarChart from "./components/bar.chart/BarChart";
import DoughnutChart from "./components/doughnut.chart/DoughnutChart";
import LineChart from "./components/line.chart/LineChart";
import PieChart from "./components/pie.chart/PieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

function App() {
  return (
    <div>
      <h1>Charts</h1>
      <BarChart />
      <LineChart />
      <PieChart />
      <DoughnutChart />
    </div>
  );
}

export default App;
