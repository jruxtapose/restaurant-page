import rookLogo from "../images/logo.jpg";
export { homePage, menuPage, aboutPage }


const contentContainer = document.querySelector('#content')
const logo = document.createElement('img');
logo.src = rookLogo;

function resetContainer() {
    contentContainer.textContent = '';
}


const homePage = (() => {
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

const menuPage = (() => {
    resetContainer();
    contentContainer.className = 'menu-page';
    const header = document.createElement('h1');
    header.textContent = "Welcome to the Rook and Pawn";

    const bodyText = document.createElement('p');
    bodyText.textContent = "This will be a menu eventually";

    contentContainer.appendChild(logo);
    contentContainer.appendChild(header);
    contentContainer.appendChild(bodyText);
})

const aboutPage = (() => {
    resetContainer();
    const head = document.createElement('div');
    head.className = 'home-content-header'
    head.appendChild(logo);
    contentContainer.appendChild(head);
})