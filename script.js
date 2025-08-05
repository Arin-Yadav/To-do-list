const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(actionsDiv);

    taskList.appendChild(li);
    taskInput.value = '';

    taskInput.value = '';

    
    taskInput.classList.add('glow');        // 🔥 Add glow
    setTimeout(() => {
        taskInput.classList.remove('glow'); // 💨 Remove glow after animation
    }, 600); // Matches animation duration

}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});