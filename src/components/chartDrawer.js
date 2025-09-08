import Chart from 'chart.js/auto';
import chartTrendline from 'chartjs-plugin-trendline';

export function drawLineChart(ctx, years, datasets) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'nearest',
        intersect: false
      },
      plugins: {
        legend: {
          display: false,
          position: 'bottom'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Vuosi' }
        },
        y: {
          title: { display: true, text: 'Väkiluku' },
          beginAtZero: true
        }
      }
    }
  });
}

export function drawBarChart(ctx, labels, latestValues, latestYear) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Väkiluku vuonna ' + latestYear,
        data: latestValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

export function drawScatterChart(ctx, scatterData) {
  // Lasketaan y-arvojen mediaani
  const yValues = scatterData.map(d => d.y).sort((a, b) => a - b);
  const mid = Math.floor(yValues.length / 2);
  const medianY = yValues.length % 2 !== 0
    ? yValues[mid]
    : (yValues[mid - 1] + yValues[mid]) / 2;

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Kaupungit',
          data: scatterData,
          backgroundColor: 'rgba(154, 162, 235, 0.6)',
          trendlineLinear: {
            colorMin: "gray",
            colorMax: "gray",
            lineStyle: "solid",
            width: 2,
            projection: false,
            type: "movingAverage",
            window: 5
          }
        },
        {
          label: 'Mediaani (väkiluku)',
          type: 'line',
          data: [
            { x: Math.min(...scatterData.map(d => d.x)), y: medianY },
            { x: Math.max(...scatterData.map(d => d.x)), y: medianY }
          ],
          borderColor: 'red',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          order: 0
        }
      ]
    },
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const city = scatterData[context.dataIndex];
              if (context.dataset.label === 'Mediaani (väkiluku)') {
                return `Mediaani: ${medianY}`;
              }
              return `${city.label}: Pinta-ala ${city.x} km², Väkiluku ${city.y}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'logarithmic',
          title: {
            display: true,
            text: 'Maapinta-ala (km²)'
          }
        },
        y: {
          type: 'logarithmic',
          title: {
            display: true,
            text: 'Väkiluku'
          }
        }
      }
    }
  });
}