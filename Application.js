document.addEventListener('DOMContentLoaded',function(){
    const menuItems = document.querySelectorAll('.menu-item'); //store elements with class 'menu-item'
        menuItems.forEach(item => {
        const menu = item.querySelector('.desktop-menu'); //find the element: desktop-menu
                //add both click and touch events
            ['click', 'touched'].forEach(eventType=>{
                menu.addEventListener(eventType,function(e){
                e.preventDefault(); //prevent default browser behavior (scrolling on touch)
                //close all other open items
                menuItems.forEach(otheritem => {
                    if (otheritem !== item){
                        otheritem.classList.remove('active');
                    }
                });
                //Toggle the active class on the clicked item: if it's active then remove it; if it's not active then add it
                item.classList.toggle('active');
            });
        });
    });
});