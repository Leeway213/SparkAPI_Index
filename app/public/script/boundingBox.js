//头部拖动一段距离固定显示
$(document).scroll(function(e) {
    var topDistance=$(document).scrollTop();
    if(topDistance<700){
        $("#header").removeClass('scrolled');
        $('#header').css('position','absolute');
    }else{
        $('#header').addClass('scrolled');
        $('#header').css('position','fixed');
    }
});