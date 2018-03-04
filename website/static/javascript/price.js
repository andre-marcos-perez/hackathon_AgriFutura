var ctx = document.getElementById("price_a").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ "1","2","3","4","5","6","7","8","9","10",
              "11","12","13","14","15","16","17","18","19",
              "20","21","22","23","24","25","26","27","28"],
        datasets: [{
            label: 'Alface',
            data: [8.93, 8.93, 8.93, 8.93, 8.51, 8.43, 8.33, 8.59, 7.61, 7.61, 7.61, 9.63, 9.87, 9.87, 9.87, 9.87, 9.87, 9.87, 9.91, 8.10, 8.10, 6.62, 5.36, 5.36, 6.16, 6.33, 5.80, 5.80],
            backgroundColor: [
                'rgba(0, 200, 83, 0.5)'
            ],
            borderColor: [
                'rgba(0, 200, 83, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Preço (R$/dz)'
                },
              ticks: {
                  beginAtZero:true
              }
          }],
          xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Fevereiro de 2018'
              },
            ticks: {
                beginAtZero:true
            }
        }]
        }
    }
});

var ctx = document.getElementById("price_b").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ "1","2","3","4","5","6","7","8","9","10",
              "11","12","13","14","15","16","17","18","19",
              "20","21","22","23","24","25","26","27","28"],
        datasets: [{
              label: 'Abobrinha',
            data: [1.87, 1.87, 1.87, 1.87, 1.83, 1.88, 1.89, 1.96, 2.30, 2.26, 2.26, 1.92, 2.12, 2.12, 2.12, 2.12, 2.12, 2.12, 1.89, 1.92, 2.07, 2.02, 1.76, 1.86, 2.09, 2.00, 2.00, 2.00],
            backgroundColor: [
                'rgba(0, 200, 83, 0.5)'
            ],
            borderColor: [
                'rgba(0, 200, 83, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Preço (R$ / kg)'
              },
              ticks: {
                beginAtZero:true
              }
          }],
            xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Fevereiro de 2018'
                },
              ticks: {
                  beginAtZero:true
              }
          }]
        }
    }
});

var ctx = document.getElementById("price_c").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    xAxisID: 'Tempo (h)',
    data: {
      labels: [ "1","2","3","4","5","6","7","8","9","10",
              "11","12","13","14","15","16","17","18","19",
              "20","21","22","23","24","25","26","27","28"],
        datasets: [{
            label: 'Quiabo',
            data: [6.36, 6.36, 6.36, 6.36, 5.12, 5.12, 4.79, 4.79, 5.26, 5.27, 5.27, 4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.29, 4.29, 4.71, 4.71, 4.48, 4.48, 4.53, 4.55, 4.58, 4.58],
            backgroundColor: [
                'rgba(0, 200, 83, 0.5)'
            ],
            borderColor: [
                'rgba(0, 200, 83, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Preço (R$ / kg)'
                },
                ticks: {
                  beginAtZero:true
                }
            }],
            xAxes: [{
              scaleLabel: {
                  display: true,
                  labelString: 'Fevereiro de 2018'
                },
              ticks: {
                  beginAtZero:true
              }
          }]
        }
    }
});
