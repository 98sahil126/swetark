
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
            // Animate form elements
            const tl = gsap.timeline();
            
            tl.to('.contact-heading', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            })
            .to('.contact-subheading', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.5')
            .to('.form-group', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power2.out'
            }, '-=0.5')
            .to('button', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.2');
            
            // Animate image and shapes
            gsap.to('.illustration', {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'elastic.out(1, 0.7)',
                delay: 0.5
            });
            
            gsap.to('.shape', {
                opacity: 0.7,
                duration: 1,
                delay: 0.8,
                stagger: 0.2
            });
            
            // Floating animation for shapes
            gsap.to('.shape:nth-child(1)', {
                x: '20px',
                y: '30px',
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            gsap.to('.shape:nth-child(2)', {
                x: '-15px',
                y: '25px',
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            gsap.to('.shape:nth-child(3)', {
                x: '25px',
                y: '-20px',
                duration: 4.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            gsap.to('.shape:nth-child(4)', {
                x: '-20px',
                y: '-15px',
                duration: 5.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            
            // Form submission (prevent default for demo)
            document.getElementById('contact-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Form submitted successfully! In a real implementation, this would send the data to your server.');
            });
        });






   









        // maps



// Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animations when page loads
    window.addEventListener('DOMContentLoaded', () => {
      // Animate office cards with stagger
      gsap.to('.office-card', {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'back.out(1.7)',
      });
      
      // Add click interaction for office cards
      document.querySelectorAll('.office-card').forEach((card) => {
        card.addEventListener('click', () => {
          gsap.to(card.querySelector('.office-map'), {
            filter: 'grayscale(0%)',
            duration: 0.5,
          });
          
          // Automatically return to original state after 3 seconds
          setTimeout(() => {
            if (!card.matches(':hover')) {
              gsap.to(card.querySelector('.office-map'), {
                filter: 'grayscale(100%)',
                duration: 0.5,
              });
            }
          }, 3000);
        });
      });
    });
    
    // Special hover effects - no zoom
    document.querySelectorAll('.office-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)',
          duration: 0.5,
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
        });
      });
    });
    
    // Add scroll-based animations
    ScrollTrigger.batch('.office-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0.5,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
        });
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {
          opacity: 0.5,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
        });
      }
    });