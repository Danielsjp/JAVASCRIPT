let taskIdCounter = 1;

function addTask() {
    const taskText = document.getElementById("taskInput").value.trim();
    const taskStatus = document.getElementById("taskStatus").value;

    if (taskText === "") {
        alert("Por favor, introduce una tarea.");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.id = `task-${taskIdCounter}`;
    taskDiv.dataset.status = taskStatus;
    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    // Botón de eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = "❌";
    deleteButton.onclick = function () {
        const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta tarea de forma definitiva?");
        if (confirmDelete) {
            taskDiv.remove();
            const taskInfo = document.getElementById("task-info");
            taskInfo.textContent = `La tarea "${taskText}" ha sido eliminada permanentemente.`;
        }
    };
    taskButtons.appendChild(deleteButton);

    taskDiv.appendChild(textSpan);
    taskDiv.appendChild(taskButtons);

    // Añadir tarea a la zona correspondiente
    const zone = document.getElementById(taskStatus);
    zone.appendChild(taskDiv);

    taskIdCounter++;
    document.getElementById("taskInput").value = "";
}

function moveTask(fromZone, toZone) {
    const fromZoneElement = document.getElementById(fromZone);
    const toZoneElement = document.getElementById(toZone);

    const taskDiv = fromZoneElement.querySelector('.task');
    if (taskDiv) {
        taskDiv.dataset.status = toZone;
        toZoneElement.appendChild(taskDiv);
    }
}














