const data = [];

function todoTasks() {
  const nameInput = document.querySelector('.todo-items');
  const dateInput = document.querySelector('.todo-date');

  const name = nameInput.value.trim();
  const duedate = dateInput.value;

  if (!name || !duedate) {
    alert('Please enter both task name and due date.');
    return;
  }

  data.push({ name, duedate });

  nameInput.value = '';
  dateInput.value = '';

  tasksRender();
}

function tasksRender() {
  const divElement = document.querySelector('.todo-tasks-render');
  divElement.innerHTML = '';

  for (let index = 0; index < data.length; index++) {
    const element = data[index];

    divElement.innerHTML += `
      <div class="task-item">
        <div class="task-text">${element.name}</div>
        <div class="due-date">${element.duedate}</div>
        <div>
          <button class="button-delete" onclick="
            data.splice(${index}, 1);
            tasksRender();
          ">Delete</button>
        </div>
      </div>
    `;
  }
}

tasksRender();
