const modal = document.querySelectorAll(".galery_img");
const closer = document.getElementById('closer')
var container = document.querySelector('.img_container')


modal.forEach (galery_img =>{
        galery_img.addEventListener('click', function () {
        // alert('click')
        galery_img.classList.add('active')
        closer.style.display = 'block'    
})
});

closer.addEventListener('click',function(){
        closer.style.display = 'none';
        modal.forEach (galery_img =>{
                galery_img.classList.remove('active')
               
        })
        });

/*
var color = document.querySelector(".diseno");
color.addEventListener('click', function(){
        color.p.style.color = #c4c4c4;
}) 
*/

// boton menu responsive
const burger_menu = document.getElementById('burger_menu')
const ul_menu = document.getElementsByClassName('ul_menu')

burger_menu.addEventListener('click',function(){
        ul_menu[0].classList.toggle('show')
})

var ventana_actual = window.location
        //console.log(ventana_actual)
// boton de cerrar modal

//Sobre mi
var containerModal = document.getElementById('container_modal_about')
var aboutMe = document.getElementById('about_me')
var close = document.getElementById('close_modal')
console.log('close')

aboutMe.addEventListener('click', () => {
        containerModal.style.visibility = 'visible'
})

close.addEventListener('click', ()=>{
        containerModal.style.visibility = 'hidden'
})