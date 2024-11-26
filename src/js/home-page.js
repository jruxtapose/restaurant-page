import { resetContainer } from "./pages.js";
import "../css/home.css"

export const homePage = (() => {
    resetContainer();
    contentContainer.className = 'home-page';

    const infoText = document.createElement('div');
    infoText.className = 'restaurant-info';

    const subtitle = document.createElement('h1');
    subtitle.textContent = 'A Board Game Cafe';

    const address = document.createElement('h2');
    address.textContent = '294 W Washington St Suite 300, Athens, GA, 30601, United States';

    const phoneNumber = document.createElement('h3');
    phoneNumber.textContent = '706-543-5040';

    const emailAddress = document.createElement('h3');
    emailAddress.textContent = 'rookandpawnathens@gmail.com';

    infoText.appendChild(subtitle);
    infoText.appendChild(address);
    infoText.appendChild(phoneNumber);
    infoText.appendChild(emailAddress);

    contentContainer.appendChild(logo);
    contentContainer.appendChild(infoText);

})