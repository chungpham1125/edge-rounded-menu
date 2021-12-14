$(document).ready(function() {
    $('.menu-item').click(function() {
        $('.menu-item').removeClass('active');
        $(this).toggleClass('active');
    });
});