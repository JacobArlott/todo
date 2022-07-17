const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemp = (todo) => {
  const html = `
    <li class="list-group-item">
        <span class="list-text">${todo}</span>
        <span class="delete"></span>
      </li>
  `;

  list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemp(todo);
  }
  addForm.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});
