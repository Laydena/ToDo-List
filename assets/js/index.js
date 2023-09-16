const ulList = document.getElementById('output-list');
const task = document.getElementById('add-input');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', function makeList() {
    const taskValue = task.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskValue;
    ulList.append(newTask);
    task.value = '';

    newTask.addEventListener('click', function checkTask() {
        newTask.classList.toggle('cross');
    });

});
