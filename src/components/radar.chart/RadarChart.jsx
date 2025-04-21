import { Radar } from "react-chartjs-2";

const data = {
  labels: ["سرعت", "قدرت", "دقت"],
  datasets: [
    {
      label: "ویژگی‌های بازیکن",
      data: [90, 75, 80],
      backgroundColor: "rgba(99, 255, 221, 0.6)",
      borderColor: "rgba(234, 183, 14, 0.82)",
      fill: true,
      pointBackgroundColor: "rgb(43, 114, 37)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "rgb(234, 183, 14)",
      pointHoverBorderColor: "rgb(43, 114, 37)",
    },
  ],
};

function RadarChart() {
  return (
    <div style={{ backgroundColor: "rgba(103, 142, 91, 0.42)" }}>
      <h2>RadarChart</h2>
      <Radar
        data={data}
        options={{
          plugins: {
            legend: { labels: { color: "#fff" } },
          },
          scales: {
            r: {
              grid: { color: "rgb(202, 234, 192)" },
              angleLines: {
                color: "#ff6384", // تغییر رنگ خطوط زاویه‌ای که بخش‌ها را از مرکز متصل می‌کنند
              },
              pointLabels: {
                font: {
                  size: 18, // اندازه فونت را بزرگ‌تر کن
                },
                color: "#ffffff", // تغییر رنگ نوشته‌ها به سفید
              },
              ticks: {
                color: "rgb(0, 79, 227)",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default RadarChart;
