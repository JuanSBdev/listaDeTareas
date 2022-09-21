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
  
	*/

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
	const li2= document.createElement('li');
			const p2 = document.createElement('p');
			p2.textContent = localStorage.getItem("tareas");
			li2.appendChild(p2);
			li2.appendChild(addDeleteBtn())
			ul.appendChild(li2);
			ul.appendChild(localStorage.getItem("tare"));
			input.value = "";
			empty.style.display = "none";

