var ctx = document.getElementById("air_temperature_a").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
                  "7:00", "8:00", "9:00","10:00","11:00","12:00","13:00",
                 "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
                 "21:00","22:00","23:00","24:00"],
        datasets: [{
            label: 'Temperatura ambiente',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Temperatura (°C)'
                },
              ticks: {
                  beginAtZero:true
              }
          }],
          xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Tempo (h)'
              },
            ticks: {
                beginAtZero:true
            }
        }]
        }
    }
});

var ctx = document.getElementById("soil_umidity_a").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
                "7:00", "8:00", "9:00","10:00","11:00","12:00","13:00",
               "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
               "21:00","22:00","23:00","24:00"],
        datasets: [{
              label: 'Umidade do solo',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Umidade (%)'
              },
              ticks: {
                beginAtZero:true
              }
          }],
            xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Tempo (h)'
                },
              ticks: {
                  beginAtZero:true
              }
          }]
        }
    }
});

var ctx = document.getElementById("air_umidity_a").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    xAxisID: 'Tempo (h)',
    data: {
      labels: [ "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
                "7:00", "8:00", "9:00","10:00","11:00","12:00","13:00",
               "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
               "21:00","22:00","23:00","24:00"],
        datasets: [{
            label: 'Umidade ambiente',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3, 12],
            backgroundColor: [
                'rgba(255, 0, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Umidade (%)'
                },
                ticks: {
                  beginAtZero:true
                }
            }],
            xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Tempo (h)'
                },
              ticks: {
                  beginAtZero:true
              }
          }]
        }
    }
});
