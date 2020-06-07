const todoList = [{
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
  hideCompleted: false,
};

const renderTodos = function (todoList, filters) {
  const filteredTodos = todoList.filter(function (todo) {

    // searchTextMatch is only true when the text input matches a todo which includes same text 
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());

    // Is the checkbox unchecked (false) or is the todo false
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;


    // Only when the searchedTextMatch above is true and one of the hideCompleted statments are true
    // this return equal true and therefore creates a new array of todos in the 
    // filtredTodos const variable. 
    // If this statement equals false the orginal todoList will be rendered

    return searchTextMatch && hideCompletedMatch;
  });


  // This filters all the todos which have a compelted of false.
  // It takes the filteredTodos variable from above and createds a new array in the todoLeft variable
  const todosLeft = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });


  // Before any todos are rendered this clears the HTML 
  document.querySelector("#todo-content").innerHTML = "";

  // This creates a h2 element 
  const todoSummary = document.createElement("h2");

  // This makes the text content of the created h2 element the length of 
  // the array which was created in todosLeft variable 
  todoSummary.textContent = `You have ${todosLeft.length} todos left to complete`;

  // This appeneds the todoSumary to the selected HTML element
  document.querySelector("#todo-content").appendChild(todoSummary);

  // Runs a forEach over the filteredTodos arrays
  filteredTodos.forEach(function (todo) {

    // For each todo it creates a p element in the newTodo variable 
    const newTodo = document.createElement("p");

    // It assigns this elements text to the todos text 
    newTodo.textContent = todo.text;

    // This appends it to the HTML element 
    document.querySelector("#todo-content").appendChild(newTodo);
  });
};

// Runs RenderTodos with the two arguements 
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

  // RendersTodos 
  renderTodos(todoList, filters);

  // Clears the input field 
  e.target.elements.addTodo.value = " ";
});

// Event Listeners for checkbox 
document.querySelector("#completed").addEventListener("change", function (e) {

  // Changes filters object of hideCompleted to depend on if the box is checked or not 
  filters.hideCompleted = e.target.checked;

  // RendersTodos
  renderTodos(todoList, filters);
});