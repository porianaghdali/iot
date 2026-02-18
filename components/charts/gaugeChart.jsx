"use client";

import { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more.js";

// ⚡ فقط برای side effect، نیازی به () نیست
HighchartsMore;

export default function SpeedometerGauge({ data }) {
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: "100%",
    },
    title: { text: data.type.name },
    pane: {
      startAngle: -90,
      endAngle: 89.9,
      background: null,
      center: ["50%", "75%"],
      size: "100%",
    },
    yAxis: {
      min: 0,
      max: 200,
      tickPixelInterval: 50,
      tickPosition: "inside",
      tickColor: "var(--highcharts-background-color, #FFFFFF)",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: { fontSize: "12px" },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 120,
          color: "#55BF3B",
          thickness: 15,
          borderRadius: "50%",
        },
        {
          from: 120,
          to: 160,
          color: "#DDDF0D",
          thickness: 15,
          borderRadius: "50%",
        },
        {
          from: 160,
          to: 200,
          color: "#DF5353",
          thickness: 15,
          borderRadius: "50%",
        },
      ],
    },
    series: [
      {
        name: data.type.name,
        data: [154], // فقط عدد اولیه
        tooltip: { valueSuffix: data.type.unit },
        dataLabels: {
          formatter: function () {
            return `${this.y} ${data.type.unit}`;
          },
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "#333333",
          style: { fontSize: "12px" },
        },
        dial: {
          radius: "80%",
          backgroundColor: "gray",
          baseWidth: 8,
          baseLength: "0%",
          rearLength: "0%",
        },
        pivot: { backgroundColor: "gray", radius: 6 },
      },
    ],
    credits: { enabled: false },
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
  );
}
