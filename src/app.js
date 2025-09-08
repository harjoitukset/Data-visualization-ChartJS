import * as d3 from 'd3';
import { drawLineChart, drawBarChart, drawScatterChart } from './components/chartDrawer';

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
      drawLineChart(linectx, years, datasets);

      const latestYear = years[years.length - 1];
      const labels = [];
      const latestValues = [];

      data.forEach((value, key) => {
        if (data[key][latestYear] > 100000000) {
          latestValues.push(data[key][latestYear]);
          labels.push(data[key].name);
        }
      });
      const barctx = document.getElementById('barChart').getContext('2d');
      drawBarChart(barctx, labels, latestValues, latestYear);
    });

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const scatterData = data.map(city => ({
        x: city["Maapinta-ala (km²)"],
        y: city["Väkiluku"],
        label: city["Kaupunki"]
      }));

      const chartctx = document.getElementById('scatterChart').getContext('2d');
      drawScatterChart(chartctx, scatterData);
    });
});

