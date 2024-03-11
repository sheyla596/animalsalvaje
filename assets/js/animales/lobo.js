
import Animal from "./animal.js";

// Clase Lobo hija de clase Animal
class Lobo extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido);
	}

	Aullar() {
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    	audioPlayer.play();
	}
}

export { Lobo };