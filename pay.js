// Set your publishable key from the Stripe dashboard
var stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Create an instance of Elements
var elements = stripe.elements();

// Custom styling for the card element
var style = {
    base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        '::placeholder': {
            color: '#aab7c4',
        },
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545',
    },
};

// Create an instance of the card Element
var card = elements.create('card', { style: style });

// Mount the card Element to the 'card-element' div
card.mount('#card-element');

// Handle real-time validation errors on the card Element
card.on('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Display error message if card authentication fails
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // On successful token creation, submit the form with the token ID
            stripeTokenHandler(result.token);
        }
    });
});

// Function to handle token submission to the server
function stripeTokenHandler(token) {
    // Insert your server-side endpoint URL to handle the payment here
    fetch('charge.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.error) {
            // Display error message from the server
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = data.error;
        } else {
            // Payment successful - display success message or perform further actions
            alert('Payment successful!');
        }
    });
}
