$(document).ready(function () {
    $(".portfolio").addClass('selectedBTN');
    $('#contentWrapper').load('portfolio.html');
});

$(document).on('click', '.panelBTN', function (e) {
    e.preventDefault();
    var btnDivChild = $(this).children()[0];
    switch (btnDivChild.className) {
        case 'portfolio BTNWrapper': {
            $(btnDivChild).addClass('selectedBTN');
            $('.about').removeClass('selectedBTN');
            $('.contact').removeClass('selectedBTN');
            break;
        }
        case 'about BTNWrapper': {
            $(btnDivChild).addClass('selectedBTN');
            $('.portfolio').removeClass('selectedBTN');
            $('.contact').removeClass('selectedBTN');
            break;
        }
        case 'contact BTNWrapper': {
            $(btnDivChild).addClass('selectedBTN');
            $('.portfolio').removeClass('selectedBTN');
            $('.about').removeClass('selectedBTN');
            break;
        }
    }

    var href = $(this).attr('href');

    $('#contentWrapper').fadeOut('slow', function () {
        $('#contentWrapper').empty();
        $('.progress-tracker').remove();
        $('#contentWrapper').load(href, function () {
            $('#contentWrapper').fadeIn('slow');
        });
    });

});

$(document).on('click', '.name-logo', function (e) {
    e.preventDefault();
    $('.panelBTN.firstBTN').click();
});


