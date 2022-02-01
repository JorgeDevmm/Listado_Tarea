

//crear clase
export class Todo {

    //crear una nueva instancia en base a valores que vienen del localstorage que viene de un objeto, o que vienen de un objeto que parece un todo pero no es un todo
    //desestructuración de argumentos de "obj"
    static fromJson( { id, tarea, completado, creado} ){

        //para usar el constructor de todo tenemos que mandar la tarea como parametro pero el objeto todo teine esa propiedad lo mandamos
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        //regresar la instancia
        return tempTodo;
    }

    //constructor   
    constructor(tarea){

        this.tarea      = tarea;
        
        this.id         = new Date().getTime(); //objeto con la fecha y hroa actual, gettime momento actual 1223423424

        this.completado = false; //valida si esta terminada o no

        this.creado     = new Date(); 
    }

    imprimirClase(){

        console.log(`${ this.tarea} - ${ this.id}`);
    }
}