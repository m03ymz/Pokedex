function renderChart(){
  const ctx = document.getElementById(`baseStatsChart`);
  renderStats();

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hp', 'Attack', 'Defense', 'Sp-Attack', 'Sp-Defense', 'Speed'],
      datasets: [{
        label: 'Base Stats',
        data: [hpStat, attackStat, defenseStat, specialattackStat, specialdefenseStat, initiativeStat],
        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',        
          'rgba(240, 128, 48, 0.8)',    
          'rgba(248, 208, 48, 0.8)',    
          'rgba(104, 144, 240, 0.8)',   
          'rgba(120, 200, 80, 0.8)',    
          'rgba(248, 88, 136, 0.8)',    
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)',       
          'rgba(240, 128, 48, 1)',    
          'rgba(248, 208, 48, 1)',    
          'rgba(104, 144, 240, 1)',   
          'rgba(120, 200, 80, 1)',    
          'rgba(248, 88, 136, 1)',    
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          grid: {
            display: false, 
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false, 
          }
        }
      },
      plugins: {
        legend: {
          display: false, 
        },
      },
      custom: {
        colors: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(240, 128, 48, 0.8)',
          'rgba(248, 208, 48, 0.8)',
          'rgba(104, 144, 240, 0.8)',
          'rgba(120, 200, 80, 0.8)',
          'rgba(248, 88, 136, 0.8)',
        ],
        labels: ['Rot', 'Orange', 'Gelb', 'Blau', 'Grün', 'Rosa'],
      },
    }
  });
  Chart.defaults.font.size = 12; 
  Chart.defaults.font.weight = 'bold'; 
}

function renderStats(){
  hpStat = currentPokemon.stats[0].base_stat;
  attackStat = currentPokemon.stats[1].base_stat;
  defenseStat = currentPokemon.stats[2].base_stat;
  specialattackStat = currentPokemon.stats[3].base_stat;
  specialdefenseStat = currentPokemon.stats[4].base_stat;
  initiativeStat = currentPokemon.stats[5].base_stat;
}





