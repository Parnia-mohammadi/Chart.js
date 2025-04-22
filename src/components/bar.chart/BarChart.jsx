import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد"],
    datasets: [
      {
        label: "فروش محصولات",
        data: [120, 190, 300, 500, 250],
        backgroundColor: "rgba(75, 192, 192, 0.5)", // رنگ میله‌ها
      },
    ],
  };
  const options = {
    plugins: {
      legend: { position: "bottom" }, // موقعیت عنوان
      tooltip: { enabled: true }, // نمایش توضیحات در هاور
    },
  };

  return (
    <div>
      <h2>Bar chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
