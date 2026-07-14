// Ensure DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll) Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }

    // 2. Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Mobile ডিভাইসে মেনু লিংকে ক্লিক করলে ড্রপডাউন মেনুটি অটোমেটিক বন্ধ হয়ে যাবে
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // 3. Professional Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে
            
            // ইনপুট ভ্যালু রিড করা (ভবিষ্যতে ব্যাকএন্ড বা ইমেইল ইন্টিগ্রেশনের জন্য)
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            
            // একটি প্রিমিয়াম সাকসেস মেসেজ শো করা
            alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you at ${email} shortly.`);
            
            // ফর্মটি খালি (Clear) করে দেওয়া
            contactForm.reset();
        });
    }

    // 4. Sticky Navbar Background Blur Effect on Scroll
    const navbar = document.querySelector('.navbar-custom');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.backgroundColor = 'rgba(11, 15, 25, 0.8)';
        }
    });
});