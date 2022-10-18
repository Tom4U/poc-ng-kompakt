document.addEventListener('DOMContentLoaded', () => {
    loadYear();
    loadTitle();

    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()} Anwendung wurde gestartet`);
})

function loadYear(): void {
    const year = new Date().getFullYear();
    
    document.body.innerHTML = document.body.innerHTML.replace('{{year}}', year.toString());
}

function loadTitle(): void {
    const title = 'Mein Verein';

    document.body.innerHTML = document.body.innerHTML.replace('{{title}}', title);
}