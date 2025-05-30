


// Preloader functionality

 // Preloader hide functionality
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            
            setTimeout(() => {
                preloader.classList.add('fade-out');
                
                setTimeout(() => {
                    if (preloader && preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 800);
            }, 2500); // Show for 3.5 seconds
        });

        // Add some interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            const logoMain = document.querySelector('.logo-main');
            
            // Add subtle hover effect even during preload
            logoMain.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            logoMain.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });




        // Navbar Scroll Animation
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Mobile navdropdowns
        document.addEventListener('DOMContentLoaded', function() {
            const navdropdowns = document.querySelectorAll('.navdropdown');
            const nestednavdropdowns = document.querySelectorAll('.nested-navdropdown');
            
            // Handle main navdropdowns
            navdropdowns.forEach(navdropdown => {
                const navdropdownToggle = navdropdown.querySelector('.navdropdown-toggle');
                
                navdropdownToggle.addEventListener('click', function(e) {
                    // Only toggle on mobile
                    if (window.innerWidth <= 991) {
                        e.preventDefault();
                        navdropdown.classList.toggle('active');
                        
                        // Close other navdropdowns
                        navdropdowns.forEach(othernavdropdown => {
                            if (othernavdropdown !== navdropdown) {
                                othernavdropdown.classList.remove('active');
                            }
                        });
                    }
                });
            });
            
            // Handle nested navdropdowns
            nestednavdropdowns.forEach(nestednavdropdown => {
                const nestednavdropdownToggle = nestednavdropdown.querySelector('.nested-navdropdown-toggle');
                
                nestednavdropdownToggle.addEventListener('click', function(e) {
                    // Only toggle on mobile
                    if (window.innerWidth <= 991) {
                        e.preventDefault();
                        nestednavdropdown.classList.toggle('active');
                        
                        // Close other nested navdropdowns
                        nestednavdropdowns.forEach(otherNestednavdropdown => {
                            if (otherNestednavdropdown !== nestednavdropdown) {
                                otherNestednavdropdown.classList.remove('active');
                            }
                        });
                    }
                });
            });
        });

        // GSAP Animations



        
document.addEventListener('DOMContentLoaded', function() {
    const delay = document.body.classList.contains('homepage') ? 3 : 0;
    
    gsap.from(".logo", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        delay: delay
    });
    
    gsap.from(".nav-item", {
        duration: 1,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: delay
    });
});



        // document.addEventListener('DOMContentLoaded', function() {
        //     gsap.from(".logo", {
        //         duration: 1,
        //         y: -50,
        //         opacity: 0,
        //         ease: "power3.out",
        //         delay: 3 
        //     });
            
        //     gsap.from(".nav-item", {
        //         duration: 1,
        //         y: -30,
        //         opacity: 0,
        //         stagger: 0.1,
        //         ease: "power3.out",
        //         delay: 3  
        //     });



            
            // Hover animations for nav items
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    gsap.to(this, {
                        duration: 0.3,
                        y: -5,
                        ease: "power2.out"
                    });
                });
                
                item.addEventListener('mouseleave', function() {
                    gsap.to(this, {
                        duration: 0.3,
                        y: 0,
                        ease: "power2.out"
                    });
                });
            });
            
            // navdropdown animation enhancement
            const navdropdownMenus = document.querySelectorAll('.navdropdown-menu');
            
            navdropdownMenus.forEach(menu => {
                const items = menu.querySelectorAll('.navdropdown-item');
                
                gsap.set(items, { opacity: 0, y: 10 });
                
                menu.parentElement.addEventListener('mouseenter', function() {
                    gsap.to(items, {
                        duration: 0.4,
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                        ease: "power3.out",
                        delay: 0.1
                    });
                });
                
                menu.parentElement.addEventListener('mouseleave', function() {
                    gsap.set(items, { opacity: 0, y: 10 });
                });
            });
            
            // Scroll animation for navbar
            const navbar = document.getElementById('navbar');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    if (scrollTop > 100 && !navbar.classList.contains('scrolled')) {
                        gsap.to(navbar, {
                            duration: 0.3,
                            y: -100,
                            ease: "power3.out"
                        });
                        
                        setTimeout(() => {
                            navbar.classList.add('scrolled');
                            gsap.to(navbar, {
                                duration: 0.3,
                                y: 0,
                                ease: "power3.out"
                            });
                        }, 300);
                    }
                } else {
                    // Scrolling up
                    if (scrollTop <= 50 && navbar.classList.contains('scrolled')) {
                        gsap.to(navbar, {
                            duration: 0.3,
                            y: -100,
                            ease: "power3.out"
                        });
                        
                        setTimeout(() => {
                            navbar.classList.remove('scrolled');
                            gsap.to(navbar, {
                                duration: 0.3,
                                y: 0,
                                ease: "power3.out"
                            });
                        }, 300);
                    }
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            });
       
























        // Hero Carousel Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.carousel-slide');
            const indicators = document.querySelectorAll('.indicator');
            const prevButton = document.getElementById('prevSlide');
            const nextButton = document.getElementById('nextSlide');
            let currentSlide = 0;
            let slideInterval;
            
            // Initialize carousel
            startSlideshow();
            
            // Handle indicator clicks
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlides();
                    resetSlideshow();
                });
            });
            
            // Previous button click
            prevButton.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlides();
                resetSlideshow();
            });
            
            // Next button click
            nextButton.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlides();
                resetSlideshow();
            });
            
   
            
            // Update slides
            function updateSlides() {
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                slides[currentSlide].classList.add('active');
                indicators[currentSlide].classList.add('active');
            }
            
            // Start automatic slideshow
            function startSlideshow() {
                slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % slides.length;
                    updateSlides();
                }, 6000);
            }
            
            // Reset slideshow timer
            function resetSlideshow() {
                clearInterval(slideInterval);
                startSlideshow();
            }
        });
        
    




        // ecosystem
  
