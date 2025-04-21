import { Scatter } from "react-chartjs-2";
const data = {
  datasets: [
    {
      label: "میزان فروش",
      data: [
        { x: 5, y: 10 },
        { x: 10, y: 20 },
        { x: 15, y: 30 },
      ],
      backgroundColor: "rgb(146, 81, 221)",
    },
  ],
};

function ScatterChart() {
  return (
    <div>
      <h2>ScatterChart</h2>
      <Scatter
        data={data}
        options={{ plugins: { legend: { position: "chartArea" } } }}
      />
    </div>
  );
}

export default ScatterChart;
