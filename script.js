// 1. Event Handling
// Button click event: Change button text on click
const button = document.getElementById('clickButton');
button.addEventListener('click', () => {
  button.textContent = 'You Clicked Me!';
  button.style.backgroundColor = 'green';  // Change color on click
});

// Hover effect: Change text color on hover
const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
  hoverText.style.color = 'blue';
});
hoverText.addEventListener('mouseout', () => {
  hoverText.style.color = 'black';
});

// Keypress detection: Log the key pressed
document.addEventListener('keydown', (event) => {
  const keyPressLog = document.getElementById('keyPressLog');
  keyPressLog.textContent = event.key;
});

// Double click event: Bonus
button.addEventListener('dblclick', () => {
  alert('Double-click detected!');
});

// Long press event: Bonus (2 seconds)
let pressTimer;
button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long Press Detected!');
  }, 2000);  // 2-second press
});
button.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// 2. Interactive Elements
// Image Gallery: Change images on button click
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.src = images[currentIndex];
});
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  currentImage.src = images[currentIndex];
});

// Tabs: Display content based on clicked tab
const tabButtons = document.querySelectorAll('.tabButton');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    const allTabs = document.querySelectorAll('.tabContent');
    allTabs.forEach(tab => tab.style.display = 'none');
    target.style.display = 'block';
  });
});

// 3. Form Validation
// Email validation on form submit
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();  // Prevent form submission
  }
});

// Password validation: Min 8 characters
form.addEventListener('submit', (event) => {
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    event.preventDefault();  // Prevent form submission
  }
});

// Real-time feedback for password field
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  const feedback = document.getElementById('passwordFeedback');
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters long.';
  } else {
    feedback.textContent = '';
  }
});
