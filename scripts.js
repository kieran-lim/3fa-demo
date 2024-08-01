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

    window.validateUsername = function() {
        const username = document.getElementById('username').value;
        if (username === 'timothy') {
            nextStep(1);
        } else {
            alert('Invalid username. Please try again.');
        }
    }

    window.validatePassword = function() {
