$('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
});

$('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1200);
});

// scroll function
function scrollToID(id, speed) {
    // var offSet = 157;
    var topElementTop = $('#topElement').position().top;
    var topElementOuter = $('#topElement').outerHeight(true);
    var targetOffset = $(id).offset().top - (topElementTop + topElementOuter);
    $('html,body').animate({scrollTop: targetOffset}, 1200);
}

var modal = $('#myModal');
var modalImg = $("#img01");
var captionText = $("#caption");

$(document).on('click','.myImg', function (event) {
    event.preventDefault();

    $(modalImg).attr('src',this.src);
    $(modalImg).attr('alt',this.alt);
    $(captionText).html(this.dataset.description);
    $(modal).modal('show');
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $(modal).modal('hide');
}