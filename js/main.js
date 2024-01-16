var dropToggle = $('.menu_right > li').has('ul').children('a');
dropToggle.on('click', function() {
dropToggle.not(this).closest('li').find('ul').slideUp(200);
$(this).closest('li').children('ul').slideToggle(200);
return false;
});

$( ".toggle_icon" ).on('click', function() {
$( 'body' ).toggleClass( "open" );
});

var heroCarousel = $('.heroCarousel');
heroCarousel.owlCarousel({
loop:true,
margin:10,
nav: false,
startPosition: 1,
autoplay: true,
responsiveClass:true,
responsive:{
  0:{
      items:1
  }
}
});

 // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
});



// counter
document.addEventListener("DOMContentLoaded", () =>{
  function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if(current == end){
           clearInterval(timer);
        }
    }, step);
  }
   counter("count1", 0,10,2000);
   counter("count2", 100,20,3000);
   counter("count3", 0,30,4000);
   counter("count4", 0,50,2000);
});

// loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

var testimonialCarousel = $('.testimonialCarousel');
testimonialCarousel.owlCarousel({
loop:true,
margin:80,
startPosition: 2,
nav: false,
autoplay: true,
responsiveClass:true,
responsive:{
  0:{
      items:1
  },
  1000:{
      items:2,
      loop:true
  }
}
});

