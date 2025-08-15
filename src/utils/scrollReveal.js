// Lightweight scroll reveal initializer for ".reveal-paper" elements
// Uses IntersectionObserver to add the "is-visible" class when in view

export function initScrollReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.1 } = {}) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('is-visible');

        // If this is a stagger container, assign delays to children
        if (el.classList.contains('reveal-stagger')) {
          const children = Array.from(el.children);
          children.forEach((child, i) => {
            child.style.animationDelay = `${i * 120}ms`;
          });
        }

        // Special handling for different reveal types
        if (el.classList.contains('reveal-cascade')) {
          const items = el.querySelectorAll('.cascade-item');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, i * 150);
          });
        }

        // Unobserve once revealed to avoid retriggering
        io.unobserve(el);
      }
    });
  }, { root: null, rootMargin, threshold });

  const selectors = [
    '.reveal-paper', 
    '.reveal-up', 
    '.reveal-right', 
    '.reveal-stagger',
    '.reveal-slide-bottom',
    '.reveal-slide-left', 
    '.reveal-slide-right',
    '.reveal-zoom-rotate',
    '.reveal-cascade'
  ];
  const nodes = document.querySelectorAll(selectors.join(', '));
  nodes.forEach((n) => io.observe(n));

  // Return cleanup
  return () => io.disconnect();
}

// Enhanced parallax with multiple effects
export function initParallax() {
  if (typeof window === 'undefined') return () => {};
  
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  const scaleEls = Array.from(document.querySelectorAll('[data-scale]'));
  const rotateEls = Array.from(document.querySelectorAll('[data-rotate]'));
  const fadeEls = Array.from(document.querySelectorAll('[data-fade]'));
  
  if (parallaxEls.length === 0 && scaleEls.length === 0 && rotateEls.length === 0 && fadeEls.length === 0) {
    return () => {};
  }

  [...parallaxEls, ...scaleEls, ...rotateEls, ...fadeEls].forEach((el) => {
    el.style.willChange = 'transform, opacity';
  });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      const scrollY = window.pageYOffset;
      
      // Standard parallax movement
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        const rect = el.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - vh / 2;
        const translate = -centerOffset * speed * 0.3;
        el.style.transform = `translateY(${translate.toFixed(2)}px)`;
      });

      // Scale effect based on scroll position
      scaleEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-scale')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        const scale = 1 + (progress * intensity);
        el.style.transform = `scale(${scale.toFixed(3)})`;
      });

      // Rotation effect
      rotateEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-rotate')) || 0.1;
        const rect = el.getBoundingClientRect();
        const progress = (vh - rect.top) / vh;
        const rotation = progress * speed * 360;
        el.style.transform = `rotate(${rotation.toFixed(2)}deg)`;
      });

      // Fade effect
      fadeEls.forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-fade')) || 0.5;
        const rect = el.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));
        const opacity = Math.max(0.1, 1 - (progress * intensity));
        el.style.opacity = opacity.toFixed(2);
      });

      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  // initial position
  onScroll();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

// Helper to mark nodes programmatically
export function markReveal(node) {
  if (!node) return;
  node.classList.add('reveal-paper');
}
