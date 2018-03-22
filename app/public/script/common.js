//联系弹框
function contactBox(){
    var $contact=$('#contactModal');
    $contact.show();
}
$(document).on('click','#landingBannerStarted,#toolsBannerStarted,#contactBannerButton,.headerItemBg.nav-header',function(e){
    var validValue=document.getElementById('contactBannerForm').checkValidity();
    if($(this).attr('id')=='contactBannerButton'){
        if(validValue){
            var contactValue=$('#contactEmail').val();
            $('#contactModalEmail').val(contactValue);
            contactBox();
            return false;
        }
    }else{
        contactBox();
    }
    
})
$(document).on('click','#contactModal',function(e){
    $(this).hide();
})
$(document).on('click','#contactModalInner',function(e){
    e.stopPapagation();
})
//手机端交互
$(document).on('click','.menu.headerToggleImg',function(e){
    $(this).closest('.servicesImageRec').addClass('headerExpanded');
})
$(document).on('click','.cross.headerToggleImg',function(e){
    $(this).closest('.servicesImageRec').removeClass('headerExpanded');
})
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

//子页面banner模块动画
function childBannerAnimated(){
    setTimeout(function(){
        $('#toolsBannerImgOverlay').addClass('revealed')
    },500);
}
childBannerAnimated();
//子页面轮播图
var playNum=2;
//定时器关闭id
var cycleId;
var playDes=[
    'shapes',
    'classes',
    'pixel',
    'country'
]
var $cycleExample=$('#toolsExamples');
function cyclePlay(){
        cycleId=setTimeout(function(){
        $cycleExample.removeClass('shapes classes pixel country').addClass(playDes[playNum]);
        playNum++;
        if(playNum>=playDes.length){
            playNum=0;
        }
        cyclePlay();
    },2000);
}
cyclePlay();
$(document).on('click','.toolsExamplesItem',function(e){
    var toolIndex=$(this).index();
    clearTimeout(cycleId);
    playNum=toolIndex;
    $cycleExample.removeClass('shapes classes pixel country').addClass(playDes[playNum]);
    cyclePlay();
})
