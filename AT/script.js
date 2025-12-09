(function(){
  const MIN = 1;
  const MAX = 100;
  const MAX_ATTEMPTS = 10;

  const guessInput = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');
  const resetBtn = document.getElementById('resetBtn');
  const messageEl = document.getElementById('message');
  const attemptsCountEl = document.getElementById('attemptsCount');
  const maxAttemptsText = document.getElementById('maxAttemptsText');

  maxAttemptsText.textContent = MAX_ATTEMPTS;

  let secretNumber = null;
  let attemptsLeft = MAX_ATTEMPTS;
  let gameOver = false;

  function generateSecret(){
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  }

  function initGame(){
    secretNumber = generateSecret();
    attemptsLeft = MAX_ATTEMPTS;
    gameOver = false;
    attemptsCountEl.textContent = attemptsLeft;
    messageEl.textContent = 'Boa sorte — faça seu primeiro palpite!';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessInput.value = '';
    guessInput.focus();
  }

  function validateGuess(value){
    if(value < MIN || value > MAX) return false;
    return true;
  }

  function endGame(win){
    gameOver = true;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    messageEl.textContent = win
      ? 'Você acertou!'
      : `Você perdeu! O número secreto era ${secretNumber}.`;
  }

  function handleGuess(){
    if(gameOver) return;

    const guess = parseInt(guessInput.value);
    if(!validateGuess(guess)){
      messageEl.textContent = 'Digite um número válido entre 1 e 100.';
      return;
    }

    if(guess === secretNumber){
      endGame(true);
      return;
    }

    attemptsLeft--;
    attemptsCountEl.textContent = attemptsLeft;

    messageEl.textContent = guess < secretNumber
      ? 'O número secreto é maior.'
      : 'O número secreto é menor.';

    if(attemptsLeft <= 0){
      endGame(false);
    }

    guessInput.value = '';
    guessInput.focus();
  }

  guessBtn.addEventListener('click', handleGuess);
  guessInput.addEventListener('keydown', e => { if(e.key === 'Enter') handleGuess(); });
  resetBtn.addEventListener('click', initGame);

  initGame();
})();
