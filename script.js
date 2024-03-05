// HTML structure
// <button class="burger-menu">Toggle Menu</button>
// <ul class="menu">
//   <li>Home</li>
//   <li>About</li>
//   <li>Contact</li>
// </ul>

// Get the burger menu button and the menu
const burger_menu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

// Add event listener to the burger menu button
burger_menu.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    if (menu.style.display = 'none') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.justifyContent = 'start';
        menu.style.alignItems = 'center';
        burger_menu.style.display = 'none';
        logo.style.display = 'none';
    } 
});

document.body.addEventListener('click', (event) => {
    // Check if the click occurred outside of the menu
    if (!menu.contains(event.target) && event.target !== burger_menu) {
        // Hide the menu
        menu.style.display = 'none';
        // Show the burger menu button
        burger_menu.style.display = 'block';
    }
});