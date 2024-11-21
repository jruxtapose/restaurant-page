import "../css/styles.css";
import { homePage, menuPage, aboutPage } from "./pages.js";

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

homePage();

homeButton.addEventListener('click', () => {
       const contentContainer = document.querySelector('#content');
       contentContainer.textContent = '';
       homePage();
});   

menuButton.addEventListener('click', () => {
       const contentContainer = document.querySelector('#content');
       contentContainer.textContent = '';
       menuPage();
});

aboutButton.addEventListener('click', () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.textContent = '';
    aboutPage();
})