
var windowHeight = $(window).height(),
        upperBarHeight = $('.navbar .upper').innerHeight(),
        navHeight =$('.navbar').innerHeight();

/* Adjusting Landing Page Height*/   
$('.home-page').height(windowHeight - (upperBarHeight + navHeight));