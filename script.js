$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });

    var typed= new Typed(".typing-0",{

      strings:["Welcome to Deep Designs.","This is my portfolio"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    })
  
    // typing text animation script
    // var typed = new Typed(".typing", {
    //   strings: ["Back-End Developer", "DSA solver"],
    //   typeSpeed: 200,
    //   backSpeed: 60,
    //   loop: true,
    // });
    
    var typingElement = document.querySelector(".typing");

    function fadeIn() {
      typingElement.style.opacity = 1;
      setTimeout(fadeOut, 3000); // Change the delay time as per your need
    }
    
    function fadeOut() {
      typingElement.style.opacity = 0;
      setTimeout(fadeIn, 1000); // Change the delay time as per your need
    }
    
    fadeIn(); // Call the fadeIn function to start the process
  
   
  
    var typingElement2 = document.querySelector(".typing-2");

    function fadeIn2() {
      typingElement2.style.opacity = 1;
      setTimeout(fadeOut2, 3000); // Change the delay time as per your need
    }
    
    function fadeOut2() {
      typingElement2.style.opacity = 0;
      setTimeout(fadeIn2, 1000); // Change the delay time as per your need
    }
    
    fadeIn2(); // Call the fadeIn function to start the process
  
    
  
    // var typed = new Typed(".typing-2", {
    //   strings: ["Back-End Developer", "DSA solver"],
    //   // typeSpeed: 100,
    //   // backSpeed: 60,
    //   // loop: true,
    // });

   
    // carousel owl-carousel
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  