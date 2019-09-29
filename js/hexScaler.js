$(document).ready(function(){

  resizeHexagons = function () {
      var scaleXVal = 0.0001
      scaleXVal = ($(window).width()/$(window).height())
      scaleXVal = scaleXVal * (1110/1950)
      document.body.style.setProperty('--scaleValue', scaleXVal)
      document.body.style.setProperty('--widthScale', $(window).width()/1950)
      document.body.style.setProperty('--heightScale', $(window).height()/1110)
      document.body.style.setProperty('--offsetValue', -121.3 + ((242.5 * ($(window).width()/1950))/2))
      document.body.style.setProperty('--yOffsetValue', (210 * $(window).height()/1110) - 80)
  };

  // jQuery methods go here...
  resizeHexagons()

});

$(window).resize(function(){
  resizeHexagons()
});
