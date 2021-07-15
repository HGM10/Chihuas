window.addEventListener('load', function(){
    const glider = new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    });
    function sliderAuto(slider, miliseconds) {
        const slidesCount = slider.track.childElementCount;
        let slideTimeout = null;
        let nextIndex = 1;
       
        function slide () {
          slideTimeout = setTimeout(
            function () {
              if (nextIndex >= slidesCount ) {
                nextIndex = 0;
              }
              slider.scrollItem(nextIndex++);
            },
            miliseconds
          );
        }
       
        slider.ele.addEventListener('glider-animated', function() {
          window.clearInterval(slideTimeout);
          slide();
        });
       
        slide();
       }
       
       sliderAuto(glider, 2000);
});


