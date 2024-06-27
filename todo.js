document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const completedList = document.getElementById('completed-list');
    const newTaskInput = document.getElementById('new-task');
  
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = newTaskInput.value.trim();
      if (taskText === '') {
        return;
      }
  
      const listItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const timestamp = document.createElement('span');
      timestamp.classList.add('timestamp');
      timestamp.textContent = `Added: ${new Date().toLocaleString()}`;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => {
        completeTask(listItem, taskText);
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
      });
  
      listItem.appendChild(taskSpan);
      listItem.appendChild(timestamp);
      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
  
      newTaskInput.value = '';
    });
  
    function completeTask(listItem, taskText) {
      todoList.removeChild(listItem);
  
      const completedItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const timestamp = document.createElement('span');
      timestamp.classList.add('timestamp');
      timestamp.textContent = `Completed: ${new Date().toLocaleString()}`;
  
      completedItem.appendChild(taskSpan);
      completedItem.appendChild(timestamp);
      completedList.appendChild(completedItem);
    }
  });
  