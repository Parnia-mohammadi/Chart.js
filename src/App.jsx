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
import ZustandButton from "./components/zustand/ZustandButton";
import ZustandProfile from "./components/zustand/ZustandProfile";
import useCounterStore from "./store/store";

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
  const { theme, toggleTheme } = useCounterStore();
  return (
    <div
      className="card"
      style={{
        backgroundColor: theme === "light" ? "whitesmoke" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Charts</h1>
        <button onClick={toggleTheme}>ChangeThemeColor</button>
      </div>
      <ZustandProfile />
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
