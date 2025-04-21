import { Pie } from "react-chartjs-2";

function PieChart() {
  const options = {
    plugins: { legend: { position: "bottom" } },
  };
  const data = {
    labels: ["قرمز", "آبی", "سبز", "زرد"],
    datasets: [
      {
        label: "رنگ‌های مورد علاقه",
        data: [300, 500, 100, 200],
        backgroundColor: ["#ff6384", "#36a2eb", "#4bc0c0", "#ffce56"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>PieChart</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
