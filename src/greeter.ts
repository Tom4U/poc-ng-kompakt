import { HtmlHelper } from "./html-helper";

export class Greeter {
    htmlHelper: HtmlHelper;

    constructor(htmlHelper: HtmlHelper) {
        this.htmlHelper = htmlHelper;
    }

    greet(): void {
        this.writeGreeting(this.htmlHelper.getNameFromElement());
    }
    
    writeGreeting(name: string): void {
        const greeting = this.htmlHelper.getGreetingElement();
        const greetingText = `Hi ${name}!`;
        
        if (!greeting) return;

        greeting.innerText = greetingText;
    }
}