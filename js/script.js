$(function (){
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        $nav.toggleClass("cambio", $(this).scrollTop() > $nav.height());
    });
});

