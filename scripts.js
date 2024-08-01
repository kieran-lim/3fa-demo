document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    steps[currentStep].classList.add('active');

    window.nextStep = function(step) {
        if (step < steps.length) {
            steps[currentStep].classList.remove('active');
            currentStep = step;
            steps[currentStep].classList.add('active');
        }
    }

    window.verifyBiometric = function(method) {
        alert(`Performing ${method} verification...`);
        // Simulate biometric verification success
        setTimeout(() => {
            alert('Biometric verification successful! Logging in...');
            // Redirect to dashboard or next page
            window.location.href = 'dashboard.html';
        }, 2000);
    }
});
