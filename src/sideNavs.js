function openNav() {
  document.getElementById('leftSidenav').classList.add('open');
  // document.getElementById('main').style.marginLeft = '350px';
}

function closeNav() {
  document.getElementById('leftSidenav').classList.remove('open');
  // document.getElementById('main').style.marginLeft = '0';
}

function openRightNav() {
  document.getElementById('rightSidenav').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}

function closeRightNav() {
  document.getElementById('rightSidenav').style.width = '0';
  document.getElementById('main').style.marginRight = '0';
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

let activeFormId = "todoForm";

function showTodoPanel() {
  const todo = document.getElementById('todoFormPanel');
  const note = document.getElementById('notePanel');
  todo.classList.remove('show');
  note.classList.add('show');
  activeFormId = "todoForm";
}

function showNotePanel() {
  const todo = document.getElementById('todoFormPanel');
  const note = document.getElementById('notePanel');
  todo.classList.add('show');
  note.classList.remove('show');
  activeFormId = "noteForm";
}

// ADD button handler
function saveActiveForm(e) {
// Find the currently visible form
  const todoPanel = document.getElementById('todoFormPanel');
  const notePanel = document.getElementById('notePanel');
  let activeForm = "todoForm";

 if (!todoPanel.classList.contains('show')) {
    // Todo panel is visible
    activeForm = document.getElementById('todoForm');
    console.log("Submitting todo form");
  } else if (!notePanel.classList.contains('show')) {
    // Note panel is visible
    activeForm = document.querySelector('#notePanel textarea');
    console.log("Submitting note form");
  }
  
  if (activeForm) {
    // For todo form, submit it
    if (activeForm.tagName === 'FORM') {
      // activeForm.submit();
    todoForm.reset();
    }
    // For note textarea, you might want to save the content instead
    else if (activeForm.tagName === 'TEXTAREA') {
      console.log("Note content:", activeForm.value);
    activeForm.value = '';
      // Handle note saving here
    }
  } else {
    console.log("No active form found");
  }

  // const activeForm = document.getElementById(activeFormId);
  // if (activeForm) {
  //   // activeForm.submit();
  //   console.log(activeForm + "submitted");
  //
  // } else {
  //   console.log(activeForm + "not submitted");
  // }
}

// Attach event listeners after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  const addBtn = document.querySelector('.add');
  if (addBtn) {
    addBtn.addEventListener('click', saveActiveForm);
  }

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

});
