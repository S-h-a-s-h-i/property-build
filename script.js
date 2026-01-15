document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('toggle');
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
    // Project Glimpse Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to current button and target content
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Hero Carousel
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (n + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    if (slides.length > 0) {
        startInterval();
    }

    // Testimonial Carousel
    const tSlides = document.querySelectorAll('.testimonial-item');
    const tDots = document.querySelectorAll('.t-dot');
    const tPrevBtn = document.querySelector('.t-prev-btn');
    const tNextBtn = document.querySelector('.t-next-btn');
    let tCurrentSlide = 0;
    let tSlideInterval;

    function showTSlide(n) {
        if (tSlides.length === 0) return;
        tSlides.forEach(slide => slide.classList.remove('active'));
        tDots.forEach(dot => dot.classList.remove('active'));

        tCurrentSlide = (n + tSlides.length) % tSlides.length;

        tSlides[tCurrentSlide].classList.add('active');
        tDots[tCurrentSlide].classList.add('active');
    }

    function nextTSlide() {
        showTSlide(tCurrentSlide + 1);
    }

    function prevTSlide() {
        showTSlide(tCurrentSlide - 1);
    }

    if (tPrevBtn && tNextBtn) {
        tPrevBtn.addEventListener('click', () => {
            prevTSlide();
            resetTInterval();
        });

        tNextBtn.addEventListener('click', () => {
            nextTSlide();
            resetTInterval();
        });
    }

    tDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTSlide(index);
            resetTInterval();
        });
    });

    function startTInterval() {
        tSlideInterval = setInterval(nextTSlide, 6000);
    }

    function resetTInterval() {
        clearInterval(tSlideInterval);
        startTInterval();
    }

    if (tSlides.length > 0) {
        startTInterval();
    }
});
