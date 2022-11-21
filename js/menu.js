import {allMenu} from "./data"
/*makeEl: create element
    type: The type of element
    c: className
    parent: The parent of the element
    Return: node
      */
     console.log('Iam running')
const makeEl = (type, c, txt, parent) => {
    const el = document.createElement(`${type}`)
    if(c) el.className = `${c}`
    if(txt) el.innerText = `${txt}`
    parent.append(el)
    return el
}

/* Remove all the children */
const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* Create the card */
const makeCard = (parent, name, imgSrc, text, prevPrise = null, currentPrise=0) => {
    const card = makeEl('div', 'card menu-card', null, parent)

    const menuImgContainer = makeEl('div', 'menu-img-container', null, card)
    const cardBody = makeEl('div', 'card-body', null, card)
    
    const pHeader = makeEl('p', 'card-text', name, menuImgContainer)
    const img = makeEl('img', 'card-img-top img-fluid', null, menuImgContainer)
    const btnMenuContainer = makeEl('div', 'btn-menu-container', null, menuImgContainer)
    
    img.src = imgSrc
    img.alt = 'menu img'

    const menuBtn = makeEl('button', 'btn-book', 'View More Options', btnMenuContainer)

    const pPrise = makeEl('p', 'prise', null, cardBody)

    if(prevPrise !== null) {
        const spanP = makeEl('span', 'prev-prise', prevPrise, pPrise)
        const dash = makeEl('span', '', ' - ', pPrise)
    }

    const currentPriseSpan = makeEl('span', 'current-prise', currentPrise, pPrise)
    const itemDescription = makeEl('p', 'item-description', text, cardBody)

}

/*triggerCreation: begin the creation of card process and run makeCard()*/
const triggerCreation = (selectedItem, menuContainer, change=false) => {
    if(change) removeAllChildNodes(menuContainer)
    const aMenu = [...allMenu]
    if(selectedItem !== 'all-items') {
        aMenu.forEach(m => {
            if(m.name === selectedItem) {
            m.menu.forEach(mEl => {
            makeCard(menuContainer, mEl.name, mEl.src, mEl.txt, '$30', '$25')
            })
        }
            })
          
        } else {
             aMenu.forEach(m => {
            m.menu.forEach(mEl => {
            makeCard(menuContainer, mEl.name, mEl.src, mEl.txt, '$30', '$25')
            })
         }) 
        }
}


/*makeMenuCard: Self invoked func, select the parent element and run triggerCreation */
(function makeMenuCard() {
    const menuContainer = document.querySelector('div#menu-content')
    const allBtn = document.querySelectorAll('div#btn-select-group button')
    let selectedItem = 'all-items'
    
    triggerCreation(selectedItem, menuContainer)

    allBtn.forEach(btn =>{
        btn.addEventListener('click', (e) => {
            e.target.className.includes('active') ? selectedItem = btn.value : selectedItem
            triggerCreation(selectedItem, menuContainer, true)
        })
        
        
    })    
    
}())