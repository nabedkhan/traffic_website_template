
        $(document).ready(function(){
            $('.case-study-slider').slick({
                slidesToShow: 4,
                centerMode: true,
                centerPadding: '30px',
                arrows: false,
                variableWidth: true,
                dots: false,
                swipeToSlide: true,
                focusOnSelect: true,
                infinite: false,
                responsive: [{

                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: false,
                    arrows: false
                  }

                }, {

                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                  }

                }, {

                  breakpoint: 300,
                  settings: "unslick" // destroys slick

                }]
            });

            $('.testimonial-slider').slick({
                  dots: true,
                  arrows: false,
                  infinite: true,
                  speed: 300,
                });
        });