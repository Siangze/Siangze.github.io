document.addEventListener('DOMContentLoaded',function(){
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        //close all other open items
        item.addEventListener('click',() => {
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
