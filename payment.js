// Payment Success Modal Code
const paymentButton = document.querySelector('.payment'); // Select the "Make Payment" button
const successModal = new bootstrap.Modal(document.getElementById('successModal'));
const modalCloseButton = document.querySelector('#successModal .btn-close');
const modalFooterCloseButton = document.querySelector('#successModal .modal-footer .btn-secondary');

paymentButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission if it's a form button
    successModal.show();
});

modalCloseButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});

modalFooterCloseButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});