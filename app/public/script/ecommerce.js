//图片滑动特效
$(document).on('mousedown','.annotationSliderImg',function(e){
    var $destiEle=$(this).siblings('.annotationOverlayClip');
    var $fixedEle=$(this).siblings('.annotationBackdrop');
    var $this=$(this);
    var startX=$this.offset().left;
    var startLeft=$destiEle.position().left;
    var startWidth=$fixedEle.width();
    $(document).off('mousemove').on('mousemove',function(e){
        
            $destiEle.css({
                "left":startLeft+e.clientX-startX,
                "width":startWidth+startX-e.clientX
             })
             $this.css({
                 "left":startLeft+e.clientX-startX
             })
             $destiEle.children('img').css({
                 "left":startX-e.clientX-startLeft
             })
            if($destiEle.position().left<0){
                $destiEle.css({
                    "left":0,
                    "width":startWidth
                 })
                 $this.css({
                     "left":0
                 })
                 $destiEle.children('img').css({
                     "left":0
                 })
                
            }
            if($destiEle.position().left>startWidth){
                $destiEle.css({
                    "left":startWidth,
                    "width":0
                 })
                 $this.css({
                     "left":startWidth
                 })
                 $destiEle.children('img').css({
                     "left":-startWidth
                 })
            }
             
             
             console.log(startWidth)

    })
    $(document).on('mouseup',function(e){
            $('.annotationSliderImg').off('mousedown');
            $(document).off('mousemove');
    })
})

//加载进度显示
$(document).scroll(function(e){
    var topDistance=$(this).scrollTop();
    var $destiEle;
    $destiEle=$('.servicesScrollLoading.scrollLoading');
    var firstDistance=$destiEle.eq(0).offset().top-window.innerHeight ;
    var secondDistance=$destiEle.eq(1).offset().top-window.innerHeight ;
    var thirdDistance=$destiEle.eq(2).offset().top-window.innerHeight ;
    console.log($destiEle.eq(0).offset().top);
    console.log(window.innerHeight);
    if(topDistance>firstDistance){
        if(!$destiEle.eq(0).hasClass('loaded')){
            setTimeout(function(){            
                $destiEle.eq(0).addClass('loaded');
            },1000);
        }
        
    }
    if(topDistance>secondDistance){
        if(!$destiEle.eq(1).hasClass('loaded')){
            setTimeout(function(){            
                $destiEle.eq(1).addClass('loaded');
            },1000);
        }
        
    }
    if(topDistance>thirdDistance){
        if(!$destiEle.eq(2).hasClass('loaded')){
            setTimeout(function(){            
                $destiEle.eq(2).addClass('loaded');
            },1000);
        }
        
    }
})
