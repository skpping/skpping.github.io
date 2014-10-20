$(function() {


// // 这一段为演示代码
//   setTimeout(function() {
//     $('#loading').hide();
//   }, 5000);
// // 这一段为演示代码



  // 为判断IE浏览器定义
  var browser = navigator.appName,
      b_version = navigator.appVersion,
      version = b_version.split(";"),
      trim_Version = version[1].replace(/[ ]/g,""); 
  
  // 点击点点翻页
  $(".pagination a").click(function(e){
    e.preventDefault();
    // Remove the selected class from the currently selected indicator(取消事件的默认动作。)
    $(this).parent().parent().find(".selected").removeClass("selected");
    // Make the clicked indicator the selected one
    $(this).addClass("selected");
    
    updateSlideshowForSelectedPage();
  });
  
  // 点击箭头翻页
  $("#next").click(function(e) {
    goToNext();
  });
  
  $("#prev").click(function(e) {
    goToPrev();
  });

  // Keyboard shortcuts-快捷键
  $("body").keyup(function(e) {
    if (e.keyCode == 39) {
      // 判断IE7 8不执行
      if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0" || trim_Version=="MSIE7.0" || trim_Version=="MSIE8.0") {return;}

      // Key right
      goToNext();
    } else if (e.keyCode == 37) {
      // 判断IE7 8不执行
      if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0" || trim_Version=="MSIE7.0" || trim_Version=="MSIE8.0") {return;}
      
      // Key left
      goToPrev();

    }
  });

  function goToNext() {
    // Exit if there are no more spinners
    if ($(".pagination .selected").parent().index()+1 >= $(".pagination li").length){
        
        $(".pagination .selected")
          .removeClass("selected")
          .parent().siblings().eq(0).find("a").addClass("selected");
        
        updateSlideshowForSelectedPage();

    }else{

        $(".pagination .selected")
          .removeClass("selected")
          .parent().next().find("a").addClass("selected");
        
        updateSlideshowForSelectedPage();
    }

  }
  
  function goToPrev() {
    // Exit if the currently selected spinner is the first one
    if ($(".pagination .selected").parent().index() <= 0){
        
        $(".pagination .selected")
          .removeClass("selected")
          .parent().siblings().eq(7).find("a").addClass("selected");
        
        updateSlideshowForSelectedPage();

    }else{

        $(".pagination .selected")
          .removeClass("selected")
          .parent().prev().find("a").addClass("selected");
        
        updateSlideshowForSelectedPage();
    }

  }
  
  function updateSlideshowForSelectedPage() {
    var index = $(".pagination .selected").parent().index(),
        classIndex = parseInt(index+1, 10);
    $("body").attr("class", "active" + classIndex);
    
    $("#spinners .selected").removeClass("selected");
    $("#spinners li:nth-child(" + classIndex + ")").addClass("selected");
  }


  // 开始自动滚动

  var isAutoPlay = true;

  autoPlay = function() {
    var self = arguments.callee;
    setTimeout(function() {
      if(isAutoPlay) {
      // 判断IE7 8不执行
        if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0" || trim_Version=="MSIE7.0" || trim_Version=="MSIE8.0") {return;}

        goToNext();
      }
      self();
    }, 10500);
  };

  autoPlay();

});
