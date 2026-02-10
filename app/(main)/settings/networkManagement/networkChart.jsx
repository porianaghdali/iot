'use client'

import { useEffect, useRef, useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const initialData = [
  { name: 'Alpari', y: 120 },
  { name: 'TOPFX', y: 100 },

]

export default function BarRaceChart() {
  const chartRef = useRef(null)
  const [data, setData] = useState(initialData)

  const options = {
    chart: {
      type: 'bar',
      animation: { duration: 800 }
    },
    title: { text: 'Broker Volume Race' },
    xAxis: {
      type: 'category',
      reversed: true
    },
    yAxis: {
      title: { text: null },
      labels: { enabled: false }
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        dataSorting: {
          enabled: true,
          matchByName: true
        },
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
    series: [
      {
        name: 'Volume',
        data
      }
    ]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        prev.map(item => ({
          ...item,
          y: Math.max(0, item.y + Math.floor(Math.random() * 20 - 5))
        }))
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  )
}
