document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game');
    const movesEl = document.getElementById('moves');
    const timeEl = document.getElementById('time');
  
    const symbols = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
    const cards = shuffle([...symbols, ...symbols]); // create pairs
  
    let firstCard = null;
    let secondCard = null;
    let moves = 0;
    let matched = 0;
    let timerStarted = false;
    let seconds = 0;
    let timerInterval;
  
    function shuffle(array) {
      return array.sort(() => 0.5 - Math.random());
    }
  
    function startTimer() {
      timerInterval = setInterval(() => {
        seconds++;
        timeEl.textContent = seconds;
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
    }
  
    function updateMoves() {
      moves++;
      movesEl.textContent = moves;
    }
  
    function createCard(symbol) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = '';
      card.dataset.symbol = symbol;
  
      card.addEventListener('click', () => {
        if (card.classList.contains('revealed') || secondCard) return;
  
        card.textContent = symbol;
        card.classList.add('revealed');
  
        if (!timerStarted) {
          startTimer();
          timerStarted = true;
        }
  
        if (!firstCard) {
          firstCard = card;
        } else {
          secondCard = card;
          updateMoves();
  
          if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
            matched++;
            firstCard = null;
            secondCard = null;
            if (matched === symbols.length) {
              stopTimer();
              setTimeout(() => {
                alert(`🎉 You won in ${moves} moves and ${seconds} seconds!`);
              }, 300);
            }
          } else {
            setTimeout(() => {
              firstCard.textContent = '';
              secondCard.textContent = '';
              firstCard.classList.remove('revealed');
              secondCard.classList.remove('revealed');
              firstCard = null;
              secondCard = null;
            }, 1000);
          }
        }
      });
  
      return card;
    }
  
    function initGame() {
      cards.forEach(symbol => {
        const card = createCard(symbol);
        gameContainer.appendChild(card);
      });
    }
  
    initGame();
  });
  