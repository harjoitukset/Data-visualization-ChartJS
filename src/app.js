import * as d3 from 'd3';
import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', () => {
  const semicolonParser = d3.dsvFormat(';');

  fetch('data.csv')
    .then(response => response.text())
    .then(text => {
      const data = semicolonParser.parse(text);
      //console.log(data);
      const years = Object.keys(data[0]).filter(k => /^\d{4}$/.test(k));
      //console.log(years);
      const latestYear = years[years.length - 1];
      const xLabels = [];
      const yValues = [];
      data.forEach((value, key) => {
        if (data[key][latestYear] > 100000000) {
          xLabels.push(data[key].name);
          yValues.push(data[key][latestYear]);
        }
      });
      const ctx = document.getElementById('barChart').getContext('2d');

      const barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: xLabels,
          datasets: [{
            label: 'Väkiluku valtioittain vuonna ' + latestYear,
            data: yValues,
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
});