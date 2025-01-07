

function menuIcon() {
    const menuIcon = document.getElementById('menuIcon');
    const menuBar = document.getElementById('right-sidebar')

    // Add a click event listener
    menuIcon.addEventListener('click', () => {
        // Toggle the 'active' class
        menuIcon.classList.toggle('active');
        menuBar.classList.toggle('active');
    });
}


function openMenuBar() {
    menuIcon();
}

openMenuBar()