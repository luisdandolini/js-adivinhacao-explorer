let button = document.getElementById('myButton');
let title = document.getElementById('title')
let subtitle = document.getElementById('subtitle')
let randomNumber = Math.floor(Math.random() * 11);
let count = 0;

button.addEventListener('click', isEqual);

function isEqual() {
  let input = document.getElementById('myValue').value;

  if(randomNumber == input) {
    title.classList.add('none')
    subtitle.classList.add('winner')
    subtitle.innerHTML = `Acertou em ${count} tentativas!`
  } else {
    document.getElementById('myValue').value = ''
    count = count + 1
  }
}