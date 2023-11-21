<!-- checkout.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
    <!-- Add the link to the Bootstrap CSS file -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <!-- Add your custom styles here -->
    <style>
        body {
            background-color: #f8f9fa;
            color: #495057;
        }
        .container {
            margin-top: 50px;
        }
        /* Add more styles as needed */
    </style>
</head>
<body>
    <div class="container">
        <h1 class="mb-4">Checkout</h1>

        <!-- Section 1: Personal Data and Shipment Direction -->
        <section>
            <h2>Personal Data</h2>
            <!-- Your form fields for personal information and shipment direction -->
            <form>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" name="firstName" required>
                    </div>
                    <div class="col-md-6">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" name="lastName" required>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="birthDate" class="form-label">Birth Date</label>
                    <input type="date" class="form-control" id="birthDate" name="birthDate" required>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="nationality" class="form-label">Nationality</label>
                        <input type="text" class="form-control" id="nationality" name="nationality" required>
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone" required>
                    </div>
                    <div class="col-md-6">
                        <label for="streetAddress" class="form-label">Street Address</label>
                        <input type="text" class="form-control" id="streetAddress" name="streetAddress" required>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" name="city" required>
                    </div>
                    <div class="col-md-6">
                        <label for="country" class="form-label">Country</label>
                        <input type="text" class="form-control" id="country" name="country" required>
                    </div>
                </div>

                <!-- Add more form fields for personal data and shipment direction -->
            </form>
        </section>


        <!-- Section 2: Payment Method Selection -->
        <section>
            <h2>Payment Method</h2>
            <!-- Your radio buttons for payment method selection -->
            <form>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="creditCard" value="creditCard" checked>
                    <label class="form-check-label" for="creditCard">
                        Credit Card (MasterCard/Visa)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="paypal" value="paypal">
                    <label class="form-check-label" for="paypal">
                        PayPal
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="bankTransfer" value="bankTransfer">
                    <label class="form-check-label" for="bankTransfer">
                        Bank Transfer
                    </label>
                </div>
            </form>
        </section>

        <!-- Section 3: Payment Data based on Selection -->
        <section>
            <h2>Payment Data</h2>
            <!-- Your form fields for payment data based on the selected method -->
            <form id="paymentDataForm">
                <!-- Fields for credit card -->
                <div id="creditCardFields">
                    <div class="mb-3">
                        <label for="cardholderName" class="form-label">Cardholder Name</label>
                        <input type="text" class="form-control" id="cardholderName" name="cardholderName" required>
                    </div>

                    <div class="mb-3">
                        <label for="cardNumber" class="form-label">Card Number</label>
                        <input type="text" class="form-control" id="cardNumber" name="cardNumber" required>
                    </div>

                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="expirationDate" class="form-label">Expiration Date</label>
                            <input type="text" class="form-control" id="expirationDate" name="expirationDate" placeholder="MM/YYYY" required>
                        </div>
                        <div class="col-md-6">
                            <label for="cvv" class="form-label">CVV</label>
                            <input type="text" class="form-control" id="cvv" name="cvv" required>
                        </div>
                    </div>
                    <!-- Add more credit card fields as needed -->
                </div>

                <!-- Fields for PayPal -->
                <div id="paypalFields" style="display: none;">
                    <div class="mb-3">
                        <label for="paypalEmail" class="form-label">PayPal Email</label>
                        <input type="email" class="form-control" id="paypalEmail" name="paypalEmail" required>
                    </div>
                    <!-- Add more PayPal fields as needed -->
                </div>

                <!-- Fields for Bank Transfer -->
                <div id="bankTransferFields" class="mb-3">
                    <label for="bankAccount" class="form-label">Bank Account Number</label>
                    <input type="text" class="form-control" id="bankAccount" name="bankAccount" required>
                </div>

                <!-- Add a submit button -->
                <button type="submit" class="btn btn-primary">Submit Order</button>
            </form>
        </section>
    </div>

    <!-- Include Bootstrap JS and any additional scripts if needed -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script>
        // Add your JavaScript for handling form interactions here
        document.addEventListener('DOMContentLoaded', function() {
            // Add event listener for payment method selection
            var paymentMethodRadios = document.getElementsByName('paymentMethod');
            paymentMethodRadios.forEach(function(radio) {
                radio.addEventListener('change', handlePaymentMethodChange);
            });
        });

        function handlePaymentMethodChange() {
            // Hide all payment data sections
            hidePaymentDataSections();

            // Show the selected payment data section
            var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            var selectedPaymentDataSection = document.getElementById(selectedPaymentMethod + 'Fields');
            if (selectedPaymentDataSection) {
                selectedPaymentDataSection.style.display = 'block';
            }
        }

        function hidePaymentDataSections() {
            var paymentDataSections = document.querySelectorAll('[id$="Fields"]');
            paymentDataSections.forEach(function(section) {
                section.style.display = 'none';
            });
        }

        // Add additional scripts as needed
    </script>
</body>
</html>
