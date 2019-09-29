$(document).ready(function(){
  var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if(isMobile){
    document.body.style.setProperty('--mainContentTopMargin', 6.5);
    document.body.style.setProperty('--mainContentLeftMargin', 3);
  }else{
    document.body.style.setProperty('--mainContentTopMargin', 6.5);
    document.body.style.setProperty('--mainContentLeftMargin', 27);
  }
});
