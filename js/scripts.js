document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('interactive-button');
    const responseText = document.getElementById('response-text');

    button.addEventListener('click', () => {
        responseText.textContent = 'Thank you for clicking the button!';
    });
});
