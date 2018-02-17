    var PlayerHasBall = true;


    //listen to shake event
    var shakeEvent = new Shake({threshold: 10, timeout: 1});
    shakeEvent.start();
            
    function shakeItBaby()  {
      
      if(PlayerHasBall){
      navigator.vibrate(800);
      document.body.style.backgroundColor = "lime";
      wait();
      elem.style.background = "green";
      baitSet = false;
      lineCast = true;
      }
    }
    
    window.addEventListener('shake', () => shakeItBaby(), false)


    //check if shake is supported or not.
    if(!("ondevicemotion" in window)){alert("Not Supported");}
