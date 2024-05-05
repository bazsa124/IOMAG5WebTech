const cards = ['agar.jpg', 'dvizsla.jpg', 'komodor.jpg', 'kopo.jpg', 'kuvasz.jpg', 'mudi.jpg', 'puli.jpg', 'pumi.jpg','rvizsla.jpg'];
let flippedCards = [];
let matchedCards = [];
var tries=0;

$(document).ready(function() {

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const shuffledCards = shuffle([...cards, ...cards]);
  const $gameBoard = $('.game-board');
  $gameBoard.empty();
  shuffledCards.forEach(function(card, index) {
    const $card = $('<div class="card"></div>');
    const newImg = $('<img>').attr('src', '../Pictures/Table/'+card).attr('class', 'hidden');
    $card.prepend(newImg);
    $gameBoard.append($card);
  });
  $('.hidden').hide();
}

function checkMatch() {
  if (flippedCards[0].firstChild.src === flippedCards[1].firstChild.src) {
    matchedCards.push(flippedCards[0], flippedCards[1]);
    flippedCards = [];
    if (matchedCards.length === cards.length * 2) {
      alert('Congratulations! You win!/n'+'Próbálkozások száma: '+tries);
    }
  } else {
    setTimeout(function() {
      $(flippedCards[0]).removeClass('flipped');
      $(flippedCards[1]).removeClass('flipped');
      $(flippedCards[0].firstChild).hide();
      $(flippedCards[1].firstChild).hide();
      flippedCards = [];
    }, 500);
  }
}

$('.game-board').on('click', '.card', function() {
  if (flippedCards.length < 2 && !$(this).hasClass('flipped') && !matchedCards.includes(this)) {
    $(this).addClass('flipped');
    $(this.children).show();
    flippedCards.push(this);
    if (flippedCards.length === 2) {
        tries++;
      checkMatch();
    }
  }
});

$('.restart-btn').on('click', function() {
  flippedCards = [];
  matchedCards = [];
  createBoard();
});

createBoard();
});

function load(){
  document.getElementById("home_icons").addEventListener('click',function(){window.open('index.html',"_self")});
  document.getElementById("list_icons").addEventListener('click',function(){window.open('list.html',"_self")});
  document.getElementById("form_icons").addEventListener('click',function(){window.open('form.html',"_self")});
  document.getElementById("video_icons").addEventListener('click',function(){window.open('video.html',"_self")});
  document.getElementById("game").addEventListener('click',function(){window.open('memory_game.html',"_self")});
}