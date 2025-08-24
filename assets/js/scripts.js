const taskInput = document.getElementById('input_task_name');
const taskList = document.querySelector('.tasklist');

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(taskInput.value.trim());
    }
});

function addTask(taskName) {
    if (taskName !== '') {
        const li = document.createElement('li');
        li.textContent = taskName;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


document.getElementById('btn_task_create').addEventListener('click', () => {
    addTask(taskInput.value.trim())
});