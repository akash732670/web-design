const texts = ['WEB DESIGNER','GRAPHIC DESIGNER','DIGITAL MARKETER'];
let count = 0;
let index = 0;
let currentText = '';
let letters = '';

(function type() {
    if(count == texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letters = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letters;

    if(letters.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200)

} ());

$(document).ready(function () {
    $(".toggle-menu").click(function() {
        $("nav").toggleClass('active');
    })
});


 $('.carousel').owlCarousel({
     margin: 20,
     loop: true,
     autoplayTime: 1000,
     nav: true,
     autoplay: true,
     dots: true,
     responsive: {
         0: {
             items: 1,
             nav: false
         }
    }
 })

var preloader  = document.getElementById('loading');
function myfunction() {
    preloader.style.display = "none";
}




// just in case if i messed up 



/* const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) */

/* 
(function type() {
    if(count == texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letters = currentText.slice(0, ++index);

    document.querySelector('.con-typing').textContent = letters;

    if(letters.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200)

} ());

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});



//fade in 


$(document).ready(function() {
    
    Every time the window is scrolled ... 
    $(window).scroll( function(){
    
        /* Check the location of each desired element 
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it 
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});

*/