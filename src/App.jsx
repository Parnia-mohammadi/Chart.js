import "./App.css";
import BarChart from "./components/bar.chart/BarChart";
import DoughnutChart from "./components/doughnut.chart/DoughnutChart";
import LineChart from "./components/line.chart/LineChart";
import PieChart from "./components/pie.chart/PieChart";
import ScatterChart from "./components/scatter.chart/ScatterChart";
import RadarChart from "./components/radar.chart/RadarChart";
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
  Filler,
} from "chart.js";
import ZustandButton from "./components/zustandButton/ZustandButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

function App() {
  return (
    <div>
      <h1>Charts</h1>
      <ZustandButton />
      <BarChart />
      <LineChart />
      <PieChart />
      <DoughnutChart />
      <ScatterChart />
      <RadarChart />
    </div>
  );
}

export default App;
