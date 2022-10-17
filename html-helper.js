export class HtmlHelper {
    constructor(greetActionSelector, nameSelector, greetingSelector) {
        this.greetActionSelector = greetActionSelector;
        this.nameSelector = nameSelector;
        this.greetingSelector = greetingSelector;
    }

    getGreetActionElement() {
        return document.querySelector(this.greetActionSelector);
    }
    
    getNameElement() {
        return document.querySelector(this.nameSelector).value;
    }
    
    getGreetingElement() {
        return document.querySelector(this.greetingSelector);
    }
}