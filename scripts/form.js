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