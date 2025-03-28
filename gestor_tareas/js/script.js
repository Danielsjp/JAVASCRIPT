let taskIdCounter = 1;
let activeUser = "";  // Variable para almacenar el nombre del usuario

// Solicitar el nombre del usuario al cargar la página
window.onload = function() {
    // Mientras el usuario no ingrese un nombre, sigue pidiendo uno
    while (!activeUser) {
        activeUser = prompt("¿Cuál es tu nombre?");
        
        // Si el nombre no es válido, muestra una alerta y lo vuelve a pedir
        if (!activeUser) {
            alert("DEBES INTRODUCIR UN NOMBRE DE USUARIO");
        }
    }
    
    console.log("Usuario activo:", activeUser);  // Muestra el nombre del usuario en consola

    // Cargar tareas desde localStorage
    loadTasksFromStorage();
};

function saveTasksToStorage() {
    const tasks = [];
    document.querySelectorAll(".task").forEach(task => {
        tasks.push({
            id: task.id,
            text: task.querySelector(".task-text").textContent,
            priority: task.querySelector(".priority-select").value,
            status: task.parentElement.id,
            createdAt: task.getAttribute("data-created-at"),
            user: task.getAttribute("data-user")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskData => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.id = taskData.id;

        const idSpan = document.createElement("span");
        idSpan.className = "task-id";
        idSpan.textContent = `ID:${taskData.id.split("-")[1]}`;
        taskDiv.appendChild(idSpan);

        const textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.textContent = taskData.text;

        const spaceSpan = document.createElement("span");
        spaceSpan.textContent = " ";
        spaceSpan.style.width = "10px";
        spaceSpan.style.display = "inline-block";
        taskDiv.appendChild(spaceSpan);

        taskDiv.appendChild(textSpan);

        const prioritySelect = document.createElement("select");
        prioritySelect.className = "priority-select";
        const options = [
            { value: "urgente", text: "🔴 Urgente" },
            { value: "normal", text: "🟡 Normal" },
            { value: "poco-urgente", text: "🟢 Poco urgente" }
        ];
        options.forEach(optionData => {
            const option = document.createElement("option");
            option.value = optionData.value;
            option.textContent = optionData.text;
            if (optionData.value === taskData.priority) {
                option.selected = true;
            }
            prioritySelect.appendChild(option);
        });
        taskDiv.appendChild(prioritySelect);

        taskDiv.setAttribute("data-created-at", taskData.createdAt);
        taskDiv.setAttribute("data-user", taskData.user);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "task-buttons";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑️";
        deleteBtn.onclick = function() {
            deleteTask(taskDiv);
        };
        buttonsDiv.appendChild(deleteBtn);

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✅";
        doneBtn.onclick = function() {
            document.getElementById("realizada").appendChild(taskDiv);
            saveTasksToStorage();
        };
        buttonsDiv.appendChild(doneBtn);

        const inProgressBtn = document.createElement("button");
        inProgressBtn.textContent = "⏳";
        inProgressBtn.onclick = function() {
            document.getElementById("ejecucion").appendChild(taskDiv);
            saveTasksToStorage();
        };
        buttonsDiv.appendChild(inProgressBtn);

        const undoBtn = document.createElement("button");
        undoBtn.textContent = "🔄";
        undoBtn.onclick = function() {
            document.getElementById("pendiente").appendChild(taskDiv);
            saveTasksToStorage();
        };
        buttonsDiv.appendChild(undoBtn);

        taskDiv.appendChild(buttonsDiv);

        taskDiv.addEventListener("mouseenter", function() {
            const createdAt = taskDiv.getAttribute("data-created-at");
            const user = taskDiv.getAttribute("data-user");
            const infoDiv = document.getElementById("task-info");
            infoDiv.textContent = `Creado por: ${user} el ${createdAt}`;
        });

        taskDiv.addEventListener("mouseleave", function() {
            const infoDiv = document.getElementById("task-info");
            infoDiv.textContent = "Pasa el ratón por encima de la tarea para más info";
        });

        document.getElementById(taskData.status).appendChild(taskDiv);
    });
}

// Función para agregar tareas
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
    taskDiv.id = `task-${taskIdCounter}`;  // Asigna un ID único e incremental a la tarea

    // Crea un span para mostrar el ID de la tarea
    const idSpan = document.createElement("span");
    idSpan.className = "task-id"; // Le damos una clase para poder estilizarlo
    idSpan.textContent = `ID:${taskIdCounter}`; // Muestra el ID de la tarea
    taskDiv.appendChild(idSpan);

    // Crea un span para mostrar el texto de la tarea
    const textSpan = document.createElement("span");
    textSpan.className = "task-text"; // Le damos una clase para poder estilizarlo
    textSpan.textContent = taskText;

    // agregamos un espacio entre id y text span
    const spaceSpan = document.createElement("span"); 
    spaceSpan.textContent = " ";
    spaceSpan.style.width = "10px"; // Espacio de 10px
    spaceSpan.style.display = "inline-block"; // Para que se comporte como un bloque en línea
    taskDiv.appendChild(spaceSpan); // Agregamos el espacio al div de tarea

    taskDiv.appendChild(textSpan);

    // Crear un select para la prioridad
    const prioritySelect = document.createElement("select");
    prioritySelect.className = "priority-select";

    // Opciones del select
    const options = [
        { value: "urgente", text: "🔴 Urgente" },
        { value: "normal", text: "🟡 Normal" },
        { value: "poco-urgente", text: "🟢 Poco urgente" }
    ];

    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.text;
        prioritySelect.appendChild(option);
    });

    // Agregar el select al div de la tarea
    taskDiv.appendChild(prioritySelect);

    // Crea la fecha de creación
    const createdAt = new Date();
    const createdDate = createdAt.toLocaleString(); // Obtiene la fecha actual en formato legible

    // Establecemos la fecha de creación y el usuario en los atributos del div tarea
    taskDiv.setAttribute("data-created-at", createdDate);
    taskDiv.setAttribute("data-user", activeUser);

    // Crear un div para contener los botones y alinearlos a la derecha
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons"; // Clase para el contenedor de botones
    taskDiv.appendChild(buttonsDiv);

    // Botón para eliminar la tarea (con confirmación)
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = function() {
        // Llama a la función deleteTask cuando se hace clic en el botón de eliminar
        deleteTask(taskDiv);
    };
    buttonsDiv.appendChild(deleteBtn);

    // Botón para mover la tarea a "realizada"
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✅";
    doneBtn.onclick = function() {
        document.getElementById("realizada").appendChild(taskDiv);
        saveTasksToStorage();
    };
    buttonsDiv.appendChild(doneBtn);

    // Botón para mover la tarea a "en ejecución"
    const inProgressBtn = document.createElement("button");
    inProgressBtn.textContent = "⏳";
    inProgressBtn.onclick = function() {
        document.getElementById("ejecucion").appendChild(taskDiv);
        saveTasksToStorage();
    };
    buttonsDiv.appendChild(inProgressBtn);

    // Botón para devolver la tarea a pendiente
    const undoBtn = document.createElement("button");
    undoBtn.textContent = "🔄";
    undoBtn.onclick = function() {
        document.getElementById("pendiente").appendChild(taskDiv);
        saveTasksToStorage();
    };
    buttonsDiv.appendChild(undoBtn);

    // Muestra la fecha de creación y el nombre del usuario al pasar el ratón
    taskDiv.addEventListener("mouseenter", function() {
        const createdAt = taskDiv.getAttribute("data-created-at");
        const user = taskDiv.getAttribute("data-user");

        // Actualizamos el div de información al final de la página
        const infoDiv = document.getElementById("task-info");
        infoDiv.textContent = `Creado por: ${user} el ${createdAt}`;
    });

    taskDiv.addEventListener("mouseleave", function() {
        // Limpiamos la información al salir el ratón
        const infoDiv = document.getElementById("task-info");
        infoDiv.textContent = "Pasa el ratón por encima de la tarea para más info";
    });

    // Agrega la tarea al contenedor correspondiente
    document.getElementById(taskStatus).appendChild(taskDiv);

    // Incrementa el contador de ID para la siguiente tarea
    taskIdCounter++;

    // Limpia el campo de entrada
    document.getElementById("taskInput").value = "";

    // Guardar tareas en localStorage
    saveTasksToStorage();
}

