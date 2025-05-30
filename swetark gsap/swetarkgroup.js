
document.addEventListener('DOMContentLoaded', function() {
            // Register ScrollTrigger Plugin
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero Animation
            const heroTl = gsap.timeline();
            heroTl.to('.hero-title', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            })
            .to('.hero-subtitle', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            }, '-=0.8');
            
         
        });





document.addEventListener('DOMContentLoaded', function() {
      // Initialize GSAP with ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate the tagline - starts when the section first enters view
      gsap.to('.swetark-tagline span', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.swetark-section',
          start: "top bottom", // When the top of section hits the bottom of viewport
          toggleActions: "play none none none"
        }
      });
      
      // Animate each line of the heading - requires more scrolling
      gsap.to('.swetark-section-heading span', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.swetark-section',
          start: "top+=300 bottom", // 100px below the top of section hits bottom of viewport
          toggleActions: "play none none none"
        }
      });
      
      // Animate the description paragraphs - requires even more scrolling
      gsap.to('.swetark-description p', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.swetark-section',
          start: "top+=200 bottom", // 200px below the top of section hits bottom of viewport
          toggleActions: "play none none none"
        }   
      });
      
      // Animate the button - requires most scrolling
      gsap.to('.swetark-btn', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.swetark-section',
          start: "top+=300 bottom", // 300px below the top of section hits bottom of viewport
          toggleActions: "play none none none"
        }
      });
    });











// core value

// Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate the section header
            gsap.to('.section-header', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.section-header',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });
            
            // Animate the value cards with staggered effect
            gsap.to('.value-card', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.values-container',
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            });
            
            // Add hover animations for the cards
            const cards = document.querySelectorAll('.value-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                });
            });
        });





   






// business segment

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel with enhanced effects
    initializeCarousel();
});

