// Advanced scroll reveal initializer with multiple animation types
// Uses IntersectionObserver to add the "is-visible" class when in view

export function initScrollReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.1 } = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('is-visible');

        // Enhanced stagger handling with advanced animations
        if (el.classList.contains('reveal-stagger') || el.classList.contains('reveal-stagger-advanced')) {
          const children = Array.from(el.children);
          children.forEach((child, i) => {
            child.style.animationDelay = `${i * 120}ms`;
          });
        }

        // Special handling for cascade effects
        if (el.classList.contains('reveal-cascade')) {
          const items = el.querySelectorAll('.cascade-item');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, i * 150);
          });
        }

        // Particle effects handling
        if (el.classList.contains('reveal-particles')) {
          // Trigger particle animation first, then content
          setTimeout(() => {
            const content = el.querySelector('.particle-content');
            if (content) content.classList.add('is-visible');
          }, 500);
        }

        // Section divider tear effects
        if (el.classList.contains('section-divider-tear')) {
          setTimeout(() => {
            el.classList.add('tear-complete');
          }, 800);
        }

        // Advanced morphing effects with sound simulation (visual feedback)
        if (el.classList.contains('reveal-liquid-drop') || el.classList.contains('reveal-morph-expand')) {
          el.style.willChange = 'transform, opacity, filter, border-radius';
          setTimeout(() => {
            el.style.willChange = 'auto';
          }, 1500);
        }

        // 3D flip effects optimization
        if (el.classList.contains('reveal-flip') || el.classList.contains('reveal-origami')) {
          el.style.transformStyle = 'preserve-3d';
          el.style.backfaceVisibility = 'hidden';
        }

        // Unobserve once revealed to avoid retriggering (except for special cases)
        if (!el.classList.contains('reveal-repeat')) {
          io.unobserve(el);
        }
      } else {
        // Handle exit animations for repeating elements
        if (entry.target.classList.contains('reveal-repeat')) {
          entry.target.classList.remove('is-visible');
        }
      }
    });
  }, { root: null, rootMargin, threshold });

  // Extended list of animation selectors
  const selectors = [
    '.reveal-paper', 
    '.reveal-up', 
    '.reveal-right', 
    '.reveal-stagger',
    '.reveal-stagger-advanced',
    '.reveal-slide-bottom',
    '.reveal-slide-left', 
    '.reveal-slide-right',
    '.reveal-zoom-rotate',
    '.reveal-cascade',
    '.reveal-paper-tear-top',
    '.reveal-paper-tear-left',
    '.reveal-paper-tear-right',
    '.reveal-morph-expand',
    '.reveal-liquid-drop',
    '.reveal-flip',
    '.reveal-glass-shatter',
    '.reveal-origami',
    '.reveal-wave-distort',
    '.reveal-particles',
    '.section-divider-tear'
  ];

  const nodes = document.querySelectorAll(selectors.join(', '));
  nodes.forEach((n) => io.observe(n));

  // Return cleanup function
  return () => io.disconnect();
}

