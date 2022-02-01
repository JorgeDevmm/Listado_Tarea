//importa todo
import { Todo} from "../classes";

//importar todolist de la constante instanciada
import { todoList } from "../index";

//Referencias en el html
const divTodoList = document.querySelector(".todo-list");

//que al crear un todo y lo liste
const txtInput   = document.querySelector(".new-todo");

//referencia al boton borrar completados
const btnBorrar = document.querySelector( ".clear-completed" );

// referenciar filtros
const ulFiltros = document.querySelector( ".filters" );

//referencia a los anchor filtros
const anchorFiltros = document.querySelectorAll( ".filtro" );






export const crearTodoHtml = ( todo ) => {

    //poner operadores ternario condicionales validos dentros de los interpolación de string
    const htmlTodo = `
    <li class="${ (todo.completado) ? "completed" : " " }" data-id="${ todo.id }">
						<div class="view">
							<input class="toggle" type="checkbox" ${ (todo.completado) ? "checked" : ""}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
	                    <input class="edit" value="Create a TodoMVC template">
	</li>`;

    //elemento que contendra el htmlTodo debe sera si por las propiedad del htmlTodo
    const div = document.createElement("div")

    //div contendra todo del htmlTodo
    div.innerHTML = htmlTodo;


    //insertamos el primer hijo del div
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}





//Eventos
//keyup cuando se suelta una tecla, se dispara la siguiente acción
txtInput.addEventListener("keyup",( event) =>{

    if( event.keyCode === 13 && txtInput.value.length >0 ){


        console.log(txtInput.value);
        console.log(event.keyCode);

        //crear constante que almacena el instanciación de el valor que se agrega a al txtInput.value
        const nuevoTodo = new Todo( txtInput.value);
        //invoca al instanciamiento del método nuevotodo del la clase todo-list, envia argumento
        todoList.nuevoTodo( nuevoTodo ); 

        //mostar en lista del html lo ingresado
        crearTodoHtml( nuevoTodo );

        //limpiar la caja de lo ingresado
        txtInput.value = "";

    }
} );

//EVENT
// dar click a un elemento
divTodoList.addEventListener( "click", (event) =>{

    //pointerEvent representa el estado de un evento en el DOM que guardamos en event
    console.log(event);

    //verificamos en el pointerevent a su método target ya que es lo ques esta apuntando la selección
    //La Element.localName propiedad de solo lectura devuelve la parte local del nombre calificado de un elemento.
   const nombreElemento = event.target.localName; //referencia sea el caso al dar click input, label , button
   //devuelve el padre del nodo DOM, referencia html li, esto aplique cuando crearmos un div
   const todoElemento   = event.target.parentElement.parentElement; 
   //obtener el valor de un atributo con el getAttribute de un elemento
   const todoId         = todoElemento.getAttribute("data-id");



   if( nombreElemento.includes( "input")){//click en el check

    //Aplica método marcarCompletado
    todoList.marcarCompletado( todoId );
    //lista la clases de la referencia html y marca en completed con toggle
    todoElemento.classList.toggle("completed");

   }else if( nombreElemento.includes("button")){// hay que borrar el todo

    todoList.eliminarTodo( todoId );//borra del arreglo
    divTodoList.removeChild( todoElemento )//eliminar elemento html
   }




} );

//cuando ejecuto el ckick disparo esta acción
btnBorrar.addEventListener("click",() =>{


        //Eliminar del arreglo que tengo en la clase
        todoList.eliminarCompletados();

        // for a ala inversa
        for(  let i = divTodoList.children.length-1; i>= 0 ; i--){

            //si el elemento actual que estoy barriendo esta completado o no y si esta completado borrarlo
            const elemento = divTodoList.children[i];

            //validar si esta marcado y contiene la clase completed
            if ( elemento.classList.contains("completed")){

                //remover los elementos de la clase hija que contienen el elemento
                divTodoList.removeChild(elemento);
            }
        } 
   });

ulFiltros.addEventListener( "click",(event) => {
    
    //apuntamos al nomnbre de los elementos a.filtro
    const filtro = event.target.text;

    if( !filtro) {return;}

    // mover el cuadro de selected
    //barrer cada uno de nuestros anchor y borrar la clase selected
    anchorFiltros.forEach( elemento  => elemento.classList.remove( "selected" ));
    //hace referencia anchor que uno hace el click
    event.target.classList.add( "selected");


    // Recorremos nuestro divTodolist
    for( const elemento of divTodoList.children){

        // console.log(elemento);
        // eliminar clase hidden de css
        elemento.classList.remove( "hidden" );

        // verificar si el elemento actual esta completado
        const completado = elemento.classList.contains( "completed" );

        //escoger opciones
        switch( filtro ){

            case "Pendientes":
                if( completado ){
                    //Agregar la clase hidden
                    elemento.classList.add( "hidden" );
                }
            break;
            case "Completados":
                if( !completado ){
                    elemento.classList.add( "hidden" );
                }
            break;     
        }
    } 


});
