//aqui va el codigo javascript
const tasks = []; // aqui voy a almacenar cada una de las tareas
let time = 0; // este lleva la cuenta regresiva
let timer = null; // va a tener asignado una funcion que se llama setInterval(pedazo de codigo cada determinado tiempo)
let timerBreak = null; // para los 5 minutos de descanso
let current = null; //me va a decir cual es la tarea actual que se esta ejecutando

const bAdd = document.querySelector("#bAdd"); // lo que esta entre parentesis es el boton
const itTask = document.querySelector("#itTask"); // estas serian las referencias a mis elementos html
const form = document.querySelector("#form");// estas serian las referencias a mis elementos html
const taskName = document.querySelector("#time #taskName");// estas serian las referencias a mis elementos html

renderTime();
renderTasks();

form.addEventListener("submit", (e) => { // eventos
  // evento, se ejecuta una funcion cuando se dispare el "submit"
  e.preventDefault(); // con esto realmente no se envia el formulario, anulamos el funcionamiento nativo
  if (itTask.value !== "") {
    //si el valor de itTask es diferente de un string vacio vamos a crear nuestra tarea
    createTask(itTask.value); // Esta es una funcion que todavia no se ha creado
    itTask.value = ""; // una vez que yo creo la tarea voy a eliminar el texto de mi input
    renderTasks(); // una vez que ingresamos al arreglo un nuevo elemento tengo que renderizar mis tareas
  }
});

function createTask(value) {
  // vamos a crear la function createTask y aqui vamos a pedir un value

  const newTask = {
    //definimos un nuevo objeto, nuestro arreglo de tasks va a contener objetos
    id: (Math.random() * 100).toString(36).slice(3), // voy a colocarle 3 propiedades, para crear un id dinamico usamos Math.random que
    title: value, // va a crear un valor entre 0 y 1, 36 es la base a la que la quiero transformar
    completed: false, // el 3 va a quitar los 3 caracteres iniciales // estado
  };
  tasks.unshift(newTask); // por ultimo vamos a agregarlo a mi array
}

function renderTasks() {
  // esta funcion me va a permitir: 1. tomar cada uno de los elementos de las tareas y
  const html = tasks.map((task) => {
    //generar un html que al final voy a inyectar en un contenedor
    // como voy a hacer esto const html va a ser igual a mi arreglo tasks.map
    //el metodo map me permite iterar sobre cada elemento y a cada elemento
    // le hago una operacion especial, al final voy a regresar un arreglo nuevo
    // con cada una de las operaciones a cada elemento. la idea es transformar
    // cada uno de los objetos newTask en un elemento html
    // creo una funcion anonima y al ser map necesito regresar un nuevo valor para ese arreglo
    return `
        <div class="task">
        <div class="completed">${
          task.completed
            ? `<span class="done">Done</span>`
            : `<button class="start-button" data-id="${task.id}">Start</button>`
        }</div>
        <div class="title">${task.title}</div> 
        </div>           
        `; // esta es una capa que se llama task y adentro tiene 2 capas hijas, la ultima es la de titulo osea titulo de mi tarea
    // la primera capa se llama completed aqui voy a mostrar un boton o un texto que indique si mi tarea ya esta completada
    // sino esta completada voy a mostrar el boton
    // esta es la estrtuctura base de cada una de mis tareitas
  }); 
  
  const tasksContainer = document.querySelector("#tasks"); // referencia al html
  tasksContainer.innerHTML = html.join(""); 
  
  
  const startButtons = document.querySelectorAll(".task .start-button"); // referencia al html elegir un arreglo y me va a devolver todas las coincidencias

  startButtons.forEach((button) => {
    button.addEventListener("click", (e) => { // llamo un function startButtonHandler
      if (!timer) {
        const id = button.getAttribute("data-id"); // relaciona el id
        startButtonHandler(id);
        button.textContent = "In progress ...";
      }
    });
  });
}
function startButtonHandler(id) {
  // aca tenemos que calcular los 25 minutos de la actividad ppal
  time = 25 * 60;
  current = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);// encontrar la tarea y que almacene el index
 
  taskName.textContent = tasks[taskIndex].title; // llamo la tarea con el nombre 
  renderTime();
  timer = setInterval(() => { // me permite ejecutar una funcion de forma indefinida hasta que yo la detenga
    timeHandler(id);
  }, 1000);// cada cuanto se va a ejecutar setinterval
}
function timeHandler(id) { // cada vez que se ejecute se reduzca en 1 segundo 
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timer); // con esto vamos a detener a setInterval
    markCompleted(id);
    timer = null;
    renderTasks();
    startBreak();
  }
}

function startBreak(){
  time = 5 * 60;
  taskName.textContent = 'Break';
  renderTime();
  timerBreak = setInterval(()=>{
    timerBreakHandler();
  }, 1000);
}

function timerBreakHandler(){
  time--;
  renderTime();

  if (time === 0) {
    clearInterval(timerBreak); // con esto vamos a detener a setInterval
    current = null;
    timerBreak = null;
    taskName.textContent = '';
    renderTasks();
    }
}


function renderTime() { // funcion que me permite darle formato a un numero 
  const timeDiv = document.querySelector("#time #value"); // capa donde vamos a colocar el texto
  const minutes = parseInt(time / 60); // transforma a un entero 
  const seconds = parseInt(time % 60);

  timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${ // aca se le da el formato
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function markCompleted(id) { // vamos a buscar la actividad actual 
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex].completed = true;
}
