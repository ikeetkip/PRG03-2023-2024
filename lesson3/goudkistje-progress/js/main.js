window.addEventListener('load', init);

//Globals
let imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let winnerImage = 'goudkistje';
let playField;
let lastTarget;
let guessnumber;
let messagePlaceholder;

/**
 * Initialize after the DOM is ready
 */
function init()
{
  //Click handler for the images
  playField = document.getElementById('playing-field');
  playField.addEventListener('click', playingFieldClickHandler);

  //start
  createPlayField();

  //Submit handler for the form
  let playForm = document.getElementById('play-form');
  playForm.addEventListener('submit', formSubmitHandler);

  //Fill globals which are used in more functions
  guessnumber = document.getElementById('guess-number');
  messagePlaceholder = document.getElementById('alert');
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField()
{
  //Shuffle current array to actually have a 'game feeling'
  imageList = shuffleArray(imageList);

  //Loop through all the images
  for (let i = 0; i < imageList.length; i++) {
    //Create div for card
    let div = document.createElement('div');
    div.classList.add('playing-card');

    //Create & append H2 to div
    let h2 = document.createElement('h2');
    h2.innerHTML = i.toString();
    div.appendChild(h2);

    //Create image & append to div
    let img = document.createElement('img');
    img.src = 'img/vraagteken-plaatjes.png';
    img.dataset.imageIndex = i.toString();
    div.appendChild(img);

    //Append div to playing field
    playField.appendChild(div);
  }
}

/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e)
{
  let target = e.target;

  //Return when no image is clicked
  if (target.nodeName !== 'IMG') {
    return;
  }

  //If we have a stored lastTarget, put it back to show the back of the card
  if (lastTarget) {
    lastTarget.src = 'img/vraagteken-plaatjes.png';
  }

  //Replace latest clickedItem & store what is clicked latest
  target.src = `img/${imageList[target.dataset.imageIndex]}.png`;
  lastTarget = target;
}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e)
{
  //Prevent default form submit
  e.preventDefault();

  //Retrieve the value from the input field
  let guessNumber = guessnumber.value;

  if (imageList[guessNumber] === winnerImage) {
    writeFeedbackMessage('Gefeliciteerd! Je hebt het goed geraden');
  } else {
    writeFeedbackMessage('Probeer het nog eens!');
  }
  console.log(guessNumber)
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text)
{
  //Empty current message field
  messagePlaceholder.innerHTML = '';

  //Create new span to show the message
  let span = document.createElement('span');
  span.innerHTML = text;
  messagePlaceholder.appendChild(span);
}

/**
 * Randomize array one-liner using sort
 * @param arr
 * @returns {*}
 */
function shuffleArray(arr) {
  return arr.sort(() => (Math.random() - 0.5))
}
