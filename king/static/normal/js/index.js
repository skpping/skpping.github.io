(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var fontSize = Math.min(w, h)/32;
    if(fontSize > 16) {
        fontSize = 16;
    }
    document.getElementsByTagName('html')[0].setAttribute("style", "font-size:" + fontSize + "px");

    $.fx.interval = 16;
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

}());

$(function(){
    $(".theme-download").click(function () {
        function cssAnimationKicker (elem, from, to, callback) {
            elem.css(from);
            elem[0].offsetHeight;
            elem.css(to)
            elem.one("transitionend webkitTransitionEnd", function(){
                //- callback();
            })
        }

        var blackout = BLACKOUT({"click": true});

        var downloadPanel = $(".modal-panel")
        cssAnimationKicker(downloadPanel,{
            "transform": "translate3d(0,200%,0)",
            "display": "block",
            "opacity": "0"
        },{
            "transform": "translate3d(0,0,0)",
            "opacity": "1"
        })

        blackout.one("clearStart", function () {
            downloadPanel.css({
                "transform": "translate3d(0,200%,0)",
                "opacity": "0"
            })
        })

        blackout.one("clearEnd", function () {
            downloadPanel.hide();
        })
    })


    if(WeixinApi.openInWeixin()){
        $(".iphone-link").parent("a").attr("href", function(){
            return "http://mp.weixin.qq.com/mp/redirect?url=" + encodeURIComponent("http://share.tugether.cn/adto/qrcode?type=ios")
        })

        $(".android-link").parent("a").attr("href", "http://share.tugether.cn/market/down?name=ohsame")
    }

    if(/android/ig.test(navigator.userAgent)&&window.sameRequestHeaders){
        $(".android-link").parent("a").click(function(e){
            e.preventDefault();
            alert('请点击右下角在系统浏览器下载');
        })
    }
});