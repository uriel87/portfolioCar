


$( document ).ready(function() {

    var mainNavSec = $('.main-nav');
    var fadeInRight = $(".js-wp-fadeInRight");
    var fadeOutRight = $(".js-wp-fadeOutRight");
    var icon = $('.mobile-nav-icon i');
    var backgroundMainNavMobile = $(".background-mainNav-mobile");



    var showNav = function() {
        console.log("ion-close-round");
        icon.addClass("ion-close-round");
        icon.removeClass("ion-navicon-round");
        backgroundMainNavMobile.addClass("show-background-mainNav-mobile");
        mainNavSec.addClass("show-nav")
    }

    var hideNav = function () {
        console.log("ion-navicon-round")
        icon.addClass("ion-navicon-round");
        icon.removeClass("ion-close-round");
        backgroundMainNavMobile.removeClass("show-background-mainNav-mobile");
        mainNavSec.removeClass("show-nav")
    }


    /* nav links */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                hideNav()
                return false;
            }
        }
    });


    /* overview car animate */
    $(".overview").waypoint(function(direction) {
        $(".js-wp-fadeLeft").addClass("animated fadeInLeft")
    }, {
        offset: '80%'
    });

    function reset($elem) {
        $elem.before($elem.clone(true));
        var $newElem = $elem.prev();
        $elem.remove();
        return $newElem;
    }


    // $(".mobile-nav-icon").click(function() {
    //     console.log("clik menu bar")
    //     $(".main-nav").toggleClass(".show-nav");
    //     // $(".background-mainNav-mobile").toggleClass("show-background-mainNav-mobile");
    // });

    /* nav mobile */
    $(".mobile-nav-icon").click(function() {
        if(icon.hasClass("ion-navicon-round")) {
            showNav();
        } else {
            hideNav();
        }
    });


    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //     $('.video-background').css('display', 'none');
    //     $('.image-background').css('display', 'block');
    //     $('.image-embed').css('overflow', 'visible');
    // }

});