// Función para mover la tarea a la zona de eliminadas
function deleteTask(taskDiv) {
    // Muestra una alerta de confirmación antes de eliminar la tarea
    const confirmation = confirm("¿Estás seguro de que quieres eliminar esta tarea definitivamente?");
    
    if (confirmation) {
        // Obtiene el contenedor de eliminadas
        const eliminatedContainer = document.getElementById("eliminadas");

        // Crear un informe de la tarea eliminada
        const reportDiv = document.createElement("div");
        reportDiv.textContent = `Tarea eliminada: ${taskDiv.querySelector(".task-text").textContent} (ID: ${taskDiv.querySelector(".task-id").textContent})`;

        // Mueve el informe a la zona de eliminadas
        eliminatedContainer.appendChild(reportDiv);

        // Elimina la tarea del DOM
        taskDiv.remove();  // Elimina la tarea definitivamente del DOM
        alert("Tarea eliminada de manera definitiva.");

        // Guardar tareas en localStorage
        saveTasksToStorage();
    }
}

function clearEliminadas() {
    const eliminadasContainer = document.getElementById("eliminadas");
    eliminadasContainer.innerHTML = "<h2>Eliminadas</h2>"; // Reset the content
    alert("Se han eliminado todas las tareas de la sección 'Eliminadas'.");
}

function moveTask(fromZone, toZone) {
    const fromContainer = document.getElementById(fromZone);
    const toContainer = document.getElementById(toZone);

    // Get the first task in the "from" zone
    const task = fromContainer.querySelector(".task");

    if (task) {
        // Move the task to the "to" zone
        toContainer.appendChild(task);
        saveTasksToStorage();
    } else {
        alert("No hay tareas para mover.");
    }
}














