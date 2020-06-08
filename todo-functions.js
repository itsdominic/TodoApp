// Get any saved todos from Local Storage
const getSavedTodos = function () {
  // Creat variiable which stores the "todoList" Key
  const todoListJSON = localStorage.getItem("todoList");

  // If the todoList object is not null we parse the DATA and return it
  // If it is null we return a empty array
  if (todoListJSON !== null) {
    return JSON.parse(todoListJSON);
  } else {
    return [];
  }
};

// This saves the Todos we create. Takes in todoList argument
const saveTodos = function (todoList) {
  // Sets local items to the key todoList and makes the todolist a string
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const renderTodos = function (todoList, filters) {
  const filteredTodos = todoList.filter(function (todo) {
    // searchTextMatch is only true when the text input matches a todo which includes same text
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
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

  // Runs the generateSummary function with the todoLeft filter as argument.
  document
    .querySelector("#todo-content")
    .appendChild(generateSummary(todosLeft));

  // Runs a forEach over the filteredTodos arrays
  filteredTodos.forEach(function (todo) {
    // This appends it to the HTML element
    document.querySelector("#todo-content").appendChild(generateTodo(todo));
  });
};

// Generate the todo element. Takes in the individual todo element as this will be in a filter array method
const generateTodo = function (todo) {
  const rootDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const button = document.createElement("button");
  const newTodo = document.createElement("span");
  checkbox.setAttribute("type", "checkbox");

  // Append Checkbox to DIV
  rootDiv.appendChild(checkbox);

  // Set textContent for Todo
  newTodo.textContent = todo.text;

  // Append text to DIV
  rootDiv.appendChild(newTodo);

  // Set textcontent of button
  button.textContent = "x";

  // Append Button to DIV
  rootDiv.appendChild(button);

  // Return the DIV as this has all the content inside it
  return rootDiv;
};

// Generate the summary using the Todoleft filter as a argument so we can have access to the length
const generateSummary = function (todosLeft) {
  const todoSummary = document.createElement("h2");
  // This makes the text content of the created h2 element the length of
  // the array which was created in todosLeft variable
  todoSummary.textContent = `You have ${todosLeft.length} todos left to complete`;
  return todoSummary;
};
