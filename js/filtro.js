 $(function() {   
 
    
    let  nosotros = $('#nosotros').offset().top;
     let  servicio = $('#servicio').offset().top;
      let trabajo = $('#trabajo').offset().top;
    let  contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        
            nosotros = $('#nosotros').offset().top,
            servicio = $('#servicio').offset().top,
            trabajo = $('#trabajo').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

   $('#enlace-nosotros').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nosotros -100
        },600);
    });

   $('#enlace-servicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});