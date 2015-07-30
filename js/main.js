$(document).ready(function(){
  "use strict";

  $("a").hover(function(){
    $(this).find(".icon-to-change").toggleClass("a_on_hover");
  });

  var wheight = $(window).height(); // getting the hight of the window

  $('.fullheight').css('height', wheight/2);

  $("#accordion").accordion({
    heightStyle: "content"
  });

  $("img.disaturate").hover(function(){
    $(this).toggleClass("disaturate");
  });

});
