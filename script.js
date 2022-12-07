   /* console.log( "ready!" );
    var lista = document.getElementById("lista");
	var	tareaInput = document.getElementById("input-uno");
	var	btnNuevaTarea = document.getElementById("boton-add");
   const agregarTarea = function (){
    console.log('asd')
        var tarea = tareaInput.value,
        	li = document.createElement('li'),
			a = document.createElement('a'),
        	enlace = document.createTextNode(tarea);
			a.appendChild(enlace),
			li.appendChild(a)
		if (tarea == "") {
			alert("You must write something!");

		  } else {
			document.getElementById("lista").appendChild(li);
			tareaInput.value = "";
		}        
	
    };
  
	
	const input = document.querySelector('input');
	const addBtn = document.querySelector('.btn-add');
	const ul = document.querySelector('ul');
	const empty = document.querySelector('.empty');
	addBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const text = input.value;
		
		if( text != ""){
			
			const li = document.createElement('li');
			const p = document.createElement('p');
			p.textContent = text;
			localStorage.setItem('tareas', text);
			
			li.appendChild(p);
			li.appendChild(addDeleteBtn())
			
			ul.appendChild(li);
			localStorage.setItem('tare', li);
			
			input.value = "";
			empty.style.display = "none";
			console.log();
		}
		else{
			
			console.log(localStorage.getItem('tareas'));
			
			
		}
		
		
		
	});
	
	function addDeleteBtn(){
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'X';
		deleteBtn.className = "btn-delete"
		
		deleteBtn.addEventListener('click', (e)=>{
			const item = e.target.parentElement;
			ul.removeChild(item);
			
			const items = document.querySelectorAll('li');
			if(items.length == 0){
				empty.style.display = "block";
			}
			
		});
		return deleteBtn;
	}
	*/
	const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-tasks ul');
const message = document.querySelector('.list-tasks');
let tasks = [];

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', () => {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        createHTML();
    });

    listTasks.addEventListener('click', deleteTask);
}

function deleteTask(e){
    if (e.target.tagName == 'SPAN') {
        const deleteId = parseInt(e.target.getAttribute('task-id'));
        tasks = tasks.filter(task => task.id !== deleteId);
        createHTML();
    }
}

function deleteAll(){
    tasks = [];
    createHTML();
}

function addTasks(){
    const task = input.value;
    if (task === '') {
        showError('The field is empty...');
        return;
    }

    const taskObj = {
        task,
        id: Date.now()
    }
    tasks = [...tasks, taskObj]

    createHTML();
    input.value = '';
}

function createHTML(){
    clearHTML();

    if (tasks.length > 0) {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.task} <span task-id="${task.id}" >X</span>`;

            listTasks.appendChild(li);
        });
    }

    sincronizationStorage();
}

function sincronizationStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error');

    message.appendChild(messageError);
    setTimeout(() => {
        messageError.remove();
    },1000);

}

function clearHTML(){
    listTasks.innerHTML = '';
}