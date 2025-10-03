    var swiper = new Swiper(".mySwiper", {});


       var swiper = new Swiper(".navigationSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },


    }); 
      var swiper = new Swiper(".paginationSwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

        var swiper = new Swiper(".dynamicpaginationSwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });

        var swiper = new Swiper(".paginationprogressSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

       var swiper = new Swiper(".paginationdeductionSwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

       var swiper = new Swiper(".displeypaginationSwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });

       var swiper = new Swiper(".navigationborSwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });


       var swiper = new Swiper(".verticalSwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


        var swiper = new Swiper(".thespacebetweenSwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


        var swiper = new Swiper(".slidesineachviewSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

      var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

        var swiper = new Swiper(".ConcentratedSwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

        var swiper = new Swiper(".Auto-focusedSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

        var swiper = new Swiper(".AutoplaySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

     const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });




    var menuButton = document.querySelector('.menu-button');   
    console.log(menuButton);
    
    menuButton.addEventListener('click', ()=>{
     openMenu();
      
    });
    var swiper = new Swiper('.SlideableMenuswipere', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
            // required because of slideToClickedSlide
            menuButton.removeEventListener('click', openMenu, true);
          } else {
            menuButton.classList.remove('cross');
          }
        },
        slideChangeTransitionEnd: function () {
          var slider = this;
          if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
          }
        },
      },
    });
   console.log(swiper);
   
    
    var openMenu = function () {
       console.log(swiper);
       swiper.slidePrev();
    };

       var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });