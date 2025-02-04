
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page (e.g., index.html)
    const menuItems = document.querySelectorAll('.site-menu a'); // Select all menu links

    menuItems.forEach(item => {
        // Check if the href matches the current page
        if (item.getAttribute('href') === currentPage) {
            // Add the 'active' class to the parent <li>
            item.parentElement.classList.add('active');
        } else {
            // Remove the 'active' class if it doesn't match
            item.parentElement.classList.remove('active');
        }
    });
});
