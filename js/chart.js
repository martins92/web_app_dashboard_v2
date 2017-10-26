var ctx = document.getElementById('myChart').getContext('2d');
// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var ctx3 = document.getElementById('myChart3').getContext('2d');

// FIRST CHART
var chart1 = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: '#69A8F3',
            borderColor: '#4A90E2',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: '#4A90E2',
                fontSize: 9,
                boxWidth: 0,
            }
        }
    }
});

// SECOND CHART
// var chart2 = new Chart(ctx2, {
//     // The type of chart we want to create
//     type: 'bar',
//
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 22, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },
//
//     // Configuration options go here
//     options: {
//
//     }
// });

// THIRD CHART
// var chart3 = new Chart(ctx3, {
//     // The type of chart we want to create
//     type: 'doughnut',
//
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 22, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });
