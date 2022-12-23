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