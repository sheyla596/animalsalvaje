
import Animal from "./animal.js";

const audioPlayer = document.getElementById("player");

// Clase Leon hija de clase Animal
class Leon extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido);
	}

	Rugir() {
		console.log(this.getSonido());
    	audioPlayer.src = `assets/sounds/${this.getSonido()}`;
    	audioPlayer.play();
	}
}

export { Leon };