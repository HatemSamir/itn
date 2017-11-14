equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.equal-height .column-height');
});


$(window).resize(function(){
  equalheight('.equal-height .column-height');
});


$(window).load(function(){
  $('.test').css('height', $('#articles .owl-carousel').height());
});


// fixed menu scroll
$(window).on("load resize scroll",function(e){    
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {
        $("header").addClass("fixedHeader");
    } else {
        $("header").removeClass("fixedHeader");
    }
});