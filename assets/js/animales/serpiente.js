
import Animal from "./animal.js";

// Clase Serpiente hija de clase Animal
class Serpiente extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido);
	}

	Sisear() {
		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    	audioPlayer.play();
	}
}

export { Serpiente };