/*--LOADING--*/
let loadingRender = (function ($) {
    let $loadingBox = $('.loadingBox'),
        $run = $loadingBox.find('.run');

    //=>我们需要处理的图片
    let imgList = ["img/icon.png", "img/zf_concatAddress.png", "img/zf_concatInfo.png", "img/zf_concatPhone.png", "img/zf_course.png", "img/zf_course1.png", "img/zf_course2.png", "img/zf_course3.png", "img/zf_course4.png", "img/zf_course5.png", "img/zf_course6.png", "img/zf_cube1.png", "img/zf_cube2.png", "img/zf_cube3.png", "img/zf_cube4.png", "img/zf_cube5.png", "img/zf_cube6.png", "img/zf_cubeBg.jpg", "img/zf_cubeTip.png", "img/zf_emploment.png", "img/zf_messageArrow1.png", "img/zf_messageArrow2.png", "img/zf_messageChat.png", "img/zf_messageKeyboard.png", "img/zf_messageLogo.png", "img/zf_messageStudent.png", "img/zf_outline.png", "img/zf_phoneBg.jpg", "img/zf_phoneDetail.png", "img/zf_phoneListen.png", "img/zf_phoneLogo.png", "img/zf_return.png", "img/zf_style1.jpg", "img/zf_style2.jpg", "img/zf_style3.jpg", "img/zf_styleTip1.png", "img/zf_styleTip2.png", "img/zf_teacher1.png", "img/zf_teacher2.png", "img/zf_teacher3.jpg", "img/zf_teacher4.png", "img/zf_teacher5.png", "img/zf_teacher6.png", "img/zf_teacherTip.png"];

    //=>控制图片加载进度
    let total = imgList.length,
        cur = 0;
    let computed = function () {
        imgList.forEach(function (item) {
            let tempImg = new Image;
            tempImg.src = item;
            tempImg.onload = function () {
                tempImg = null;
                cur++;
                runFn();
            }
        });
    };

    //=>计算滚动条加载长度
    let runFn = function () {
        $run.css('width', cur / total * 100 + '%');
        if (cur >= total) {
            let delayTimer = setTimeout(() => {
                $loadingBox.remove();
                phoneRender.init();
                clearTimeout(delayTimer);
            }, 1500);
        }
    };

    return {
        init: function () {
            $loadingBox.css('display', 'block');
            computed();
        }
    }
})(Zepto);

/*--PHONE--*/
let phoneRender = (function ($) {
    let $phoneBox = $('.phoneBox'),
        $time = $phoneBox.find('.time'),
        $listen = $phoneBox.find('.listen'),
        $listenTouch = $listen.find('.touch'),
        $detail = $phoneBox.find('.detail'),
        $detailTouch = $detail.find('.touch');

    let audioBell = $('#audioBell')[0],
        audioSay = $('#audioSay')[0];

    let $phonePlan = $.Callbacks();

    //=>控制盒子的显示隐藏
    $phonePlan.add(function () {
        $listen.remove();
        $detail.css('transform', 'translateY(0)');
    });

    //=>控制SAY播放
    $phonePlan.add(function () {
        audioBell.pause();
        audioSay.play();
        $time.css('display', 'block');

        //=>随时计算播放时间
        let sayTimer = setInterval(() => {
            //=>总时间和已经播放时间:单位秒
            let duration = audioSay.duration,
                current = audioSay.currentTime;
            let minute = Math.floor(current / 60),
                second = Math.floor(current - minute * 60);
            minute < 10 ? minute = '0' + minute : null;
            second < 10 ? second = '0' + second : null;
            $time.html(`${minute}:${second}`);

            //=>播放结束
            if (current >= duration) {
                clearInterval(sayTimer);
                enterNext();
            }
        }, 1000);
    });

    //=>DETAIL-TOUCH
    $phonePlan.add(() => $detailTouch.tap(enterNext));

    //=>进入下一个区域(MESSAGE)
    let enterNext = function () {
        audioSay.pause();
        $phoneBox.remove();
        messageRender.init();
    };

    return {
        init: function () {
            $phoneBox.css('display', 'block');

            //=>控制BELL播放
            audioBell.play();

            //=>LISTEN-TOUCH
            $listenTouch.tap($phonePlan.fire);
        }
    }
})(Zepto);



