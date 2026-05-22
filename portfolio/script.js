// --- 1. Smooth Scrolling for Navbar Links ---
// This makes clicking the navigation links scroll smoothly to the section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the default sudden jump
        
        // Find the target section by its ID
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to it smoothly
        if(targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- 2. Scroll Reveal Animations ---
// We will use IntersectionObserver to detect when elements scroll into the screen
// and apply a fade-in animation to them.

// First, we need to select all elements we want to animate.
// Let's target the section titles, the project/about cards, and the timeline items.
const hiddenElements = document.querySelectorAll('.section-title, .about-content, .project-card, .contact-content, .timeline-item');

// Create the observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible in the viewport...
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add the 'show' class to trigger CSS animation
            
            // Optional: stop observing once it's revealed so it doesn't animate again
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing all the hidden elements
hiddenElements.forEach((el) => observer.observe(el));
