const modal = document.querySelectorAll(".galery_img");

modal.forEach (galery_img =>{
        galery_img.addEventListener('click', function () {
        // alert('click')
        galery_img.classList.toggle('active')
})
});


// boton menu responsive
const burger_menu = document.getElementById('burger_menu')
const ul_menu = document.getElementsByClassName('ul_menu')

burger_menu.addEventListener('click',function(){
        ul_menu[0].classList.toggle('show')
})


// boton de cerrar modal
