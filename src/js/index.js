import '../styles/style.scss';
import setHamburger from './hamburger';
import bigDrone from '../images/big-drone.png';

const backgroundImg = document.querySelector('.info');

backgroundImg.backgraoundImage = bigDrone;

document.addEventListener('DOMContentLoaded', () => {

    setHamburger();

});
