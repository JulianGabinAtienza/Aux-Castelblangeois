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
        burger_menu.style.display = 'none';
        logo.style.width = '90px';
        logo.style.height = '90px';
    }
    
    document.addEventListener('click', (event) => {
        // Check if the click occurred outside of the menu
        if (!menu.contains(event.target) && event.target !== burger_menu) {
            // Hide the menu
            menu.style.display = 'none';
            burger_menu.style.display = 'block';
            logo.style.width = '35px';
            logo.style.height = '35px';
        }
    });
});