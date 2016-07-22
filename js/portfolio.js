$('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
});

$('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0},1200);
});

// scroll function
function scrollToID(id, speed){
    // var offSet = 157;
    var topElementTop = $('#topElement').position().top;
    var topElementOuter = $('#topElement').outerHeight(true);
    var targetOffset = $(id).offset().top - (topElementTop + topElementOuter);
    $('html,body').animate({scrollTop:targetOffset}, 1200);
}