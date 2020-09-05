$(document).ready(function(){

$(".enter").click(function(){
     $(".enter,.enter-box,.intro").fadeOut(700);
     $("h3,.content,.content-box").delay(500).fadeIn(800);

});

  
  
$("#a1").click(function(){
    $(".a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
    $(".a2-img,.a3-img,.a4-img,.a5-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
    $(".aboutme-box").fadeOut(800);
  
    $(".a1-hidden").delay(450).fadeIn(500);
    $(".a1-img").delay(450).fadeIn(500);
 
});

  
 
$("#a2").click(function(){ 
  $(".a1-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a3-img,.a4-img,.a5-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);
  
  $(".a2-hidden").delay(450).fadeIn(500);
  $(".a2-img").delay(450).fadeIn(500);
      
});

  

$("#a3").click(function(){
  $(".a1-hidden,.a2-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a4-img,.a5-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);
  
  $(".a3-hidden").delay(450).fadeIn(500);
  $(".a3-img").delay(450).fadeIn(500);
      
  });
     

  
$("#a4").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a3-img,.a5-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);
  
  $(".a4-hidden").delay(450).fadeIn(500);
  $(".a4-img").delay(450).fadeIn(500);
       
  });

  
  
$("#a5").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,,a4-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);
  
  $(".a5-hidden").delay(450).fadeIn(500);
  $(".a5-img").delay(450).fadeIn(500);
  
  });

  
  
  
$("#a6").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a7-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a5-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);

  $(".a6-hidden").delay(450).fadeIn(500);
  $(".a6-img").delay(450).fadeIn(500);

  });

  
  
$("#a7").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a8-hidden,.a9-hidden").delay(1000).fadeOut(2500); 
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a5-img,.a6-img,.a8-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);

  $(".a7-hidden").delay(450).fadeIn(500);
  $(".a7-img").delay(450).fadeIn(500);
          
  });


  
$("#a8").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a9-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a5-img,.a6-img,.a7-img,.a9-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);

  $(".a8-hidden").delay(450).fadeIn(500);
  $(".a8-img").delay(450).fadeIn(500);


  });


$("#a9").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden").delay(1000).fadeOut(2500);
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a5-img,.a6-img,.a7-img,.a8-img").fadeOut(300);
  $(".aboutme-box").fadeOut(800);
  
  $(".a9-hidden").delay(450).fadeIn(500);   
  $(".a9-img").delay(450).fadeIn(500);

  });



$(".a1").click(function(){
  $(".content-box").fadeOut(400);
  $("h1").fadeOut(400);
  $("h3").fadeOut(300);
  $("h2").fadeOut(400);
  $(".designed-by-box").fadeOut(400);
  

  $('html,body').delay(690).animate({scrollTop: 
  $("body").offset().top},0);
});



$("#back-a1,#back-a2,#back-a3,#back-a4,#back-a5,#back-a6,#back-a7,#back-a8,#back-a9,").click(function(){
  $(".a1-hidden,.a2-hidden,.a3-hidden,.a4-hidden,.a5-hidden,.a6-hidden,.a7-hidden,.a8-hidden,.a9-hidden,.aboutme-box").fadeOut(300);
  $(".a1-img,.a2-img,.a3-img,.a4-img,.a5-img,.a6-img,.a7-img,.a8-img,.a9-img").fadeOut(300);
    $(".content-box,h1,h2,h3,.designed-by-box").delay(500).fadeIn(300);


  $('html,body').delay(1000).animate({scrollTop: 
  $("body").offset().top},0);


});








$(".back").click(function(){
        $(".back").fadeOut(1000)});



$(".content-box").click(function(){
        $(".back").fadeIn(2000);});



$("h3").click(function(){
    $(".content-box").fadeOut(300);
    $("h1").fadeOut(300);
    $("h2").fadeOut(300);
    $("h3").fadeOut(300);
    $(".designed-by-box").fadeOut(300);
  
    $(".aboutme-box").delay(200).fadeIn(0);
    $(".aboutme-background").delay(200).fadeIn(500);
    $(".aboutme-text").delay(310).fadeIn(500);
    $("#back-about").delay(300).fadeIn(1000);


});});

$("#back-about").click(function(){
  $(".aboutme-box").fadeOut(300);
  $("#back-about").fadeOut(300);

  $(".content-box").delay(300).fadeIn(300);
  $("h1").delay(300).fadeIn(300);
  $("h2").delay(300).fadeIn(300);
  $("h3").delay(300).fadeIn(300);
  $(".designed-by-box").delay(300).fadeIn(300);
});
