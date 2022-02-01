import './styles.css';

//al importar lo exportado lo pasamos por parametro las clases
import { Todo, TodoList } from "./classes";

//importar de componentes
import { crearTodoHtml } from "./js/componentes.js";




//instanciar clase de todolist
export const todoList = new TodoList();

//Validar la lista de mis todos
// console.log(todoList.todos);

//reconstruir mi html de mis todosLlist con mi propiedad todos
todoList.todos.forEach((todo) => crearTodoHtml( todo ));

//tip - si el argumento que queremos enviar es el unico que enviamos a otra función o método podemos obviar ponerlos
//todoList.todos.forEach(crearTodoHtml);

/*  el primer argumento del callback que estamos teniendo en el foreach esta llamando al crearTodoHtml y el argumento que se le esta mandando en el crearTodoHtml es el primer argumento que regresa del foreach solo funciona si es solo un argumento*/


//***********crear nueva instancia
// const newTodo = new Todo("Aprender Javascript");
// todoList.nuevoTodo( newTodo );
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log("todos", todoList.todos);




//instanciar clase todo
//const tarea = new Todo("Aprender Javascript");

//de la instancia, llama al método nuevotodos que agrega un todo al final del arreglo todos de todolist
//todoList.nuevoTodo( tarea );

//tarea.completado = true;
//console.log( todoList );

//llamar a la clase de componentes
//crearTodoHtml( tarea );


/* ======================================== */

//Session Storage borrara todo cuando cierro, actualiza el navegador, y cuando vuelvo abri no existira nada
//local storage la informaición almacenada no posee tiempo de expiración

//solo podemos tener un localstorage o session storage por dominio

//localStorage.setItem("mi-key","ABC123");
//sessionStorage.setItem("mi-key","ABC123");


//función que elimina el key del localStorage en 1.5 milisegundos (segunod y medio)
/*  setTimeout( () => {

    localStorage.removeItem("mi-key");

}, 1500); */

//En el localStorage no se guardan los métodos pero si las propiedad con JSON.stringify