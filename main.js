document.addEventListener('DOMContentLoaded', () => {
    getGreetActionElement().addEventListener('click', () => greet());
})

function getGreetActionElement() {
    return document.querySelector('#greet-action');
}

function greet() {
    writeGreeting(getNameElement());
}

function getNameElement() {
    return document.querySelector('#name').value;
}

function writeGreeting(name) {
    const greeting = getGreetingElement();
    const greetingText = `Hallo ${name}!`;
    greeting.innerText = greetingText;
}

function getGreetingElement() {
    return document.querySelector('.output > #greeting');
}