/*--MESSAGE--*/
let messageRender = (function ($) {
    let $messageBox = $('.messageBox'),
        $talkBox = $messageBox.find('.talkBox'),
        $talkList = $talkBox.find('li'),
        $keyBord = $messageBox.find('.keyBord'),
        $keyBordText = $keyBord.find('span'),
        $submit = $keyBord.find('.submit'),
        musicAudio = $('#musicAudio')[0];
    let $plan = $.Callbacks();

    //=>控制消息列表逐条显示
    let step = -1,
        autoTimer = null,
        interval = 1500,
        offset = 0;
    $plan.add(() => {
        autoTimer = setInterval(() => {
            step++;
            let $cur = $talkList.eq(step);
            $cur.css({
                opacity: 1,
                transform: 'translateY(0)'
            });
            if (step === 2) {
                $cur.one('transitionend', () => {
                    $keyBord.css('transform', 'translateY(0)')
                        .one('transitionend', textMove);
                });
                clearInterval(autoTimer);
                return;
            }
            if (step >= 4) {
                offset += -$cur[0].offsetHeight;
                $talkBox.css(`transform`, `translateY(${offset}px)`);
            }
            if (step >= $talkList.length - 1) {
                clearInterval(autoTimer);
                let delayTimer = setTimeout(() => {
                    musicAudio.pause();
                    $messageBox.remove();
                    cubeRender.init();
                    clearTimeout(delayTimer);
                }, interval);
            }
        }, interval);
    });

    //=>控制文字及其打印机效果
    let textMove = function () {
        let text = $keyBordText.html();
        $keyBordText.css('display', 'block').html('');
        let timer = null,
            n = -1;
        timer = setInterval(() => {
            if (n >= text.length) {
                clearInterval(timer);
                $keyBordText.html(text);
                $submit.css('display', 'block').tap(() => {
                    $keyBordText.css('display', 'none');
                    $keyBord.css('transform', 'translateY(3.7rem)');
                    $plan.fire();
                });
                return;
            }
            n++;
            $keyBordText[0].innerHTML += text.charAt(n);
        }, 100);
    };

    return {
        init: function () {
            $messageBox.css('display', 'block');
            musicAudio.play();
            $plan.fire();
        }
    }
})(Zepto);
// messageRender.init()
/*--CUBE--*/
// =>只要在移动端浏览器中实现滑动操作,都需要把浏览器默认的滑动行为(例如:页卡切换等)禁止掉
$(document).on('touchstart touchmove ', function (e) {
    e.preventDefault();
});

let cubeRender = (function () {
    let $cubeBox = $('.cubeBox'),
        $box = $cubeBox.find('.box');

    let touchBegin = function (e) {
        //=>this:box
        let point = e.changedTouches[0];
        $(this).attr({
            strX: point.clientX,
            strY: point.clientY,
            isMove: false,
            changeX: 0,
            changeY: 0
        });
    };

    let touching = function (e) {
        let point = e.changedTouches[0],
            $this = $(this);
        let changeX = point.clientX - parseFloat($this.attr('strX')),
            changeY = point.clientY - parseFloat($this.attr('strY'));
        if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
            $this.attr({
                isMove: true,
                changeX: changeX,
                changeY: changeY
            });
        }
    };

    let touchEnd = function (e) {
        let point = e.changedTouches[0],
            $this = $(this);
        let isMove = $this.attr('isMove'),
            changeX = parseFloat($this.attr('changeX')),
            changeY = parseFloat($this.attr('changeY')),
            rotateX = parseFloat($this.attr('rotateX')),
            rotateY = parseFloat($this.attr('rotateY'));
        if (isMove === 'false') return;

        rotateX = rotateX - changeY / 3;
        rotateY = rotateY + changeX / 3;
        $this.css(`transform`, `scale(.6) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`).attr({
            rotateX: rotateX,
            rotateY: rotateY
        });
    };

    return {
        init: function () {
            $cubeBox.css('display', 'block');

            //=>事件绑定实现相关效果
            $box.attr({
                rotateX: -30,
                rotateY: 45
            }).on({
                touchstart: touchBegin,
                touchmove: touching,
                touchend: touchEnd
            });
            $box.find('li').tap(function () {
                $cubeBox.css('display', 'none');
                let index = $(this).index();
                detailBox.init(index)

            })
        }
    }
})();
cubeRender.init()
let detailBox = (function (index = 0) {
    let $detailBox = $('.detailBox'),
        $returLink = $detailBox.find('.returnLink'),
        $cubeBox = $('.cubeBox'),
        $m = $('.m'),
        wapExa = null;

    let change = function (example) {
        // example.activeIndex
        // 当前活动块的索引
        // example.slides数组，存储了当前所有活动块
        //     example.slides[example.activeIndex]当前活动块
        let {slides: slideAry, activeIndex} = example;
        if (activeIndex === 0) {
            $m.makisu({
                selector: 'dd',
                overlap: 0.6,
                speed: 0.8
            });
            $m.makisu('open')
        } else {
            $m.makisu({
                selector: 'dd',
                overlap: 0,
                speed: 0
            });
            $m.makisu('close')
        }
        [].forEach.call(slideAry, (item, index)=> {
            if (index === activeIndex) {
                item.id = 'page' + (activeIndex + 1);
                return;
            }
            item.id = null;
        });
    };
    return {
        init: function (index = 0) {
            $detailBox.css('display', 'block');
            if (!wapExa) {
                $returLink.tap(() => {
                    $detailBox.css('display', 'none');
                    $cubeBox.css('display', 'block');
                });
                //不存在实例的情况下，我们初始化，如果已经初始化了，直接运动到具体位置即可，不需要重新初始化
                wapExa = new Swiper('.swiper-container', {
                    // loop:true,
                    // 、、如果采用切换效果是3dd的最好不要设置无缝衔接，在部分安卓机中，swip是不完善的
                    effect: 'coverflow',
                    onInit: change,
                    onTransitionEnd: change
                });
            }
            index = index > 5 ? 5 : index;
            wapExa.slideTo(index, 0)
            // 第二个参数是速度，我们设置0是让其立即运动在指定位置
        }
    }
})();
detailBox.init( );

//我们是基于annimate.css帧动画完成的动画，我们让需要运动的元素初始样式 透明度是0，/
// 当设置id让其运动的时候，我们自己在动画公式完成的时候，让我透明度是1/