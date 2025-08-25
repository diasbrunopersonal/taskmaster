const taskInput = document.getElementById('input_task_name');
const taskList = document.querySelector('.taskList');

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(taskInput.value.trim());
    }
});

function addTask(taskName) {
    if (taskName !== '') {
        const taskElement = document.createElement('li');
        taskElement.classList.add("task");
        taskElement.textContent = taskName;
        taskElement.id = `Task_${taskList.childNodes.length}`;
        const deleteTaskBtn = document.createElement('input');
        deleteTaskBtn.type = "button";
        deleteTaskBtn.classList.add("btn_delete_task");
        deleteTaskBtn.value = "X";
        deleteTaskBtn.addEventListener("click", () => {
            taskElement.remove();
        });
        taskElement.append(deleteTaskBtn);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
}


document.getElementById('btn_task_create').addEventListener('click', () => {
    addTask(taskInput.value.trim())
});