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

//Login & Signup (Popup)
let scrollPosition = 0;
document.querySelector('.login').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.login-form').style.display = 'flex';
    document.querySelector('.signup-form').style.display = 'none';
    scrollPosition = window.scrollY;
    document.querySelector('.popup').style.top = scrollPosition + 'px';
    disableScroll();
});

document.querySelector('.signup').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.signup-form').style.display = 'flex';
    document.querySelector('.login-form').style.display = 'none';
    scrollPosition = window.scrollY;
    document.querySelector('.popup').style.top = scrollPosition + 'px';
    disableScroll();
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        closePopup();
        enableScroll();
    });
});

document.querySelector('.switch-to-signup').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'flex';
});

document.querySelector('.switch-to-login').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'flex';
});

document.querySelector('.popup').addEventListener('click', function (event) {
    if (event.target === this) {
        closePopup();
        enableScroll();
    }
});

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'none';
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

