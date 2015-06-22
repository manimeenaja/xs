$(function () {

    $("#slider").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function (event, ui) {
            var wd = parseInt($('.zip-area').innerWidth());
            if (ui.position.left > (wd)) {
                $("#well").fadeOut();
            } else {
                // Apparently Safari isn't allowing partial opacity on text with background clip? Not sure.
                // $("h2 span").css("opacity", 100 - (ui.position.left / 5))
            }
        },
        stop: function (event, ui) {
            var wd = parseInt($('.zip-area').innerWidth());
            if (ui.position.left < (wd) + 1 ) {
                $(this).animate({
                    left: 0
                })
            }
        }
    });

    // The following credit: http://www.evanblack.com/blog/touch-slide-to-unlock/

    $('#slider')[0].addEventListener('touchmove', function (event) {
        var wd = parseInt($('.zip-area').innerWidth());
        
        event.preventDefault();
        var el = event.target;
        var touch = event.touches[0];
        curX = touch.pageX - this.offsetLeft - 73;
        /*console.log(wd);
        console.log('<br>');
        console.log((wd));
        console.log('<br>');
        console.log(curX);*/
        
        if (curX <= 0)
            return;
        if (curX > (wd)) {
            $('#well').fadeOut();
            $('#bottom').animate({
                bottom: '-9%'
            }, 1000).fadeOut();
            $('#top').animate({
                top: '-92%'
            }, 800).fadeOut(0,function(){
       window.location.href = "signin.html";
    });
        }
        el.style.webkitTransform = 'translateX(' + curX + 'px)';
    }, false);

    $('#slider')[0].addEventListener('touchend', function (event) {
        this.style.webkitTransition = '-webkit-transform 0.3s ease-in';
        this.addEventListener('webkitTransitionEnd', function (event) {
            this.style.webkitTransition = 'none';
        }, false);
        this.style.webkitTransform = 'translateX(0px)';
    }, false);

});