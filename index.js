// Dropdowns
const dropdowns = document.querySelectorAll('div.dropdown-container');

dropdowns.forEach(d => {
    const button = d.querySelector('button[data-type=dropdown]');
    button.addEventListener('click', (e) => {
        d.classList.toggle('dropdown-expanded');
    })
})

// Tabs
const buttonTabs = document.querySelectorAll('button[data-type="tab-button"]');
const contentTabs = document.querySelectorAll('.tabs-content > .tabs-content-wrapper');
buttonTabs.forEach((b, index) => {
    b.addEventListener('click', (e) => {
        b.classList.add('active-tab');

        buttonTabs.forEach((c)=> {
            if (b !== c) c.classList.remove('active-tab')
        })

        contentTabs.forEach((c, i) => {
            if (i !== index) c.classList.remove('active-tab');

            else c.classList.add('active-tab');
        })
    })
})

// Form
const ctaForm = document.getElementById('callout-form');
ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = ctaForm.querySelector('input');
    if (input.value === '' || !input.validity.valid) {
        ctaForm.querySelector('.form-field').classList.add('form-field-error');
    } else {
        ctaForm.querySelector('.form-field').classList.remove('form-field-error');
    }
})

// Button
const headerWrapper = document.querySelector('div.header-wrapper');
const buttonNav = document.querySelector('button.btn-nav');
buttonNav.addEventListener('click', (e) => {
    buttonNav.toggleAttribute('data-expanded');
    headerWrapper.toggleAttribute('data-expanded');
})