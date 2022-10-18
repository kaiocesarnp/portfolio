// var btn = document.querySelector("#back-to-top");
// btn.addEventListener("click", function() {
//     window.scrollTo(0, 0);
// });

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  
  $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.one').addClass("sticky");
        }else{
            $('.one').removeClass("sticky");
        }
    });

  var typed = new Typed(".typing", {
    strings:["Kaio César"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
    });
    });

   