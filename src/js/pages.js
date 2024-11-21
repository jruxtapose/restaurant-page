import rookLogo from "../images/logo.jpg";
export { homePage, menuPage, aboutPage }

const homePage = (() => {
    const contentContainer = document.querySelector('#content');
    const logo = document.createElement('img');
    logo.src = rookLogo;

    const header = document.createElement('h1');
    header.textContent = "Welcome to the Rook and Pawn";

    const bodyText = document.createElement('p');
    bodyText.textContent = "This is totally a real restaurant";

    contentContainer.appendChild(logo);
    contentContainer.appendChild(header);
    contentContainer.appendChild(bodyText);
})

const menuPage = (() => {
    const contentContainer = document.querySelector('#content');
    const logo = document.createElement('img');
    logo.src = rookLogo;

    const header = document.createElement('h1');
    header.textContent = "Welcome to the Rook and Pawn";

    const bodyText = document.createElement('p');
    bodyText.textContent = "This will be a menu eventually";

    contentContainer.appendChild(logo);
    contentContainer.appendChild(header);
    contentContainer.appendChild(bodyText);
})

const aboutPage = (() => {
    const contentContainer = document.querySelector('#content');
    const logo = document.createElement('img');
    logo.src = rookLogo;

    const header = document.createElement('h1');
    header.textContent = "Welcome to the Rook and Pawn";

    const bodyText = document.createElement('p');
    bodyText.textContent = "This is information about the restaurant";

    contentContainer.appendChild(logo);
    contentContainer.appendChild(header);
    contentContainer.appendChild(bodyText);
})