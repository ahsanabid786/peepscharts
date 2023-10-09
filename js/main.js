(function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#show-top").addClass( "show-top" );
    }
    else {
      $("#show-top").removeClass( "show-top" );    
    }
  });

  var current_width = $(window).width();

  
    $(".dropdown-toggle").removeAttr('data-toggle');
  


  // menu sticky
  $(window).on("scroll", function () {
    if(current_width > 992){
      
      $(".navbar-collapse").addClass( "show" );

      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky" );
      }
      else {
        $("header").removeClass( "sticky" );     
      }
    }
    else{
      if ($(this).scrollTop() > 1) {
        $("header").addClass( "sticky-mobile" );
      }
      else {
        $("header").removeClass( "sticky-mobile" );     
      }
    }
  });


  $( document ).ready(function() {
    if(current_width > 992){
        
      $(".navbar-collapse").addClass( "push-right" );
    }
    else{
      
      $(".navbar-collapse").removeClass( "push-right" );
    }
  });
  

  $(".list-toggle").click(function(event) {
    event.preventDefault();
    $(this).next("ul.inner").slideToggle();
    
  });


    // dropdown responsive
    if(current_width < 1100){
      $(".dropdown .icon").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
  
        $(this).next().toggle();
        
      });
    }

  



  document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;

    const links = document.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (currentLocation.includes(linkPath) && linkPath !== "/") {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });


  
  // counter js



  $('.count').each(function () {

    $(this).prop('Counter',0).animate({

      Counter: $(this).text().replace(/,/g, '')

    }, {

        duration: 7000,

        easing: 'swing',

        step: function (now) {

            $(this).text(Math.ceil(now).toLocaleString());

        }

    });

});


$("#home-testimonials").owlCarousel({

  dots: false,
  responsiveClass:true,
  loop: true,
  autoplay: true,
  smartSpeed: 300, 
  autoplayTimeout:2000,
  nav: true,
  navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1
      },
      1050:{
      items:2
      },
      1200:{
          items:2
      },
      1400:{
        items:2
      },
  }
});



//toggle monthly and yearly prices

const toggleSwitch = document.getElementById('toggleSwitch');
const monthlyPrice = document.getElementById('monthlyPrice');
const yearlyPrice = document.getElementById('yearlyPrice');

toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    monthlyPrice.style.display = 'none';
    yearlyPrice.style.display = 'block';
  } else {
    monthlyPrice.style.display = 'block';
    yearlyPrice.style.display = 'none';
  }
});


const btnSee = document.getElementById('btn-see');
const plan = document.getElementById('pricing-plan');

btnSee.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (plan.style.display === 'none' || plan.style.display === '') {
        plan.style.display = 'block';
    } else {
        plan.style.display = 'none';
    }
});
})(jQuery); // End of use strict



