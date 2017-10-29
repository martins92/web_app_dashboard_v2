var chartButtons = document.querySelector('.chart__buttons');
var trafficChart = document.querySelector('#lineChart');
var dailyTrafficChart = document.querySelector('#barChart');
var mobileUserChart = document.querySelector('#donutChart');
var hourly;
var daily;
var weekly;
var monthly;
var dailyTraffic;
var mobileUser;

hourly = {
  labels: ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM","8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM","8 PM","9 PM", "10 PM", "11 PM", "12 PM"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(146, 191, 244, .6)",
      borderColor: "#4A90E2",
      pointBackgroundColor: "#fff",
      pointRadius: 3,
      data: [3, 3, 2, 4, 6, 12, 21, 25, 32, 33, 24, 16, 23, 23, 21, 27, 14, 19, 32, 33, 27, 24, 19, 15, 9]
    }
  ]
};

daily = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(146, 191, 244, .6)",
      borderColor: "#4A90E2",
      pointBackgroundColor: "#fff",
      pointRadius: 3,
      data: [170, 80, 72, 35, 66, 123, 155]
    }
  ]
};
weekly = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(146, 191, 244, .6)",
      borderColor: "#4A90E2",
      pointBackgroundColor: "#fff",
      pointRadius: 3,
      data: [0,750, 1250, 750, 1250, 1750, 1250, 1450, 1000, 1540, 2250, 1500, 2250]
    }
  ]
};
monthly = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Juy", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(146, 191, 244, .6)",
      borderColor: "#4A90E2",
      pointBackgroundColor: "#fff",
      pointRadius: 3,
      data: [17000,21000, 18000, 9800, 12000, 16500, 19000,23450, 21500, 18500, 13450, 11250]
    }
  ]
};
dailyTraffic = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(146, 244, 206, 0.6)",
      borderColor: "#49e2b9",
      pointBackgroundColor: "#fff",
      pointRadius: 3,
      data: [170, 80, 72, 35, 66, 123, 155]
    }
  ]
};
mobileUser = {
  labels: ["Tablets", "Phones", "Desktop"],
  datasets: [
    {
      data: [9, 21, 70],
      backgroundColor: [
        "rgba(244, 207, 146, 0.6)",
        "rgba(244, 167, 146, 0.6)",
        "rgba(171, 244, 146, 0.6)"
      ],
      hoverBackgroundColor: [
        "rgb(244, 207, 146)",
        "rgb(244, 167, 146)",
        "rgb(171, 244, 146)"
      ],
      fill: true,
      pointBackgroundColor: "#fff",
      pointRadius: 3
    }
  ]
};

var chartOptions = {
  legend: {
            display: false
        }
};

var newChart = new Chart(trafficChart, {
  type: 'line', // set chart type
  data: daily, // set data type
  options: chartOptions // set chart options
});

var barChart = new Chart(dailyTrafficChart, {
  type: 'bar', // set chart type
  data: dailyTraffic, // set data type
  options: chartOptions // set chart options
});

var donutChart = new Chart(mobileUserChart, {
  type: 'doughnut', // set chart type
  data: mobileUser, // set data type
});

// change chart on button click

chartButtons.addEventListener('click', (e) =>{
  newChart.destroy();
  const canvasContainer = trafficChart.parentElement;
  const canvas = canvasContainer.removeChild(trafficChart);
  canvasContainer.appendChild(canvas);
  var button = e.target;
  var dataType = eval(button.getAttribute('data-type'));
  newChart = new Chart(trafficChart, {
    type: 'line',
    data: dataType,
    options: chartOptions
  });
});
