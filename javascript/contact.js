(function(){
      var words = [
          'Hola!',
          'Hej!',
          'مرحبا',
          'Hello!',
          '你好!',
          ], i = 0;
      setInterval(function(){
          $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 3000);
        
  })();


// SCROLL FADE IN //
 AOS.init({
  duration: 1200,
})
// SCROLL FADE IN //


