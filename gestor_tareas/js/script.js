function addTask() {
  // Obtiene el texto de la tarea y elimina espacios en blanco
  const taskText = document.getElementById("taskInput").value.trim();
  const taskStatus = document.getElementById("taskStatus").value;
  
  // Si no se introduce texto, muestra una alerta y sale de la función
  if (taskText === "") {
      alert("Por favor, introduce una tarea.");
      return;
  }

  // Crea el div contenedor de la tarea
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  // Crea un span para mostrar el texto de la tarea
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  taskDiv.appendChild(textSpan);

  // Botón para marcar la tarea como realizada
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.onclick = function() {
      document.getElementById("realizada").appendChild(taskDiv);
  };
  taskDiv.appendChild(doneBtn);

  // Botón para mover la tarea a "en ejecución"
  const inProgressBtn = document.createElement("button");
  inProgressBtn.textContent = "⏳";
  inProgressBtn.onclick = function() {
      document.getElementById("ejecucion").appendChild(taskDiv);
  };
  taskDiv.appendChild(inProgressBtn);

  // Botón para devolver la tarea a pendiente
  const undoBtn = document.createElement("button");
  undoBtn.textContent = "🔄";
  undoBtn.onclick = function() {
      document.getElementById("pendiente").appendChild(taskDiv);
  };
  taskDiv.appendChild(undoBtn);

  // Botón para borrar la tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = function() {
      taskDiv.remove();
  };
  taskDiv.appendChild(deleteBtn);

  // Agrega la tarea al contenedor correspondiente
  document.getElementById(taskStatus).appendChild(taskDiv);

  // Limpia el campo de entrada
  document.getElementById("taskInput").value = "";
}

