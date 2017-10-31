/* ====================================
              VARIABLES
   ==================================== */

const menuIcon = document.querySelector('.menu__main');
const notificationIcon = document.querySelector('.alert__icon');
const notificationDropDown = document.querySelector('.notification__container--primary');
const dropDownMenu = document.querySelector('.dropdown-content');
const alertBox = document.querySelector('.alert-box__container');
const searchBar = document.querySelector('.search-bar');
const container = document.querySelector('.notification__container--primary');
const sendButton = document.querySelector('.send-btn');
let count = 0;

/* ====================================
              FUNCTIONS
   ==================================== */

// toggles drop down menu
const toggleMenu = function() {
  const currentStyle = window.getComputedStyle(dropDownMenu);
  if (currentStyle.display == "flex") {
    dropDownMenu.style.display = 'none';
  } else {
    dropDownMenu.style.display = 'flex';
  }
}

// trigger animation on menu click

const menuAnimation = function() {
  menuIcon.classList.add('menu__animation');
}

const removeMenuAnimation = function() {
  menuIcon.classList.remove('menu__animation');
}

// get the value of input and remove it on blur

const inputValue = function() {
  searchBar.value = '';
}

// remove notification dropDownMenu

const notificationMenu = function(e) {
  const clickedIcon = e.target;
  if (clickedIcon.className === 'alert__icon__main pointer' || 'online-status' || 'notification__remove__menu') {
    const currentAlertIconStyle = window.getComputedStyle(container);
    if (currentAlertIconStyle.top == '-53px') {
      container.style.top = '71px';
    } else if (currentAlertIconStyle.top === '71px') {
      container.style.top = '-53px';
    }
  }
}

// remove exact notification

const removeNotification = function(e) {
  const currentStyle = window.getComputedStyle(notificationDropDown);
  const ul = document.querySelector('.notification__container--secondary');
  const removed = e.target.parentElement;
  if (ul.children) {
    const removedStore = ul.removeChild(removed);
  }
}

/* ====================================
              EVENTS
   ==================================== */
// listens for the click events in menuIcon (burger icon)
menuIcon.addEventListener('click', ()=> {
  toggleMenu();
  menuAnimation();
  setTimeout(removeMenuAnimation, 250);
});

// listen for the click events in alertBox
alertBox.addEventListener('click', (e)=> {
  let clicked = e.target;
  if (clicked.className === 'close__icon pointer') {
    alertBox.style.display = 'none';
  }
});

//listen for the blur events in searchBar
searchBar.addEventListener('blur', ()=> {
  inputValue();
});

notificationIcon.addEventListener('click', (e)=> {
  notificationMenu(e);
});

notificationDropDown.addEventListener('click', (e)=> {
  const clickedIcon = e.target;
  if (clickedIcon.className === 'notification__remove__menu') {
    notificationMenu(e);
  } else if (clickedIcon.className === 'notification__remove__icon') {
    count += 1;
    removeNotification(e);
    if (count === 3) {
      const upToDate = document.createElement('p');
      const statusIcon = document.querySelector('.online-status');
      upToDate.textContent = 'You are up to date!';
      upToDate.classList.add('notif__p');
      const ul = document.querySelector('.notification__container--secondary');
      ul.appendChild(upToDate);
      statusIcon.style.background = '#F1C38E';
    }
  }
});

sendButton.addEventListener('click', ()=>{
  let textArea = document.querySelector('.message-user-textarea');
  if (textArea.value === '') {
    textArea.classList.remove('success');
    textArea.classList.add('error');
  } else {
    textArea.classList.remove('error');
    textArea.classList.add('success');
  }
});