// Enhanced hover animations
        document.querySelectorAll('.ecosystem-card').forEach(card => {
            const icon = card.querySelector('.card-icon');
            const arrow = card.querySelector('.card-arrow');
            const title = card.querySelector('.card-title');
            const subtitle = card.querySelector('.card-subtitle');

            card.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.1,
                    // rotation: 5,
                    duration: 0.4,
                    ease: "back.out(1.7)"
                });
                gsap.to(arrow, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to([title, subtitle], {
                    x: 6,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to([icon, arrow], {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to([title, subtitle], {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Click animation
        document.querySelectorAll('.ecosystem-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();

                gsap.to(card, {
                    scale: 0.98,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut",
                    onComplete: () => {
                        console.log('Navigating to:', card.getAttribute('href'));
                        window.location.href = card.getAttribute('href');
                    }
                });
            });
        });

        // Subtle parallax effect for featured card
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const featured = document.querySelector('.card-featured');
            if (featured) {
                gsap.to(featured, {
                    y: scrolled * 0.015,
                    duration: 0.5,
                    ease: "power1.out"
                });
            }
        });





        //footer

        function toggleOfferingsSection(sectionId) {
            const collapseArea = document.getElementById(sectionId);
            const headerBtn = collapseArea.previousElementSibling;
            
            // Close other section if open
            const allSections = ['domestic-offerings', 'international-offerings'];
            const otherSectionId = allSections.find(id => id !== sectionId);
            const otherCollapseArea = document.getElementById(otherSectionId);
            const otherHeaderBtn = otherCollapseArea.previousElementSibling;
            
            if (otherCollapseArea.classList.contains('expanded')) {
                otherCollapseArea.classList.remove('expanded');
                otherHeaderBtn.classList.remove('expanded');
            }
            
            // Toggle current section
            collapseArea.classList.toggle('expanded');
            headerBtn.classList.toggle('expanded');
        }

        // Close sections when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.offerings-expandable-wrapper')) {
                const collapseAreas = document.querySelectorAll('.offerings-collapse-area');
                const headerBtns = document.querySelectorAll('.offerings-header-btn');
                
                collapseAreas.forEach(area => area.classList.remove('expanded'));
                headerBtns.forEach(btn => btn.classList.remove('expanded'));
            }
        });

        // Keyboard accessibility
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const collapseAreas = document.querySelectorAll('.offerings-collapse-area');
                const headerBtns = document.querySelectorAll('.offerings-header-btn');
                
                collapseAreas.forEach(area => area.classList.remove('expanded'));
                headerBtns.forEach(btn => btn.classList.remove('expanded'));
            }
        });