document.addEventListener('scroll',function move() {
    var scrolling = $(window).scrollTop();    
    var studyOffset = $("#count").offset().top;
    
    if (scrolling >= studyOffset - 300) {
        $("#count .row .counter").show(); 
        $('.timer').countTo();
        document.removeEventListener('scroll',move)
    }
    
});


// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(52.525595,13.393085);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

$(document).ready(function(){

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 100) {
            $('.scrollTop').show()
        } else {
            $('.scrollTop').hide()
        }
    });

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },450);
    });

    $("i.icon ").click(function(){
        $("nav .nav-content ul").slideToggle()
    })

});

