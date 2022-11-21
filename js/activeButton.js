const allBtn = document.querySelectorAll('div#btn-select-group button')

const activationFunction = (e) => {
    if(e.target.className !== 'active') {
        allBtn.forEach(btn => {
            if(btn !== e.target) return btn.className = ''
            btn.className = 'active'
        })

    }
}

allBtn.forEach(btn => {
    btn.addEventListener('click', (e) => activationFunction(e))
})

