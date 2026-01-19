document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate').forEach((el) => {
        observer.observe(el);
    });

    // Simple console signature
    console.log("%c Developed by Mahesh Chander ", "background: #00ff41; color: #000; font-size: 12px; font-weight: bold; padding: 4px; border-radius: 4px;");
});
