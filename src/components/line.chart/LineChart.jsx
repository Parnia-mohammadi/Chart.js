import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد"],
    datasets: [
      {
        label: "تعداد کاربران",
        data: [1000, 1500, 2000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <h2>LineChart</h2>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
