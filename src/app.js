import * as d3 from 'd3';
import Chart from 'chart.js/auto';

function csvToJson(csvText) {
  const lines = csvText.split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");
    return headers.reduce((obj, header, i) => {
      obj[header.trim()] = values[i]?.trim();
      return obj;
    }, {});
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const semicolonParser = d3.dsvFormat(";");

  fetch('data.csv')
    .then(response => response.text())
    .then(text => {
    const data = semicolonParser.parse(text);
    const years = Object.keys(data[0]).filter(k => /^\d{4}$/.test(k));

    const datasets = data.map((row, idx) => ({
        label: row.name,
        data: years.map(y => row[y]),
        borderColor: `hsl(${(idx * 60) % 360}, 80%, 60%)`,
        fill: false,
        tension: 0.1
    }));
    const linectx = document.getElementById('lineChart').getContext('2d');

    new Chart(linectx, {
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

     
    const latestYear = years[years.length - 1];
    const labels = new Array();
    const latestValues = new Array();

    data.forEach((value, key) => {
        if (data[key][latestYear] > 100000000) {
            latestValues.push(data[key][latestYear]);
            labels.push(data[key].name);
        }
    });
    const barctx = document.getElementById('barChart').getContext('2d');

    const myChart = new Chart(barctx, {
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
  });

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Muodostetaan data Chart.js:n scatter-tyyliin
      const scatterData = data.map(city => ({
        x: city["Maapinta-ala (km²)"],
        y: city["Väkiluku"],
        label: city["Kaupunki"]
      }));

      const chartctx = document.getElementById('scatterChart').getContext('2d');
      new Chart(chartctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Kaupungit',
            data: scatterData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
          }]
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  const city = scatterData[context.dataIndex];
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
              title: {
                type: 'logarithmic',
                display: true,
                text: 'Väkiluku'
              }
            }
          }
        }
      });
    });
});

