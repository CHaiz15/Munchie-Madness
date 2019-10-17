//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!

//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled

//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card

var groceryList = document.querySelector('.grocery-list');
var addSnack = document.querySelector('.snack-btn');
var snackItem = document.querySelector('.item');
var snackDesc = document.querySelector('.snack-desc');
addSnack.addEventListener('click', disableBtn);
snackItem.addEventListener('keyup', filledInput);
snackDesc.addEventListener('keyup', filledInput);

function disableBtn() {
  if (snackItem.value === '' || snackDesc.value === '') {
    addSnack.disabled = true;
  } else if (snackItem.value !== '' || snackDesc.value !== '') {
  snackCard();
}
}

function filledInput(){
  if (snackItem.value !== '' || snackDesc.value !== '' ){
    startEnable();
  }
}

function startEnable() {
  addSnack.disabled = false;
};

function snackCard() {
event.preventDefault();
groceryList.innerHTML += `<section class='card'>
<input class="remove" type="text" placeholder='${snackItem.value}'>
<input class="remove" type="text" placeholder='${snackDesc.value}'>
<input type="submit" value="Delete Last Card" class='delete-btn'>
</section>
`;
}

groceryList.addEventListener('click', randomColor);
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var backColor = "rgb(" + x + "," + y + "," + z + ")";
    groceryList.style.background = backColor;
}

groceryList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove('');
  }
});
