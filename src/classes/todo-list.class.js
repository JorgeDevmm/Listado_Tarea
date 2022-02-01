import { Todo } from "./todo.class";



//lista donde almacenaremos la lista de todo

export class TodoList {

    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();
    }

    //método que agregara un todo al final del arreglo
    nuevoTodo( todo ){

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ){

        //filter aplicando callback
        //regresa un nuevo arreglo excluyendo el todo.id que no concide con id que fue pasado por parametro
        this.todos = this.todos.filter( todo => todo.id != id) 

        //cuando hicieramos una modificación deberiamos guardarlo aca
        this.guardarLocalStorage();


    }

    //si esta completao se marcara, si no no se marcara del arreglo de todo
    marcarCompletado( id ){

        //ciclo para barrer el arreglo todo
        //si el id de ese todo es igual al paremetro ingresado
        for ( const todo of this.todos){

            //validar como recibe y como tenemos en la clae el id
            //console.log(id, todo.id);

            //validar si el todo.id del arreglo de lo buscado es igual a lo ingresado por parametro (data-id="${ todo.id } componentes.js) ese es el que debemos cambiar
            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }
        

    }

    eliminarCompletados(){

        //generar un nuevo arreglo con los id que no estan completados
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        //lo que guardemos en el localstorage debe de ser string
        //crear llave llamada todo, y en esa clave alamacenaremos los valores del arreglos todos
        localStorage.setItem("todo", JSON.stringify(this.todos) );//Convertir arreglo de todo en JSON

    }

    cargarLocalStorage(){

/*         //tomar los todos de JSON  a agregarlos al arreglo de todo para que se visualize
        //al tarbajar con localstorage hayq ue verificar si existe la llave
        if(localStorage.getItem("todo")){

            //devuelve el valor de la clave cuyo nombre se lo pasa por parametro
            //convertir un JSOON string a su objeto original 
            this.todos = JSON.parse(localStorage.getItem("todo"));

            console.log("cargarLocal:", this.todos);
            console.log(typeof this.todos);//verificando el tipo de todos cargarlcoalstorage

        }else{

            this.todos = [];
        }
 */
        //operador ternario
        this.todos = (localStorage.getItem("todo"))
                        ? JSON.parse(localStorage.getItem("todo")) 
                        : [];
         //map() barrer cada uno de los elementos que estan dentro de un arreglo, y retornar con cada uno de sus obejtos mutado      
         //cuando se hace referencia a una propiedad estatica se debe pone en mayuscula la clase y ya llamar a la propiedad static        
        //  this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
         
        //  tip cuando recibo un arguemnto y ese argumento lo quiero mandar por un callback y ese arguemento es el primero que regresa si es aplico un foreach,  se omite
        this.todos = this.todos.map( Todo.fromJson );

    }

}

//anotación de localstorage
//guardamos en localstorage el array nos mostrara como '[object Object]'
//'[object Object]' es la representación de un objeto en su forma de string