document.addEventListener('DOMContentLoaded',function(){
    const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
        const menu = item.querySelector('.desktop-menu');
                //add both click and touch events
            ['click', 'touched'].forEach(eventType=>{
                menu.addEventListener(eventType,function(e){
                e.preventDefault();
                //close all other open items
                menuItems.forEach(otheritem => {
                    if (otheritem !== item){
                        otheritem.classList.remove('active');
                    }
                });
                //Toggle switch
                item.classList.toggle('active');
            });
        });
    });
});