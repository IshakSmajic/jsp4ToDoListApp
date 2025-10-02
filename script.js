
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


const counter = document.createElement("p");
counter.id = "counter";
document.body.appendChild(counter);


function updateCounter() {
  const items = taskList.querySelectorAll("li.task");
  const completed = taskList.querySelectorAll("li.task.completed").length;
  counter.textContent = `Completed: ${completed} / Total: ${items.length}`;
}


function makeTaskItem(text) {
  const li = document.createElement("li");
  li.className = "task";

  const completeBtn = document.createElement("button");
  completeBtn.className = "completeBtn";
  completeBtn.textContent = "✓";
  completeBtn.title = "Mark complete";
  completeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.classList.toggle("completed");
    updateCounter();
  });

  const span = document.createElement("span");
  span.className = "text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "x";
  deleteBtn.title = "Delete task";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();              
    updateCounter();
  });

  li.appendChild(completeBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}


function addTask() {
  const taskText = taskInput.value.trim(); 
  if (!taskText) return;

  taskInput.value = ""; 

  const li = makeTaskItem(taskText);
  taskList.appendChild(li);

  updateCounter();
}


addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});


updateCounter();
