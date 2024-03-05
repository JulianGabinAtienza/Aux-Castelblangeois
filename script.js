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

// Add event listener to the burger menu button
burger_menu.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    if (menu.style.display = 'none') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.justifyContent = 'center';
        burger_menu.style.display = 'none';
    } else {
        menu.style.display = 'none';
        burger_menu.style.display = 'inline';
    }
});