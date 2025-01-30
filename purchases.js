// Dropdown menu
const account = document.querySelector('.account');
const dropdown = document.querySelector('.dropdown');
const arrow = document.querySelector('.arrow');

function positionDropdown() {
    const accountRect = account.getBoundingClientRect();
    dropdown.style.top = `${accountRect.bottom}px`;
    dropdown.style.left = `${accountRect.left}px`;
}

positionDropdown();

window.addEventListener('resize', positionDropdown);

account.addEventListener('click', function(event) {
    event.stopPropagation();

    const isDropdownOpen = dropdown.style.display === 'block';
    dropdown.style.display = isDropdownOpen ? 'none' : 'block';

    arrow.classList.toggle('rotate', !isDropdownOpen);
});

document.addEventListener('click', function(event) {
    if (!account.contains(event.target)) {
        dropdown.style.display = 'none';
        arrow.classList.remove('rotate');
    }
});

// Navigation Purchase
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".purchases-nav h2");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all tabs
            navItems.forEach(nav => nav.classList.remove("active"));
            
            // Add active class to clicked tab
            item.classList.add("active");
        });
    });
});
