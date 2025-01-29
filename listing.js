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

//Upload Image
const uploadInput = document.getElementById('upload');
const previewContainer = document.getElementById('previewContainer');
const dropArea = document.getElementById('dropArea');

// Handle file selection via input
uploadInput.addEventListener('change', function(event) {
    handleFiles(event.target.files);
});

// Handle file drop
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('dragover');
    handleFiles(event.dataTransfer.files);
});

// Process and display images
function handleFiles(files) {
    Array.from(files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('image-wrapper');

            const img = document.createElement('img');
            img.src = e.target.result;

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '✖';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                imgWrapper.remove();
            };

            imgWrapper.appendChild(img);
            imgWrapper.appendChild(deleteBtn);
            previewContainer.appendChild(imgWrapper);
        };

        reader.readAsDataURL(file);
    });
}