// Enhanced parallax with multiple effects and smooth performance
export function initParallax() {
  if (typeof window === 'undefined') return () => {};
  
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  const scaleEls = Array.from(document.querySelectorAll('[data-scale]'));
  const rotateEls = Array.from(document.querySelectorAll('[data-rotate]'));
  const fadeEls = Array.from(document.querySelectorAll('[data-fade]'));
  const morphEls = Array.from(document.querySelectorAll('[data-morph]'));
  const glitchEls = Array.from(document.querySelectorAll('[data-glitch]'));
  
  if (parallaxEls.length === 0 && scaleEls.length === 0 && rotateEls.length === 0 && 
      fadeEls.length === 0 && morphEls.length === 0 && glitchEls.length === 0) {
    return () => {};
  }

  // Optimize performance with will-change
  [...parallaxEls, ...scaleEls, ...rotateEls, ...fadeEls, ...morphEls, ...glitchEls].forEach((el) => {
    el.style.willChange = 'transform, opacity, filter';
  });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      const scrollY = window.pageYOffset;
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - vh);
      
      // Standard parallax movement with enhanced smoothness
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        const rect = el.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        const translate = -centerOffset * speed * 0.3;
        
        // Add slight rotation for more dynamic effect
        const rotate = centerOffset * speed * 0.02;
        el.style.transform = `translateY(${translate.toFixed(2)}px) rotateZ(${rotate.toFixed(2)}deg)`;
      });

      // Scale effect with pulsing
      scaleEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-scale')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        const scale = 1 + (progress * intensity);
        const pulse = 1 + Math.sin(scrollY * 0.01) * 0.02; // Subtle pulse
        el.style.transform = `scale(${(scale * pulse).toFixed(3)})`;
      });

      // Enhanced rotation with axis variation
      rotateEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-rotate')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = (vh - rect.top) / vh;
        const rotationZ = progress * speed * 360;
        const rotationX = Math.sin(progress * Math.PI) * 5; // Subtle X rotation
        el.style.transform = `rotateZ(${rotationZ.toFixed(2)}deg) rotateX(${rotationX.toFixed(2)}deg)`;
      });

      // Dynamic fade with color shifting
      fadeEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-fade')) || 0.5;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        const opacity = Math.max(0.1, 1 - (progress * intensity));
        
        // Add subtle color tint based on scroll
        const hue = progress * 60; // Shift from blue to cyan
        el.style.opacity = opacity.toFixed(2);
        el.style.filter = `hue-rotate(${hue.toFixed(0)}deg)`;
      });

      // Morphing effects
      morphEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-morph')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        
        const skewX = Math.sin(progress * Math.PI) * intensity * 5;
        const skewY = Math.cos(progress * Math.PI) * intensity * 2;
        const scaleX = 1 + Math.sin(progress * Math.PI * 2) * intensity * 0.1;
        const scaleY = 1 + Math.cos(progress * Math.PI * 2) * intensity * 0.1;
        
        el.style.transform = `skewX(${skewX.toFixed(2)}deg) skewY(${skewY.toFixed(2)}deg) scaleX(${scaleX.toFixed(3)}) scaleY(${scaleY.toFixed(3)})`;
      });

      // Glitch effects
      glitchEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-glitch')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        
        if (Math.random() < intensity * progress * 0.1) {
          const glitchX = (Math.random() - 0.5) * 10 * intensity;
          const glitchY = (Math.random() - 0.5) * 5 * intensity;
          const hue = Math.random() * 360;
          
          el.style.transform = `translate(${glitchX.toFixed(2)}px, ${glitchY.toFixed(2)}px)`;
          el.style.filter = `hue-rotate(${hue.toFixed(0)}deg) saturate(${(1 + intensity).toFixed(2)})`;
          
          // Reset after short time
          setTimeout(() => {
            el.style.transform = 'translate(0px, 0px)';
            el.style.filter = 'none';
          }, 50);
        }
      });

      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  // Initial position
  onScroll();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    // Clean up will-change
    [...parallaxEls, ...scaleEls, ...rotateEls, ...fadeEls, ...morphEls, ...glitchEls].forEach((el) => {
      el.style.willChange = 'auto';
    });
  };
}

// Particle system for scroll effects
export function initParticleSystem() {
  if (typeof window === 'undefined') return () => {};

  const particleContainers = document.querySelectorAll('.particle-bg');
  if (particleContainers.length === 0) return () => {};

  const particles = [];
  const maxParticles = 50;

  function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'scroll-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.8), transparent);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    `;
    
    container.appendChild(particle);
    
    return {
      element: particle,
      x: Math.random() * container.offsetWidth,
      y: Math.random() * container.offsetHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1,
      decay: Math.random() * 0.01 + 0.005
    };
  }

  particleContainers.forEach(container => {
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    
    // Create initial particles
    for (let i = 0; i < Math.min(maxParticles, 20); i++) {
      particles.push(createParticle(container));
    }
  });

  let animationId;
  function updateParticles() {
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;
      
      // Update position and opacity
      particle.element.style.left = particle.x + 'px';
      particle.element.style.top = particle.y + 'px';
      particle.element.style.opacity = particle.life;
      
      // Remove dead particles
      if (particle.life <= 0) {
        particle.element.remove();
        particles.splice(index, 1);
      }
    });
    
    // Add new particles occasionally
    if (particles.length < maxParticles && Math.random() < 0.1) {
      particleContainers.forEach(container => {
        particles.push(createParticle(container));
      });
    }
    
    animationId = requestAnimationFrame(updateParticles);
  }
  
  updateParticles();
  
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    particles.forEach(particle => particle.element.remove());
  };
}

// Advanced scroll-triggered animations
export function initScrollTrigger() {
  if (typeof window === 'undefined') return () => {};

  let lastScrollY = 0;
  let scrollVelocity = 0;
  
  const onScroll = () => {
    const currentScrollY = window.pageYOffset;
    scrollVelocity = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;
    
    // Dynamic background effects based on scroll velocity
    const intensity = Math.min(Math.abs(scrollVelocity) / 20, 1);
    document.body.style.filter = `blur(${(intensity * 0.5).toFixed(2)}px) brightness(${(1 + intensity * 0.1).toFixed(2)})`;
    
    // Reset blur after scrolling stops
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      document.body.style.filter = 'none';
    }, 150);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', onScroll);
    document.body.style.filter = 'none';
  };
}

// Helper to mark nodes programmatically
export function markReveal(node) {
  if (!node) return;
  node.classList.add('reveal-paper');
}
