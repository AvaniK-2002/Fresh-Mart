// checkout.js

document.addEventListener('DOMContentLoaded', function() {
    var checkoutForm = document.getElementById('checkoutForm');
    var placeOrderBtn = document.getElementById('placeOrderBtn');

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission by default

        // Get form input values
        var productNames = document.getElementById('productNames').value;
        var totalAmount = document.getElementById('totalAmount').value;

        // Validate form fields (simple validation, can be extended)
        if (productNames.trim() === '' || totalAmount.trim() === '') {
            alert('Please fill in all fields.');
        } else {
            // If fields are filled, submit the form
            checkoutForm.submit();
            placeOrderBtn.disabled = true; // Prevent double submission
            placeOrderBtn.textContent = 'Processing...';
        }
    });
});
