const menuCardTriggerAnimation = () => {
    let menuCards = document.querySelector('div.menu-cards');
    window.addEventListener('scroll', () => {
        console.log(isElementInViewPort(menuCards))
        if(isElementInViewPort(menuCards)) {
           if(!menuCards.className.includes('add-animation')) menuCards.className += ' add-animation'
        }
    })
}



/*addClass: Add a Class to element win it's in view */
(function addClass() {
    menuCardTriggerAnimation()
})()

function isElementInViewPort(element){
     let rect = element.getBoundingClientRect();    

     let isTopInViewPort = rect.top >= 0
         

    // check if element is completely visible inside the viewport
    if(isTopInViewPort) {
        return true
    } else {
        return false
    }
   }
   

  
  