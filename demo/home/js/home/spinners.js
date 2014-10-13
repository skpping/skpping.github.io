$(function() {
  
  $(".pagination a").click(function(e){
    e.preventDefault();
    // Remove the selected class from the currently selected indicator(取消事件的默认动作。)
    $(this).parent().parent().find(".selected").removeClass("selected");
    // Make the clicked indicator the selected one
    $(this).addClass("selected");
    
    updateSlideshowForSelectedPage();
  });
  
  $("#next").click(function(e) {
    goToNext();
  });
  
  $("#prev").click(function(e) {
    goToPrev();
  });

  // Keyboard shortcuts-快捷键
  $("body").keyup(function(e) {
    if (e.keyCode == 39) {
      // Key right
      goToNext();
    } else if (e.keyCode == 37) {
      // Key left
      goToPrev();
    }
  });

  function goToNext() {
    // Exit if there are no more spinners
    if ($(".pagination .selected").parent().index()+1 >= $(".pagination li").length)
      return;

    $(".pagination .selected")
      .removeClass("selected")
      .parent().next().find("a").addClass("selected");
    
    updateSlideshowForSelectedPage();
  }
  
  function goToPrev() {
    // Exit if the currently selected spinner is the first one
    if ($(".pagination .selected").parent().index() <= 0)
      return;

    $(".pagination .selected")
      .removeClass("selected")
      .parent().prev().find("a").addClass("selected");
    
    updateSlideshowForSelectedPage();
  }
  
  function updateSlideshowForSelectedPage() {
    var index = $(".pagination .selected").parent().index(),
        classIndex = parseInt(index+1, 10);
    $("body").attr("class", "active" + classIndex);
    
    $("#spinners .selected").removeClass("selected");
    $("#spinners li:nth-child(" + classIndex + ")").addClass("selected");
  }

  var SMask = $('.mask');

  function resize(){
    var WHeight = $(window).height(),
      WWidth = $(window).width();
    SMask.width(WWidth - 20);
    SMask.height(WHeight - 20);
  };

  resize();

  $(window).on('resize', resize);
	
});
