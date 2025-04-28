/**
 * Event Planning Website - JavaScript File
 * Contains form validation and quiz functionality
 */

// Form Validation
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    // Validate name field
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Validate email field
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // If form is valid, submit it (in a real app, you would send to server)
    if (isValid) {
        alert('Form submitted successfully! We will contact you soon.');
        this.reset();
    }
});

// Quiz Functionality
function checkQuiz() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const resultDiv = document.getElementById('quiz-result');
    
    if (!selectedOption) {
        resultDiv.textContent = 'Please select an answer';
        resultDiv.style.color = '#e53935';
        return;
    }
    
    const answer = selectedOption.value;
    
    // Correct answer is 12 months (option with value "12")
    if (answer === '12') {
        resultDiv.textContent = 'Correct! 12-18 months is ideal for wedding planning.';
        resultDiv.style.color = '#43a047';
    } else {
        resultDiv.textContent = 'Not quite. The ideal lead time for wedding planning is 12-18 months.';
        resultDiv.style.color = '#e53935';
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Helper function for button scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Service Worker Registration for Offline Functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}