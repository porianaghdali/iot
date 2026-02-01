"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function DonutHalf({ value = 70 }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const centerTextPlugin = {
      id: "centerText",
      afterDraw: (chart) => {
        const { ctx, chartArea: { width, height } } = chart;
        ctx.save();
        const fontSize = width / 6; // اندازه فونت وابسته به عرض کانواس
        ctx.font = `bold 20px sans-serif`;
        ctx.fillStyle = "#0F62FE";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(`${value}`, width / 2, height / 1.6);
        ctx.fillText("درجه", width / 2, height / 1.35);
        ctx.restore();
      },
    };

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["value"],
        datasets: [
          {
            data: [20,30,50],
            backgroundColor: ["#5921FF","#FF9E01", "#F4F4F4"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        responsive: true, // مهم برای ریسپانسیو
        maintainAspectRatio: false, // مهم برای کنترل ابعاد با CSS
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
      plugins: [centerTextPlugin],
    });

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [value]);

  return (
    <div className="w-full max-w-sm max-h-52 mx-auto">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
