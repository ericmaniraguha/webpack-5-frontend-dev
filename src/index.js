import generateJoke from './generateJoke';
import './styles/main.scss';
import basketball from './assets/basketball.png';

const basketImage = document.getElementById('basketImage');
basketImage.src = basketball;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

console.log(generateJoke());
console.log('Checking about changes...');
