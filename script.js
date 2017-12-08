


$( document ).ready(function() {

    var offset = 0

    /* nav links */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
                $('.main-nav').toggleClass("show-nav")
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


    /* nav mobile */
    $(".mobile-nav-icon").click(function() {

        var mainNav = $('.main-nav');
        var fadeInRight = $(".js-wp-fadeInRight");
        var fadeOutRight = $(".js-wp-fadeOutRight");

        var icon = $('.mobile-nav-icon i');

        if(icon.hasClass("ion-navicon-round")) {
            console.log("ion-close-round")
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
            mainNav.toggleClass("show-nav")
        } else {
            console.log("ion-navicon-round")
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
            mainNav.toggleClass("show-nav")
        }
        
    });


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.video-background').css('display', 'none');
        $('.image-background').css('display', 'block');
        $('.image-embed').css('overflow', 'visible');
        offset = 90;
    }
    
});

