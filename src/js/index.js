import "../css/styles.css";
import "../css/home.css";
import "../css/menu.css";
import { homePage, menuPage, aboutPage } from "./pages.js";

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

//homePage();
menuPage();
homeButton.addEventListener('click', () => homePage());

menuButton.addEventListener('click', () => menuPage());

aboutButton.addEventListener('click', () => aboutPage());