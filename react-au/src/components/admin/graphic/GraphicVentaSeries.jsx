import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const GraphicVentaSeries = ({ datos }) => {
  console.log(datos)
  const chartRef = useRef();
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current !== null) {
      chartInstanceRef.current.destroy();
    }

    const data = {
      datasets: [
        {
          data: [10, 20, 15, 5, 50],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
        },
      ],
      labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    };

    const options = {
      plugins: {
        datalabels: {
          formatter: (value) => {
            if (value < 15) return '';
            return value + '%';
          },
        },
      },
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
