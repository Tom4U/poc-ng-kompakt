export class Greeter {
    constructor(htmlHelper) {
        this.htmlHelper = htmlHelper;
    }
    greet() {
        this.writeGreeting(this.htmlHelper.getNameFromElement());
    }
    writeGreeting(name) {
        const greeting = this.htmlHelper.getGreetingElement();
        const greetingText = `Hi ${name}!`;
        if (!greeting)
            return;
        greeting.innerText = greetingText;
    }
}
