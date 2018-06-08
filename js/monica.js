$(function () {
    $("#slider--main").slick({
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>'
    });

    $("#howwework").slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="75px" height="74px" viewBox="0 0 75 74" enable-background="new 0 0 75 74" xml:space="preserve"><circle fill="none" stroke="#E9004C" stroke-miterlimit="10" cx="37.597" cy="37.499" r="31.752"/><line fill="none" stroke="#E9004C" stroke-miterlimit="10" x1="50.104" y1="37.499" x2="30.23" y2="37.499"/><polygon fill="#E9004C" points="35.2,31.364 36.223,32.463 30.805,37.498 36.223,42.534 35.2,43.632 28.603,37.498 "/></svg></button>'
    });

    $("#facts-slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $("#facts .loader").removeClass("animation");
    });
    $("#facts-slider").on('init', function (event, slick, currentSlide, nextSlide) {
        $("#facts .loader").addClass("animation");
    });
    $("#facts-slider").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $("#facts .loader").addClass("animation");
    });
    $("#facts-slider").slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 6600
    });

});


$(function () {

    window.onscroll = function () { myFunction() };
    var header = document.getElementById("navigation--homepage");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    $('a[href^=\\#]').on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href');  //#tesdtID1
        var pos = $(id).offset();
        console.log(pos.top);
        $('html').animate({ scrollTop: pos.top }, 1000, "linear");
    });
    

    

});



$(window).on("load", function(){

    

    
    
    $(window).on('scroll', function(e) {

        var values = [];
        $('#navigation--homepage a').each(function(){
            var id = $(this).attr("href");
            var pos = $(id).offset();        
            var obj = {};
            obj.id = id;
            obj.pos = pos.top;

            values.push(obj);
        });

        
        var body = $('body');
        offset = body.offset();
        position = offset.top + $(document).scrollTop();
        var filteredValues = values.filter(function(o){ return position >= Math.floor(o.pos) })     

        if (filteredValues.length >= 1) {
            var lastElement = filteredValues[filteredValues.length - 1];  
            var $linkTarget = $('#navigation--homepage a[href="'+lastElement.id+'"]');
            $linkTarget.addClass("active");
            $linkTarget.siblings().removeClass("active");
        } else {
            $('#navigation--homepage a').removeClass("active");
        }  
     });
    

});
