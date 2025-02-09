const account = document.querySelector('.account');
const dropdown = document.querySelector('.dropdown');
const arrow = document.querySelector('.arrow');

function positionDropdown() {
    let accountRect = account.getBoundingClientRect();
    dropdown.style.top = `${accountRect.bottom}px`;
    dropdown.style.left = `${accountRect.left}px`;
}

positionDropdown();