import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'

const AreaChart = ({ historicalData, currencySymbol }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!historicalData?.prices?.length) return

    const formatted = historicalData.prices.map(([timestamp, price]) => [
      new Date(timestamp),
      price
    ])

    setData([['Date', 'Price'], ...formatted])
  }, [historicalData])

  const options = {
    backgroundColor: 'transparent',
    legend: 'none',
    curveType: 'function',

    hAxis: {
      textStyle: { color: '#ffffff' },
      gridlines: { color: '#444444' },
      format: 'MMM dd'
    },

    vAxis: {
      textStyle: { color: '#ffffff' },
      gridlines: { color: '#444444' },
      format: `${currencySymbol}#,##0.00`
    },

    chartArea: {
      width: '90%',
      height: '80%',
      backgroundColor: 'transparent'
    },

    colors: ['#10B981'],
    lineWidth: 3,

    trendlines: {
      0: {
        type: 'linear',
        color: '#00FFFF',
        lineWidth: 1,
        opacity: 0.4
      }
    },

    crosshair: {
      trigger: 'both',
      orientation: 'vertical',
      color: '#00FFFF',
      opacity: 0.2
    },

    tooltip: {
      isHtml: true,
      textStyle: { color: '#000' }
    }
  }

  return (
    <div className="w-full bg-gray-800/20  backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
      {data ? (
        <Chart
          chartType="AreaChart"
          data={data}
          options={options}
          height="300px"
          loader={<div className="text-emerald-400">Loading Market Data...</div>}
        />
      ) : (
        <div className="text-emerald-400">Loading Market Data...</div>
      )}
    </div>
  )
}

export default AreaChart
