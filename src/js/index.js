import "../css/styles.css";
import "../css/home.css";
import { homePage, menuPage, aboutPage } from "./pages.js";

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

menuPage();

homeButton.addEventListener('click', () => homePage());

menuButton.addEventListener('click', () => menuPage());

aboutButton.addEventListener('click', () => aboutPage())