function initializeCarousel() {
    // Get all necessary elements
    const track = document.querySelector('.swt-bs-carousel-track');
    const slides = Array.from(document.querySelectorAll('.swt-bs-carousel-slide'));
    const indicators = document.querySelectorAll('.swt-bs-indicator');
    const prevButton = document.querySelector('.swt-bs-carousel-button.swt-bs-prev');
    const nextButton = document.querySelector('.swt-bs-carousel-button.swt-bs-next');
    const carousel = document.querySelector('.swt-bs-carousel');
    
    // Remove any existing clones first to avoid duplicates during hot reloads
    document.querySelectorAll('.swt-bs-clone').forEach(clone => clone.remove());
    
    // Clone all slides for infinite loop
    // We'll add clones to both beginning and end for a smooth infinite effect
    const slideCount = slides.length;
    
    // Add clones at the end
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('swt-bs-clone');
        track.appendChild(clone);
    });
    
    // Add clones at the beginning (in reverse order)
    for (let i = slideCount - 1; i >= 0; i--) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('swt-bs-clone');
        clone.classList.add('swt-bs-prefix-clone');
        track.insertBefore(clone, track.firstChild);
    }
    
    // Get all slides including clones
    const allSlides = Array.from(document.querySelectorAll('.swt-bs-carousel-slide'));
    
    // Set initial state
    // Start at slideCount so we're actually at the first "real" slide, not a clone
    let currentIndex = slideCount;
    let isTransitioning = false;
    
    // Set initial positions and styles
    positionSlides(true);
    window.addEventListener('resize', () => positionSlides(true));
    
    // Add event listeners for navigation
    prevButton.addEventListener('click', () => {
        if (isTransitioning) return;
        navigatePrev();
    });
    
    nextButton.addEventListener('click', () => {
        if (isTransitioning) return;
        navigateNext();
    });
    
    // Add event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (isTransitioning) return;
            navigateTo(parseInt(indicator.dataset.index));
        });
    });
    
    // Touch event handling
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        if (isTransitioning) return;
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            navigateNext();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            navigatePrev();
        }
    }
    
    // Autoplay functionality
    let autoPlayInterval = startAutoPlay();
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoPlayInterval = startAutoPlay();
    });
    
    function startAutoPlay() {
        return setInterval(() => {
            if (!isTransitioning) {
                navigateNext();
            }
        }, 5000);
    }
    
    // Navigation functions
    function navigateNext() {
        navigate(1);
    }
    
    function navigatePrev() {
        navigate(-1);
    }
    
    function navigateTo(index) {
        // Convert indicator index to actual slide index (accounting for prefix clones)
        const targetIndex = index + slideCount;
        const currentNormalizedIndex = normalizeIndex(currentIndex);
        
        // Find the shortest path to the target
        let direction = targetIndex - currentIndex;
        
        // Check if wrapping around the other way would be shorter
        if (Math.abs(direction) > slideCount) {
            direction = direction > 0 ? direction - slideCount * 2 : direction + slideCount * 2;
        }
        
        navigate(direction);
    }
    
    function navigate(direction) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Update current index
        currentIndex += direction;
        
        // Apply the transition
        applyTransition();
        
        // Update the active states
        updateActiveStates();
        
        // Reset transition state after animation completes
        setTimeout(() => {
            isTransitioning = false;
            
            // If we've moved beyond the clone boundary, jump back to the original slides
            if (currentIndex < slideCount) {
                // We've moved too far back, jump to the equivalent position in the regular slides
                currentIndex += slideCount;
                applyTransition(true);
            } else if (currentIndex >= slideCount * 2) {
                // We've moved too far forward, jump to the equivalent position in the regular slides
                currentIndex -= slideCount;
                applyTransition(true);
            }
        }, 600);
    }
    
    // Position and style all slides based on the current index
    function positionSlides(instant = false) {
        const carouselWidth = carousel.offsetWidth;
        const slideWidth = Math.min(carouselWidth * 0.9, 1000); // Max slide width for larger screens
        const slideGap = 20;
        const offset = (carouselWidth - slideWidth) / 2;
        
        // Set styles for the track
        track.style.width = `${(allSlides.length * (slideWidth + slideGap)) - slideGap}px`;
        
        // Position and style each slide
        allSlides.forEach((slide, index) => {
            const position = (index - currentIndex) * (slideWidth + slideGap);
            slide.style.width = `${slideWidth}px`;
            slide.style.transform = `translateX(${position + offset}px)`;
            
            // Apply visual effects based on position
            applyVisualEffects(slide, index);
        });
    }
    
    // Apply transition to all slides
    function applyTransition(instant = false) {
        allSlides.forEach(slide => {
            if (instant) {
                slide.style.transition = 'none';
            } else {
                slide.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
            }
        });
        
        // If making an instant transition, force a reflow
        if (instant) {
            track.offsetHeight; // Force reflow
        }
        
        // Position the slides
        positionSlides();
        
        // Reset transition after instant jump
        if (instant) {
            setTimeout(() => {
                allSlides.forEach(slide => {
                    slide.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                });
            }, 50);
        }
    }
    
    // Apply visual effects to slides based on their position
    function applyVisualEffects(slide, index) {
        const relativeIndex = index - currentIndex;
        
        // Reset all styles
        slide.style.opacity = '';
        slide.style.filter = '';
        slide.style.transform = slide.style.transform.replace(/scale\([^)]*\)/, '');
        
        // Apply styles based on position
        if (relativeIndex === 0) {
            // Center/active slide
            slide.classList.add('swt-bs-active');
            slide.style.opacity = '1';
            slide.style.filter = 'blur(0)';
            slide.style.transform += ' scale(1)';
            slide.style.zIndex = '10';
        } else {
            // Side slides
            slide.classList.remove('swt-bs-active');
            const distance = Math.abs(relativeIndex);
            const opacity = Math.max(0.3, 1 - distance * 0.25);
            const scale = Math.max(0.75, 1 - distance * 0.075);
            const blur = Math.min(3, distance);
            
            slide.style.opacity = opacity.toString();
            // slide.style.filter = `blur(${blur}px)`;
            slide.style.transform += ` scale(${scale})`;
            slide.style.zIndex = (10 - distance).toString();
        }
    }
    
    // Helper function to normalize the index to the indicator range (0 to slideCount-1)
    function normalizeIndex(index) {
        return ((index - slideCount) % slideCount + slideCount) % slideCount;
    }
    
    // Update active states for indicators
    function updateActiveStates() {
        const normalizedIndex = normalizeIndex(currentIndex);
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === normalizedIndex) {
                indicator.classList.add('swt-bs-active');
            } else {
                indicator.classList.remove('swt-bs-active');
            }
        });
    }
    
    // Initialize the carousel
    applyTransition(true);
    updateActiveStates();
}




        // core beliefs


     document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    initCoreBeliefAnimations();
    
    function initCoreBeliefAnimations() {
        // Title animations
        const titleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".belief-title",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        titleTimeline
            .to(".belief-title", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });
            
        // Image animation
        gsap.to(".core-beliefs-img", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".beliefs-image",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        // Timeline animation
        gsap.to(".advantage-line", {
            height: "100%",
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".advantages-container",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });
        
        // Advantage items animations
        gsap.utils.toArray(".advantage-item").forEach((item, index) => {
            // Dots animation
            gsap.to(item.querySelector(".advantage-dot"), {
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
            
            // Content animation
            gsap.to(item, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });
    }
});

        




    // why choose us for swetark wealth multipliers


  document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    initAnimations();
    
    function initAnimations() {
        // Add default visibility for no-JS environments
        gsap.set(".header-title", {opacity: 1, y: 0});
        gsap.set(".header-divider", {scaleX: 1});
        gsap.set(".header-subtitle", {opacity: 1, y: 0});
        gsap.set(".benefits-timeline", {height: "100%"});
        gsap.set(".benefit-card", {opacity: 1});
        gsap.set(".benefit-circle", {scale: 1});
        
        // Then add the animations that will override these defaults
        // Title animations
        const titleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".benefits-header",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
        
        titleTimeline
            .fromTo(".header-title", 
                {y: 100, opacity: 0}, 
                {y: 0, opacity: 1, duration: 1, ease: "power3.out"}
            )
            .fromTo(".header-divider", 
                {scaleX: 0}, 
                {scaleX: 1, duration: 1.2, ease: "power3.inOut"}, 
                "-=0.5"
            )
            .fromTo(".header-subtitle", 
                {y: 20, opacity: 0}, 
                {y: 0, opacity: 1, duration: 0.8, ease: "power2.out"}, 
                "-=0.7"
            );
        
        // Timeline animation
        gsap.fromTo(".benefits-timeline", 
            {height: "0%"}, 
            {
                height: "100%",
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".benefits-list",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1
                }
            }
        );
        
        // Benefit items animations
        gsap.utils.toArray(".benefit-card").forEach((item, index) => {
            // Dots animation
            gsap.fromTo(item.querySelector(".benefit-circle"),
                {scale: 0},
                {
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
            
            // Content animation
            gsap.fromTo(item,
                {opacity: 0},
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
            
            // Title line animation
            gsap.fromTo(item.querySelector(".benefit-details h3::before"),
                {width: "0px"},
                {
                    width: "15px",
                    duration: 0.6,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
        
      
    }
});







// busines health system pointers

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Register ScrollTrigger plugin if using GSAP
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Animate the value boxes with staggered effect
            gsap.to('.sw-value-box', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.sw-values-grid',
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                }
            });
        }
        
        // Add hover animations for the boxes (works without GSAP)
        const boxes = document.querySelectorAll('.sw-value-box');
        
        boxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(box, {
                        y: -10,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    box.style.transform = 'translateY(-10px)';
                }
            });
            
            box.addEventListener('mouseleave', () => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(box, {
                        y: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    box.style.transform = 'translateY(0)';
                }
            });
        });
    });


    


    // fund house


    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Text content animations with staggered effect
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".fund-section",
        start: "top 80%",
      }
    });
    
    textTimeline
      .to(".content h2", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(".content p", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(".content .cta-button", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    
    // Split heading text for character animation (for more advanced effect)
    const heading = document.querySelector('.content h2');
    const headingText = heading.textContent;
    let headingHTML = '';
    
    // Wrap each character in a span for animation
    for (let i = 0; i < headingText.length; i++) {
      if (headingText[i] === ' ') {
        headingHTML += ' ';
      } else {
        headingHTML += `<span class="char">${headingText[i]}</span>`;
      }
    }
    heading.innerHTML = headingHTML;
    
    // Animate each character
    gsap.from('.char', {
      opacity: 0,
      y: 20,
      rotationX: 90,
      stagger: 0.03,
      delay: 0.3,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".fund-section",
        start: "top 80%",
      }
    });
    
    // Image animation sequence
    const imageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".fund-section",
        start: "top 80%",
      }
    });
    
    imageTimeline
      .to(".image-container", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .from(".custom-image", {
        scale: 0.8,
        y: 30,
        rotation: 2,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.4");
    
    
    
    // Hover animation for CTA button
    document.querySelector('.cta-button').addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -2,
        duration: 0.3
      });
    });
    
    document.querySelector('.cta-button').addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        duration: 0.3
      });
    });




