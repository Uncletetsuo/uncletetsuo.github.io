const button = document.querySelector("#push");
const input = document.querySelector('#newtask input');
const tasks = document.querySelector('#tasks')
const error = document.getElementById("error");

function clackityClack() {
    if (input.value.length == 0) {
        error.innerHTML = 'Please enter text'// <= quitar el 
    }
    else {
        tasks.innerHTML += `
        <div class="task"> 
        <span id="taskname" > ${input.value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt" aria-hidden="true"></i>
        </button>
        </div> `;

        const currentTask = document.querySelectorAll(".delete");

        for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function() {
        this.parentNode.remove();
            } ;
    
        }
        error.innerHTML = '';
    }
    let task = document.querySelectorAll('.task');
    for (let i = 0; i < task.length; i++) {
        task[i].onclick = function(){
            this.classList.toggle('completed');
        };
        
    }
    
    document.querySelector("#newtask input").value = "";
    
}

input.addEventListener("keyup", function(event) {           //<= it's beatifull when shit works
    if(event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
});

// i need to add the following, 



//   y autofocus en lo que seria la barra principal...

//   tambien se necesita una base de datos para que se pueda guardar los datos de cada usuario, 