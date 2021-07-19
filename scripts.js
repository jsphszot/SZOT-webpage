var prevHeight = 0;
var prevWidth = 0;
var currentHeight;
var currentWidth;


$(document).ready(function() {
    currentHeight = $(window).height();
    currentWidth = $(window).width();
    $("#menu-button").click(OpenCloseMenu);
    ApplyTopPadding();
});

// $(window).resize(function() {
//     prevHeight = currentHeight;
//     prevWidth = currentWidth;
//     currentHeight = $(window).height();
//     currentWidth = $(window).width();
// });


OpenCloseMenu = function(){

    if($("#menu-button").text() == "☰"){
      $("#menu-button").text("🞬");
      $(".menu-li").show();
      $(".nav-bar").height("100vh"); // overflow page
    } else {
      $("#menu-button").text("☰");
      $(".menu-li").hide();
      $(".nav-bar").height(""); // unoverflow page
    }

  };


ApplyTopPadding = function(){
  jmpsllrnav = document.getElementById("jumpseller-nav");
  jmpsllrnav_height = jmpsllrnav.offsetHeight;

  document.getElementById("mainbod").style.paddingTop = jmpsllrnav_height + "px";
  // console.log(jmpsllrnav_height);
}

// menu click functionality, using jquery
// $(document).ready(function(){
//   $("#menu-button").click(OpenCloseMenu);
// });

// $(function() {
$(window).resize(() => {

    ApplyTopPadding();
    prevHeight = currentHeight;
    prevWidth = currentWidth;
    currentHeight = $(window).height();
    currentWidth = $(window).width();
    // console.log(currentWidth > 800)
    
    if (currentWidth > 800){
        // console.log("A")
        $(".nav-bar").height(""); // unoverflow page
        $(".menu-li").show();
        $("#menu-button").text("🞬");
    } else if (currentWidth <= 800 ) { // && prevWidth > 800
        // console.log("B")

        $(".menu-li").hide();
        $(".nav-bar").height(""); // unoverflow page
        $("#menu-button").text("☰");

    }
})
// })

