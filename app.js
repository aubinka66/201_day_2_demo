
function myGuessingGame(){
var userName = prompt('WHAT, is your name?');
alert('CORRECT!, ' + userName + '. Next question...');
console.log('The user\'s name is ' + 'userName');

var answer1 = prompt('WHAT, is your favorite color?');
  if (answer1.length < 6 && answer1.length > 3) {
    alert('CORRECT!, last question...');
  }
  else {
    alert('INCORRECT! To the pits with you!!!');
  }

var answer2 = prompt('WHAT, is the airspeed velocity of an unladen swallow? A)13mps B)10mps C)15mps D)African or European swollow?');
  if (answer2 === "D" || "d") {
    alert('Huh? I don\'t know that... AHHHH!!!');
  }
  else {
    alert('To the pits with you!!!');
  }

    alert('You may pass the bridge of death if all were answered correctly.');

    alert('You enter the room of The Holy Grail!');

  var userNumber = prompt('Pick a cup, they are numbered 1-10');
  var computerNumber = Math.floor((Math.random() * 10) + 1);
    if (userNumber <= 5 && computerNumber <= 5) {
      alert('You drink the water and embrace the feeling of immortality! \
      The Holy Grail is yours!');
    }
    else if (userNumber > 5 && computerNumber > 5) {
      alert('You drink the water, shit your guts out and die...');

    }
    else {
      alert('You are a Pu*** and refuse to drink out of any cup... \
      Your journey was for nothing.');
    }

      alert('If you got the Holy Grail go ahead and click on it ;)');
}
  var grail_img = document.images["jsbutton"];
    function changeImage() {
      document.images["jsbutton"].src= "data:image/jpeg;base64,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";
      return true;
    }
    function changeImageBack() {
      document.images["jsbutton"].src = "data:image/jpeg;base64,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";
      return true;
    }
    function handleMDown() {
      document.images["jsbutton"].src = "data:image/jpeg;base64,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";
      return true;
    }
    function handleMUp() {
      changeImage();
      return true;
    }
