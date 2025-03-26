function addTask() {
    // Obtén el texto y el estado seleccionados
    const taskText = document.getElementById("taskInput").value.trim();
    const taskStatus = document.getElementById("taskStatus").value;
    
    // Si no hay texto, no hacemos nada
    if (!taskText) return;
  
    // Crea el contenedor de la tarea
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
  
    // Crea el span para mostrar el texto de la tarea
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    taskDiv.appendChild(textSpan);
  
    // Crea el select para cambiar el estado de la tarea
    const selectEl = document.createElement("select");
    
    // Añadimos las opciones de estado al select
    const optionPend = new Option("Pendiente", "pendiente");
    const optionEjec = new Option("En ejecución", "ejecucion");
    const optionReal = new Option("Realizada", "realizada");
    
    selectEl.add(optionPend);
    selectEl.add(optionEjec);
    selectEl.add(optionReal);
    
    // Ajusta el valor inicial al que eligió el usuario
    selectEl.value = taskStatus;
    
    // Cuando cambie el estado, movemos la tarea al contenedor adecuado
    selectEl.onchange = function() {
      document.getElementById(selectEl.value).appendChild(taskDiv);
    };
    
    taskDiv.appendChild(selectEl);
  
    // Botón para borrar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = function() {
      taskDiv.remove();
    };
    taskDiv.appendChild(deleteBtn);
  
    // Agregamos la tarea al contenedor que corresponda
    document.getElementById(taskStatus).appendChild(taskDiv);
  
    // Limpiamos el campo de texto
    document.getElementById("taskInput").value = "";
  }
  

