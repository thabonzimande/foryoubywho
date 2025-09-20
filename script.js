// Landing page interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for any anchor links (future use)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll event listener for future effects
    window.addEventListener('scroll', function() {
        // Removed floating shapes effect as elements no longer exist
    });
    
    // Add typing effect to the brand name (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect on load (uncomment if desired)
    // const brandName = document.querySelector('.brand-name');
    // if (brandName) {
    //     setTimeout(() => {
    //         typeWriter(brandName, 'ForYouByWho', 150);
    //     }, 1000);
    // }
});

// Utility function for future analytics or tracking
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, properties);
    
    // Example: Facebook Pixel
    // fbq('track', eventName, properties);
}

