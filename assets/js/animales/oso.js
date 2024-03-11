
import Animal from "./animal.js";

// Clase Oso hija de clase Animal
class Oso extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido);
	}

	Grunir() {
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    	audioPlayer.play();
	}
}

export { Oso };