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

// $(document).on('click','.pop', function (event) {
//     event.preventDefault();
//     var img =$(this).find('img').attr('src');
//     $('.imagepreview').attr('src', img);
//     $('#imageModal').modal('show');
// });

// Get the modal
var modal = $('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $('#myImg');
var modalImg = $("#img01");
var captionText = $("#caption");

$(document).on('click','.myImg', function (event) {
    event.preventDefault();
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
    // $('.imagepreview').attr('src', img);
    $(modal).modal('show');
});


// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $(modal).modal('hide');
}