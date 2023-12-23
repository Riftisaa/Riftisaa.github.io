const multipleItemCarousel = document.querySelector('#carouselExampleControls');

if(window.matchMedia("min-width:1240px").matches){
    

    var carouselWidth = $('#innerPopular')[0].scrollWidth;
    var cardWidth = $('.popularItem').width();
    var scrollPosition = 0;

    $('#popularNext').on('click', function () {
        if(scrollPosition < (carouselWidth - cardWidth * 4 )){

        
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('#innerPopular').animate({scrollLeft: scrollPosition},800)
        }
    });

    $("#popularPrev").on("click", function () {
    if (scrollPosition > 0) {
        console.log('prev')
        scrollPosition -= cardWidth;
        $("#innerPopular").animate(
        { scrollLeft: scrollPosition },
        600);
    }

    });
}
else if(window.matchMedia("max-width:1239px").matches){
    

    var carouselWidth = $('#innerPopular')[0].scrollWidth;
    var cardWidth = $('.popularItem').width();
    var scrollPosition = 0;

    $('#popularNext').on('click', function () {
        if(scrollPosition < (carouselWidth - (cardWidth * 2 ))){

        
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('#innerPopular').animate({scrollLeft: scrollPosition},800)
        }
    });

    $("#popularPrev").on("click", function () {
    if (scrollPosition > 0) {
        console.log('prev')
        scrollPosition -= cardWidth;
        $("#innerPopular").animate(
        { scrollLeft: scrollPosition },
        600);
    }

    });
}
else{
    var carouselWidth = $('#innerPopular')[0].scrollWidth;
    var cardWidth = $('.popularItem').width();
    var scrollPosition = 0;

    $('#popularNext').on('click', function () {
        if(scrollPosition < (carouselWidth - cardWidth )){

        
            console.log('next1');
            scrollPosition = scrollPosition + cardWidth;
            $('#innerPopular').animate({scrollLeft: scrollPosition},800)
        }
    });

    $("#popularPrev").on("click", function () {
    if (scrollPosition > 0) {
        console.log('prev')
        scrollPosition -= cardWidth;
        $("#innerPopular").animate(
        { scrollLeft: scrollPosition },
        600);
    }

    });
}



//   if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
//     scrollPosition += cardWidth;  //update scroll position
//     $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//   }
// });

// $(".carousel-control-prev").on("click", function () {
//   if (scrollPosition > 0) {
//     scrollPosition -= cardWidth;
//     $(".carousel-inner").animate(
//       { scrollLeft: scrollPosition },
//       600
//     );
//   }

const multipleItemCarouselUser = document.querySelector('#carouselExampleControlsUser');

if(window.matchMedia("(min-width:1023px").matches){
    

    var carouselWidthUser = $('#userCarousel')[0].scrollWidth;
    var cardWidthUser = $('.userReview').width();
    var scrollPositionUser = 0;

    $('#userNext').on('click', function () {
        if(scrollPositionUser < (carouselWidthUser - (cardWidthUser * 2) )){

        
            console.log('nextUser');
            scrollPositionUser = scrollPositionUser + cardWidthUser;
            $('#userCarousel').animate({scrollLeft: scrollPositionUser},400)
        }
    });

    $("#userPrev").on("click", function () {
    if (scrollPositionUser > 0) {
        console.log('prevUser')
        scrollPositionUser -= cardWidthUser;
        $("#userCarousel").animate(
        { scrollLeft: scrollPositionUser },
        800);
    }

    });
}else{
    $(multipleItemCarouselUser).addClass('slide');
}



// $(".dropdown-menu").ready(function() {

//     if ((screen.width<1023)) {
//         // if screen size is 1025px wide or larger
//         $(".yourClass").css('display', 'none'); // you can also use $(".yourClass").hide();
//     }
//     elseif ((screen.width<=1024))  {
//         // if screen size width is less than 1024px
//         $(".yourClass").css('display', 'block'); // here you can also use show();
//     }
//     });