for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var nombreDeBoton = this.innerHTML

    iluminacion(nombreDeBoton)

    switch (nombreDeBoton) {
      case 'w':
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio("./sounds/tom-4.mp3");
        tom4.play();
        break;
      case 'j':
        var snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;
      case 'k':
        var kickbass = new Audio("./sounds/kick-bass.mp3");
        kickbass.play();
        break;
      case 'l':
        var crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;
      default:
        break;

    }

  });
}
document.addEventListener("keydown", function(event) {
  var nombreDeTecla = event.keyCode;

  iluminacion(event.key)

  switch (nombreDeTecla) {
    case 87:
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case 65:
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case 83:
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case 68:
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case 74:
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case 75:
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case 76:
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      break;
  }
})

function iluminacion(key) {
  var llave = document.querySelector("." + key);
    llave.classList.add("pressed");

  setTimeout(function() {
    llave.classList.remove("pressed");
  }, 100);
}
