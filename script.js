// Select the button element
const buttons = [
    { selector: '.zigzag-button1', url: 'education.html' },
    { selector: '.zigzag-button2', url: 'workexperience.html' },
    { selector: '.zigzag-button3', url: 'qualifications.html' }
];

buttons.forEach(button => {
    const btnElement = document.querySelector(button.selector);
    btnElement.addEventListener('click', function() {
        window.location.href = button.url;
    });
});