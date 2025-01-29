//Image 'Slider'
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const imageCount = slider.children.length;
const imagesPerView = 2;
const gapSize = 16;

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= imageCount - imagesPerView;
}

function prevImg() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function nextImg() {
    if (currentIndex < imageCount - imagesPerView) {
        currentIndex++;
        updateSlider();
    }
}

function updateSlider() {
    const imageWidth = slider.querySelector('img').offsetWidth;
    const offset = -(currentIndex * (imageWidth + gapSize));
    slider.style.transform = `translateX(${offset}px)`;
    updateButtons();
}

updateButtons();

// Dropdown menu
const account = document.querySelector('.account');
const dropdown = document.querySelector('.dropdown');
const arrow = document.querySelector('.arrow');

function positionDropdown() {
    let accountRect = account.getBoundingClientRect();
    dropdown.style.top = `${accountRect.bottom}px`;
    dropdown.style.left = `${accountRect.left}px`;
}

positionDropdown();

window.addEventListener('resize', positionDropdown);

account.addEventListener('click', function(event) {
    event.stopPropagation();

    let isDropdownOpen = dropdown.style.display === 'block';
    dropdown.style.display = isDropdownOpen ? 'none' : 'block';

    arrow.classList.toggle('rotate', !isDropdownOpen);
});

document.addEventListener('click', function(event) {
    if (!account.contains(event.target)) {
        dropdown.style.display = 'none';
        arrow.classList.remove('rotate');
    }
});