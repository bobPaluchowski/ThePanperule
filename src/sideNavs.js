function openNav() {
  document.getElementById('leftSidenav').style.width = '350px';
  document.getElementById('main').style.marginLeft = '350px';
}

function closeNav() {
  document.getElementById('leftSidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

function openRightNav() {
  document.getElementById('rightSidenav').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}

function closeRightNav() {
  document.getElementById('rightSidenav').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
}

function changeText() {
  document.getElementById('title').innerText = "And now for soething completelly different";
}

function clickedBtn(e) {
  // Only toggle buttons within the left panel (ToDo/Note buttons)
  e.stopPropagation();

  const leftPanelButtons = document.querySelectorAll('#leftSidenav button');
  leftPanelButtons.forEach(btn => btn.classList.remove('toggleBtn'));
  e.currentTarget.classList.add('toggleBtn');

  // console.log("button clicked:", e.currentTarget.textContent);
  // console.log("toggleBtn class added:", e.currentTarget.classList.contains('toggleBtn'));
}

function showTodoPanel() {
  const todo = document.getElementById('todoFormPanel');
  const note = document.getElementById('notePanel');
  note.style.display = "none";
  todo.style.display = "block";
}

function showNotePanel() {
  const todo = document.getElementById('todoFormPanel');
  const note = document.getElementById('notePanel');
  note.style.display = "block";
  todo.style.display = "none";

}
// const p1 = document.getElementById("p1");
// const button = document.querySelector("button");
//
// p1.addEventListener("click", () => {
//   p1.style.background = "green";
// });
// button.addEventListener("click", () => {
//   p1.style.background = "white";
// });

// Attach event listeners after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
 // Only attach toggle functionality to ToDo/Note buttons in left panel
const todoNoteBtns = document.querySelectorAll("#leftSidenav .twoBtns button");
  // console.log("Found buttons", todoNoteBtns.length);

  todoNoteBtns.forEach(button => {
    button.addEventListener('click', clickedBtn);
  });
  }, 100);

  // Note panel toggle
  const showNoteInput = document.querySelector('.noteBtn');
  if (showNoteInput) {
    showNoteInput.addEventListener('click', showNotePanel);
  }

  // Todo panel toggle
  const showTodoInput = document.querySelector('.todoBtn');
  if (showTodoInput) {
    showTodoInput.addEventListener('click', showTodoPanel);
  }

    // Left Sidenav Toggle
    const openLeftBtn = document.querySelector('#main > span:first-child');
    if (openLeftBtn) {
        openLeftBtn.addEventListener('click', openNav);
    }
    const closeLeftBtn = document.querySelector('#leftSidenav .closebtn');
    if (closeLeftBtn) {
        closeLeftBtn.addEventListener('click', closeNav);
    }

    // Right Sidenav Toggle
    const openRightBtn = document.querySelector('#main > span:last-of-type');
    if (openRightBtn) {
        openRightBtn.addEventListener('click', openRightNav);
    }
    const closeRightBtn = document.querySelector('#rightSidenav .closebtn');
    if (closeRightBtn) {
        closeRightBtn.addEventListener('click', closeRightNav);
    }

    // Button
    const changeTitle = document.querySelector('.button');
  if (changeTitle) {
    changeTitle.addEventListener('click', changeText);
  }
});
