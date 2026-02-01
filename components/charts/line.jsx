"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function LineChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed"],
        datasets: [
          {
            label: "Users",
            data: [10, 25, 18, 30, 22],
            borderColor: "#10b981",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} className="w-full!"/>;
}
