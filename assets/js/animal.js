// Super Clase o clase padre Animal
 class Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        let _nombre = nombre;
        this.getNombre = () => _nombre;

        let _edad = edad;
        this.getEdad = () => _edad;

        let _img = img;
        this.getImg = () => _img;

        let _comentarios = comentarios;
        this.getComentarios = () => _comentarios;

        let _sonido = sonido;
        this.getSonido = () => _sonido;
        
    }

    //metodos getter y setter
    get nombre(){
        return this.getNombre();
    }

    get edad(){
        return this.getEdad();
    }

    get img(){
        return this.getImg();
    }
    
    get comentarios(){
        return this.getComentarios();
    }

    get sonido(){
        return this.getSonido();
    }

    get Comentarios() {
        return this.getComentarios();
      }
}

export default Animal;