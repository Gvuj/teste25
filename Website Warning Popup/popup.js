const body = document.body;
const title = document.getElementById('title');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const spacer = document.createElement('div');
const eyeball = new Image(145, 145);

function createEyeball() {
    eyeball.src = 'assets/eyeball.png';
    eyeball.alt = 'eyeball';
    body.insertBefore(eyeball, buttonOne);
}

function createParagraph(text, fontSize = 16) {
    let description = document.createElement('p');
    description.textContent = text;
    description.style.fontSize = `${fontSize}px`;
    spacer.appendChild(description);
}

function createSpacer() {
    body.insertBefore(spacer, buttonOne);
}

function clearPage() {
    document.querySelectorAll('p').forEach(p => p.remove());
    spacer.remove();
    eyeball.remove();
}

function aboutPage() {
    clearPage();
    createParagraph('supa dupa cool ocsef project created by cool ppl who know what they doing', 16);
    createParagraph('https://github.com/Gvuj/DarkPatterns', 10);
    createSpacer();
}

function authorsPage() {
    clearPage();
    createParagraph('Members:');
    createParagraph('Jason Vo');
    createParagraph('Quan Pham');
    createParagraph('Ethan P. Nguyen');
    createSpacer();
}

function homePage() {
    clearPage();
    createEyeball();
}

(() => {{
    createEyeball();
    buttonOne.innerHTML = '⇔ About';
    buttonTwo.innerHTML = 'Authors ⇔';
}})();

let currentPage = 'home';

buttonOne.addEventListener('click', () => {
    if (currentPage === 'home') {
        aboutPage();
        currentPage = 'about';
        buttonOne.innerHTML = 'Back ⇔';
        buttonTwo.innerHTML = '---';
    } else if (currentPage === 'about') {
        homePage();
        currentPage = 'home';
        buttonOne.innerHTML = '⇔ About';
        buttonTwo.innerHTML = 'Authors ⇔';
    }
});

buttonTwo.addEventListener('click', () => {
    if (currentPage === 'home') {
        authorsPage();
        currentPage = 'authors';
        buttonOne.innerHTML = '---';
        buttonTwo.innerHTML = '⇔ Back';
    } else if (currentPage === 'authors') {
        homePage();
        currentPage = 'home';
        buttonOne.innerHTML = '⇔ About';
        buttonTwo.innerHTML = 'Authors ⇔';
    }
});