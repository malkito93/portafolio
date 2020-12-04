const modal = document.querySelectorAll(".galery_img");

modal.forEach (galery_img =>{
        galery_img.addEventListener('click', function () {
        // alert('click')
        galery_img.classList.toggle('active')
})
})


// boton de cerrar modal





