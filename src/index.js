import generateJoke from './generateJoke';
import './styles/main.scss';
import basketball from './assets/basketball.png';

const basketImage = document.getElementById('basketImage');
basketImage.src = basketball;

console.log(generateJoke());
console.log('Checking about changes...');
