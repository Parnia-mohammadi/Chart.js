import "./App.css";
import BarChart from "./components/bar.chart/BarChart";
import PieChart from "./components/pie.chart/PieChart";

function App() {
  return (
    <div>
      <h1>Charts</h1>
      <BarChart />
      <PieChart />
    </div>
  );
}

export default App;
