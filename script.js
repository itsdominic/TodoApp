const todoList = [
  {
    text: "Walk Dog",
    completed: true,
  },
  {
    text: "Wash Car",
    completed: false,
  },
  {
    text: "File Expenses",
    completed: false,
  },
  {
    text: "Wash Hair",
    completed: false,
  },
  {
    text: "Clean Room",
    completed: true,
  },
];

const todosLeft = todoList.filter(function (todo) {
  return !todo.completed;
});

const todoSummary = document.createElement("h2");
todoSummary.textContent = `You have ${todosLeft.length} todos left to complete`;
document.querySelector("body").appendChild(todoSummary);

todoList.forEach(function (todo) {
  const todoitem = document.createElement("p");
  todoitem.textContent = todo.text;
  document.querySelector("body").appendChild(todoitem);
});

document.querySelector("#add-todo").addEventListener("click", function () {
  console.log("A new todo has been added");
});
