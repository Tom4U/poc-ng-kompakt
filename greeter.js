export class Greeter {
    htmlHelper = null;

    constructor(htmlHelper) {
        this.htmlHelper = htmlHelper;
    }

    greet() {
        this.writeGreeting(this.htmlHelper.getNameElement());
    }
    
    writeGreeting(name) {
        const greeting = this.htmlHelper.getGreetingElement();
        const greetingText = `Hallo ${name}!`;
        greeting.innerText = greetingText;
    }
}