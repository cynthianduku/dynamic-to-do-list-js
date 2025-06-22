function addTask(taskText, save = true) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn'); // ✅ updated

  removeBtn.onclick = () => {
    taskList.removeChild(li);
    removeFromLocalStorage(taskText);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  if (save) {
    saveToLocalStorage(taskText);
  }

  taskInput.value = ''; // ✅ clear input
}
