// Chart setup
const xValues = ["Revel Berry", "Enlighten Mint", "Bluephoria", "Awakening Orange", "Lemon Elation"];
const yValues = [35, 67, 55, 12, 8];
const barColors = ["red", "green", "blue", "orange", "yellow"];

const data = {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
};

// Create only ONE chart
const yerbaChart = new Chart(document.getElementById('defaultChart'), config);

// Handle vote button click
document.getElementById('incrementBtn').addEventListener('click', function () {
  const selectedIndex = parseInt(document.getElementById('barSelector').value);
  yerbaChart.data.datasets[0].data[selectedIndex] += 1;
  yerbaChart.update();
});
