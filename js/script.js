//when ever a key is pressed call that function
document.onkeydown = checkKeycode

//Create a function
function checkKeycode(e) {
  //create function keycode
var keycode;
  // checks if you are using the window
  if (window.event)
   {
    //Gets the keycodes which are pre defined
    keycode = window.event.keyCode;
   }
   // For loop for each keycode 0 being 48 untill 57 being 9
   for(var i = 48; i <= 57; i++)
   {
    //If the keycode is i
    if (keycode == i) {
      //Create a new audio element for each key press to allow multiple sounds
      var player = new Audio();
      player.src = 'music/'+i+'.mp3';
      player.volume = 0.3;
      player.play();
      
      //Change the background color
      document.getElementById("key"+i).style.backgroundColor = "red";
      
      //Reset color after sound finishes or after 100ms
      setTimeout(function() {
        document.getElementById("key"+i).style.backgroundColor = "transparent";
      }, 100);
    }
   }
}

