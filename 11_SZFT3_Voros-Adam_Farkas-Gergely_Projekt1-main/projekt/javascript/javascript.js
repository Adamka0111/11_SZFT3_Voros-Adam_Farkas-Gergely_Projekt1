const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {

    body.classList.toggle('dark-mode');
    const currentMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', currentMode.toString());
});