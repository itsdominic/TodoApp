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
  {
    text: "Food Shopping",
    completed: true,
  },
];

const filters = {
  searchText: "",
};

const renderTodos = function (todoList, filters) {
  const filteredTodos = todoList.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const todosLeft = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todo-content").innerHTML = "";

  const todoSummary = document.createElement("h2");
  todoSummary.textContent = `You have ${todosLeft.length} todos left to complete`;
  document.querySelector("#todo-content").appendChild(todoSummary);

  filteredTodos.forEach(function (todo) {
    const newTodo = document.createElement("p");
    newTodo.textContent = todo.text;
    document.querySelector("#todo-content").appendChild(newTodo);
  });
};

renderTodos(todoList, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todoList, filters);
});

document.querySelector("#add-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  todoList.push({
    text: e.target.elements.addTodo.value,
    completed: false,
  });
  renderTodos(todoList, filters);
  e.target.elements.addTodo.value = " ";
});
