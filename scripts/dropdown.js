// Dropdowns
const dropdowns = document.querySelectorAll('div.dropdown-container');

dropdowns.forEach(d => {
    const button = d.querySelector('button[data-type=dropdown]');
    button.addEventListener('click', (e) => {
        d.classList.toggle('dropdown-expanded');
    })
})