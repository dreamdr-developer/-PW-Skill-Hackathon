// Graph---------------
async function fetchData(){
    const url=' http://localhost/chartjs/project/finance.json';
  }
  const ctx = document.getElementById('myChart');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['01', '02', '03', '04', '05', '06','07'],
      datasets: [{
        label: 'Improved',
        data: [4, 6, 3, 5, 4, 3,7, 8],
        borderWidth: 1,
        backgroundColor:['green','DarkGreen','red','Red','red','red','green']
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