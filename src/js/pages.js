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
    let sandwichMenu = [
        {
            name: 'Italian Sub',
            description: 'Luna hoagie roll, ham, salami, pepperoni served with lettuce, tomato, provolone cheese, pepperoncini, red onion, red wine vinegar, olive oil, and mayo',
            price: '8.0'
        },
        {
            name: 'Patrami on Rye',
            description: 'Luna marbe rye bread, pastrami, house made coleslaw, dijon mustard, and swiss cheese',
            price: '9.0'
        },
        {
            name: 'Fre Shavaca Do',
            description: 'Luna marble rye bread, avocado, tomato, spinach, red onion, swiss cheese, and house made chipotle mayo',
            price: '8.0'
        }
    ];


    resetContainer();
    contentContainer.className = 'menu-page';
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "Menu";
    contentContainer.appendChild(menuHeader);

    const coldSandwichesTitle = document.createElement('h2');
    coldSandwichesTitle.textContent = 'Cold Sandwiches'
    contentContainer.appendChild(coldSandwichesTitle);

    const listWrapper = document.createElement('dl');
    for(let sandwich in sandwichMenu){
        const sandwichName = document.createElement('dt');
        const sandwichDescription = document.createElement('dd');
        const sandwichPrice = document.createElement('dd');
        sandwichName.textContent = sandwichMenu[sandwich].name;
        sandwichDescription.textContent = sandwichMenu[sandwich].description;
        sandwichPrice.textContent = sandwichMenu[sandwich].price;
        listWrapper.appendChild(sandwichName);
        listWrapper.appendChild(sandwichDescription);
        listWrapper.appendChild(sandwichPrice);
        const split = document.createElement('hr');
        if(sandwichMenu.at(-1) !== sandwichMenu[sandwich]){
            listWrapper.appendChild(split);
        }
    }

    contentContainer.appendChild(listWrapper);
})

const aboutPage = (() => {
    resetContainer();
    const head = document.createElement('div');
    head.className = 'home-content-header'
    head.appendChild(logo);
    contentContainer.appendChild(head);
})