document.addEventListener('DOMContentLoaded', () => {
  const easterEggTrigger = document.getElementById('bulka-trigger');

  if (easterEggTrigger) {
    easterEggTrigger.addEventListener('click', () => {
      startBulkaRain();
    });
  }
});

function startBulkaRain() {
  const bulkaEmojis = [
    '\u{1F63A}', // 😺
    '\u{1F638}', // 😸
    '\u{1F639}', // 😹
    '\u{1F63B}', // 😻
    '\u{1F63C}', // 😼
    '\u{1F63D}', // 😽
    '\u{1F950}'  // 🥐
  ];
  
  for (let step = 0; step < 40; step++) {
    setTimeout(() => {
      const dropItem = document.createElement('div');
      
      const randomCat = bulkaEmojis[Math.floor(Math.random() * bulkaEmojis.length)];
      dropItem.innerText = randomCat;
      
      dropItem.classList.add('bulka-drop-item');
      
      const horizontalPos = Math.random() * 100;
      const fallDuration = Math.random() * 2 + 2;
      const fontSize = Math.random() * 25 + 20;
      
      dropItem.style.left = `${horizontalPos}vw`;
      dropItem.style.animationDuration = `${fallDuration}s`;
      dropItem.style.fontSize = `${fontSize}px`;
      
      document.body.appendChild(dropItem);
      
      setTimeout(() => {
        dropItem.remove();
      }, fallDuration * 1000);
      
    }, step * 80);
  }
}