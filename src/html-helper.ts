export class HtmlHelper {
    constructor(
        private greetActionSelector: string, 
        private nameSelector: string, 
        private greetingSelector: string
    ) {}

    getGreetActionElement(): HTMLElement | null {
        return document.querySelector(this.greetActionSelector);
    }
    
    getNameFromElement(): string {
        const element: HTMLInputElement | null = document.querySelector(this.nameSelector);

        return element?.value || 'Gast';
    }
    
    getGreetingElement(): HTMLElement | null {
        return document.querySelector(this.greetingSelector);
    }
}