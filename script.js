/* ==========================================================================
   BOXING WITH Z — INTERACTIVE SCRIPTS
   - Mobile Nav Toggle
   - IntersectionObserver reveal-on-scroll (single run fade/slide)
   - Video Modal Embed Player
   - Dynamic WhatsApp Link Helper
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-active');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Scroll-triggered animations (Runs ONCE cleanly)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve to prevent repeat animations on scroll back up
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Video Modal Logic for YouTube/Vimeo Embeds
  const videoModal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const videoCards = document.querySelectorAll('[data-video-id]');

  function openVideoModal(youtubeId) {
    if (!videoModal || !modalIframe) return;
    // When running directly from local file system (file://), YouTube restricts embedded playback with Error 153.
    // We open the video in YouTube directly or embed cleanly depending on environment.
    if (window.location.protocol === 'file:') {
      window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
      return;
    }
    modalIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1&enablejsapi=1&rel=0&vq=hd1080&controls=1`;
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal || !modalIframe) return;
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      if (videoId) {
        openVideoModal(videoId);
      }
    });

    // Keyboard support for video cards
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const videoId = card.getAttribute('data-video-id');
        if (videoId) {
          openVideoModal(videoId);
        }
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('is-open')) {
      closeVideoModal();
    }
  });

  // 4. WhatsApp Package Selection Helper
  const packageButtons = document.querySelectorAll('[data-package]');
  const baseWaUrl = 'https://wa.me/6597318538';

  packageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageName = btn.getAttribute('data-package');
      if (packageName) {
        const text = encodeURIComponent(`Hi Zi En, I'm interested in booking the ${packageName} session for 1-on-1 boxing coaching in Singapore. What slots are available?`);
        window.open(`${baseWaUrl}?text=${text}`, '_blank');
      }
    });
  });
});
