//banner轮播图动画
var $blockLeft=$('#blockAnimationLeft');
var $blockRight=$('#blockAnimationRight');
function leftAnimated(){
    var $blockLeftFirst=$blockLeft.children('.first:not(.second)');
    var $blockLeftSecond=$blockLeft.children('.second:not(.third)');
    var $blockLeftThird=$blockLeft.children('.third:not(.fourth)');
    var $blockLeftFourth=$blockLeft.children('.fourth:not(.fifth)');
    var $blockLeftFifth=$blockLeft.children('.first.second.third.fourth.fifth');
    $blockLeftFirst.addClass('second').show();
    $blockLeftSecond.addClass('third').show();
    $blockLeftThird.addClass('fourth').show();
    $blockLeftFourth.addClass('fifth').show();
    $blockLeftFifth.removeClass("second third fourth fifth");
}

//banner轮播图右侧动画
function rightAnimated(){
    var $blockRightFirst=$blockRight.children('.first:not(.second)');
    var $blockRightSecond=$blockRight.children('.second:not(.third)');
    var $blockRightThird=$blockRight.children('.third:not(.fourth)');
    var $blockRightFourth=$blockRight.children('.fourth:not(.fifth)');
    var $blockRightFifth=$blockRight.children('.first.second.third.fourth.fifth');
    $blockRightFirst.addClass('second third fourth fifth');
    $blockRightSecond.removeClass('second');
    $blockRightThird.removeClass('third');
    $blockRightFourth.removeClass('fourth');
    $blockRightFifth.removeClass("fifth");
}

//banner中部动画
var $blockMiddle=$('#blockAnimationForeground');
function middleAnimated(){
    //$blockMiddle.addClass('fore-background');
    $blockMiddle.css({
        "left":0,
        "right":"initial",
        "width":"100%"
    })
    setTimeout(function(){
        $blockMiddle.css({
            "left":"initial",
            "right":0,
            "width":0
        })
        setTimeout(function(){
            $blockMiddle.css({
                "left":0,
                "right":"initial",
                "width":"100%"
            })
            setTimeout(function(){
                $blockMiddle.css({
                    "left":"initial",
                    "right":0,
                    "width":0
                })
            },200)
        },200)
    },200)
}
function cycleAnimated(){
    setTimeout(function(){
        leftAnimated();
        setTimeout(function(){
            middleAnimated();
            setTimeout(function(){
                rightAnimated();
                cycleAnimated();
            },600);
            
        },600);
    },2000);
}
cycleAnimated();


//图片动画
var $middleSvg=Snap('#landingScaleGraph');
var $ball=$("#landingScaleDotDiv");
var $minite=$('#digitMinutes');
var $second=$('#digitSeconds');
var path =$middleSvg.paper.path({
    d: 'M0 160l21.374-24.937a6 6 0 0 1 6.453-1.787l16.07 5.356a6 6 0 0 0 6.698-2.092l19.963-26.617a6 6 0 0 1 3.813-2.318l19.258-3.21a6 6 0 0 0 3.813-2.318l20.066-26.754a6 6 0 0 1 6.48-2.16l16.444 4.796a6 6 0 0 0 6.089-1.69l19.797-21.447a6 6 0 0 1 4.16-1.925l18.379-.766a6 6 0 0 0 4.823-2.79L216 14l24-14v194a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8v-34z',
     fill: 'rgba(255,255,255,0.13)'
    });
var length = Snap.path.getTotalLength(path);
var validLength=length-480;
function svgAnimated(){
    var minute=4,second=0,rateSecond=25;
    Snap.animate(0, validLength, function(val) {
        
        var point = Snap.path.getPointAtLength(path, val);
        $ball.css({
            "left":point.x,
            "top":point.y+96,
            "height":point.x+100
        }) 
        second=second+1;  
        if(second==60){
            second=0;
        } 
        if(second%2==1){
            rateSecond=rateSecond+1;
         }
        if(rateSecond==60){
            rateSecond=0;
            minute=minute+1;
        }
         
        $minite.html(minute);
        if(rateSecond<10){
            $second.html('0'+rateSecond); 
        }else{
            $second.html(rateSecond); 
        }
        
        
    }, 5000, mina.easeout(), function() {
        $ball.css({
            "left":0,
            "top":256,
            "height":100
        })
        minute=4;
        second=0;
        rateSecond=25;
        $minite.html(minute);
        $second.html(rateSecond); 
        svgAnimated();
    });
}
svgAnimated();

//图片随机高亮
//随机生成两个不同随机整数(需要优化)
function randomInt(length){
   var randomNum1=Math.ceil(Math.random()*length)-1;
   var randomNum2=Math.ceil(Math.random()*length)-1;
   if(randomNum1==randomNum2){
       if(randomNum1==0){
           return [randomNum1,randomNum2+1]
       }else if(randomNum1==length-1){
           return [randomNum1-1,randomNum2];
       }else{
           return [randomNum1-1,randomNum2+1];
       }
   }else{
       return [randomNum1,randomNum2];
   }
   
}
function randomHigh(){
    var $destiEles;
    var destiLength;
    var ramdomNum;
    setInterval(function(){
        $destiEles=$('#landingFullyManaged').children('p');
        destiLength=$destiEles.length;
        var randomArr=randomInt(destiLength)
        $destiEles.removeClass('highlight');
        $destiEles.eq(randomArr[0]).addClass('highlight');
        $destiEles.eq(randomArr[1]).addClass('highlight');
    },2000);
}
randomHigh();

