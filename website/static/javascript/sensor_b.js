var ctx = document.getElementById("air_temperature_b").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
                  "7:00", "8:00", "9:00","10:00","11:00","12:00","13:00",
                 "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
                 "21:00","22:00","23:00","24:00"],
        datasets: [{
            label: 'Temperatura ambiente',
            data: [19.2, 19.0, 17.2, 17.0, 15.8, 17.4, 18.4, 19.9, 22.6, 25.3, 26.5, 28.1, 29.1, 28.8, 27.6, 27.9, 26.6, 25.6, 25.6, 24.0, 24.8, 23.9, 22.2, 21.3, 20.0],
            backgroundColor: [
                'rgba(255, 152, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 152, 0, 0.9)'
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

var ctx = document.getElementById("soil_umidity_b").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ "0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00",
                "7:00", "8:00", "9:00","10:00","11:00","12:00","13:00",
               "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
               "21:00","22:00","23:00","24:00"],
        datasets: [{
            label: 'Umidade do solo',
            data: [37.3, 32.9, 36.6, 35.4, 37.2, 39.0, 38.3, 36.9, 37.1, 37.0, 38.1, 33.3, 37.3, 36.9, 36.6, 35.4, 37.2, 39.0, 38.3, 36.9, 37.1, 39.0, 38.1, 36.3],
            backgroundColor: [
                'rgba(255, 152, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 152, 0, 0.9)'
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

var ctx = document.getElementById("air_umidity_b").getContext('2d');
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
            data: [57.3, 56.9, 56.6, 55.4, 57.2, 59.0, 58.3, 56.9, 57.1, 57.0, 53.1, 56.3, 57.3, 56.9, 56.6, 55.4, 57.2, 59.0, 58.3, 56.9, 57.1, 60.0, 58.1, 56.3],
            backgroundColor: [
                'rgba(255, 152, 0, 0.5)'
            ],
            borderColor: [
                'rgba(255, 152, 0, 0.9)'
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
