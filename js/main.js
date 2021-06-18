$('#mobile-toogle').click(function(){
    if($('.navbar-menu').hasClass('active')) {
        $('.navbar-menu').removeClass('active');
    }
    else {
        $('.navbar-menu').addClass('active');
    }
});
$('.menu-dropdown').click(function(){
    if($(this).hasClass('active')) {
        $('.menu-dropdown').removeClass('active');
        $('.navbar-desktop').removeClass('active');
    }
    else {
        $(this).addClass('active');
        $('.navbar-desktop').addClass('active');
    }
    if($('.menu-dropdown').not(this).hasClass('active')) {
        $('.menu-dropdown').removeClass('active');
        $(this).addClass('active');
    }
});
$(window).bind('scroll', function(){
    if ($(window).scrollTop() > 38) {
        $('.navbar-desktop').addClass('fixed');
    } else {
        $('.navbar-desktop').removeClass('fixed');
    }
});

$('.menu-container li').hover(function(){
    
    if($(this).hasClass('active')) {
        $(this).removeClass('active');
    }
    else {
        $(this).addClass('active');
    }
    if($(this).hasClass('location-content') && $(this).hasClass('active')){
        $('#location-content').css({
            "display" : "flex"
        });
        $(this).css({
            'background-color' : '#fff',
            'font-weight' : 'bold'
        })
    }
    else {
        $('#location-content').css({
            "display" : "none"
        });
        $('.location-content').css({
            'background-color' : 'transparent',
            'font-weight' : 'normal'
        })
    }
    if($(this).hasClass('tax-content') && $(this).hasClass('active')){
        $('#tax-content').css({
            "display" : "flex"
        });
        $(this).css({
            'background-color' : '#fff',
            'font-weight' : 'bold'
        })
    }
    else {
        $('#tax-content').css({
            "display" : "none"
        });
        $('.tax-content').css({
            'background-color' : 'transparent',
            'font-weight' : 'normal'
        })
    }
    if(!$('.menu-container li').hasClass('active')){
        $('#location-content').css({
            "display" : "flex"
        });
        $('.location-content').css({
            'background-color' : '#fff',
            'font-weight' : 'bold'
        })
    }
});