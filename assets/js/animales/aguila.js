
import Animal from "./animal.js";

const audioPlayer = document.getElementById("player");

// Clase Aguila hija de clase Animal
class Aguila extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido);
	}

	Chillar() {
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    	audioPlayer.play();
	}
}

export { Aguila };