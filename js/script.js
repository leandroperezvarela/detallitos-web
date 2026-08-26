// Selector de sucursales
(function(){
  const branches = {
    centro: {
      address: 'Tilarán, Guanacaste, Costa Rica',
      mapSrc: 'https://www.google.com/maps?q=10.4747012,-84.9717136&output=embed',
      mapsLink: 'https://maps.app.goo.gl/6PGja5qdL2MdwHYR8'
    },
    mercado: {
      address: '50 metros norte del Mercado Municipal, Tilarán, Guanacaste',
      mapSrc: 'https://www.google.com/maps?q=' + encodeURIComponent('50 metros norte del Mercado Municipal de Tilarán, Guanacaste, Costa Rica') + '&output=embed',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Mercado Municipal de Tilarán, Guanacaste, Costa Rica')
    }
  };

  const tabs = document.querySelectorAll('.branch-tab');
  const addressEl = document.getElementById('branchAddress');
  const mapEl = document.getElementById('branchMap');
  const mapsLinkEl = document.getElementById('branchMapsLink');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const data = branches[tab.dataset.branch];
      if (!data) return;

      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');

      addressEl.textContent = data.address;
      mapEl.src = data.mapSrc;
      mapsLinkEl.href = data.mapsLink;
    });
  });
})();

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
