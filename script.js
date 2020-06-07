const todoList = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};


renderTodos(todoList, filters);


// Event Listener for the input field 
document.querySelector("#search-text").addEventListener("input", function (e) {
  // Changes the filters object to the value of the input field being targeted 
  filters.searchText = e.target.value;
  // RendersTodos 
  renderTodos(todoList, filters);
});

// Event Listener for the form input button field 
document.querySelector("#add-todo").addEventListener("submit", function (e) {
  // Prevents deafult action of the submit button
  e.preventDefault();

  // Pushes a new todo to the todoList using
  todoList.push({
    // The text of the new todo is the input fields value that user types in
    text: e.target.elements.addTodo.value,
    completed: false,
  });

  saveTodos(todoList)
  renderTodos(todoList, filters);

  // Clears the input field 
  e.target.elements.addTodo.value = " ";
});

// Event Listeners for checkbox 
document.querySelector("#completed").addEventListener("change", function (e) {
  // Changes filters object of hideCompleted to depend on if the box is checked or not 
  filters.hideCompleted = e.target.checked;
  // RendersTodos list
  renderTodos(todoList, filters);
});