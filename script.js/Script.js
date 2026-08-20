// Confetti dots
  (function(){
    const colors = ['#FF6FA0','#FFCB3F','#5FCBE8','#6FE0B0','#E14E85'];
    const bg = document.getElementById('confettiBg');
    const count = window.innerWidth < 720 ? 10 : 22;
    for(let i=0;i<count;i++){
      const s = document.createElement('span');
      const size = 6 + Math.random()*10;
      s.style.width = size+'px';
      s.style.height = size+'px';
      s.style.left = Math.random()*100+'%';
      s.style.top = Math.random()*100+'%';
      s.style.background = colors[Math.floor(Math.random()*colors.length)];
      bg.appendChild(s);
    }
  })();
