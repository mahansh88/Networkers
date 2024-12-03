const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const links = sidebar.querySelectorAll('a'); // Select all links in the sidebar

// Toggle sidebar on hamburger click
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Close sidebar when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});


// Project Slider
// Project Slider

const swiper = new Swiper('.slider-wrapper', {
  loop: false,
  grabCursor: true,
  autoHeight: true,
  centeredSlides: true,
  observer: true,
  observeParents: true,
  spaceBetween: 20, // Default spacing
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 3, // Show 3 slides on mobile
      spaceBetween: 10, // Space between slides
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Scroll down animation
window.addEventListener('scroll', function() {
  const scrollWatcher = document.querySelector('.scroll-watcher');
  const scrollTop = window.scrollY; // Get the vertical scroll position
  const maxScroll = document.body.scrollHeight - window.innerHeight; // Max scroll value
  const scale = Math.min(1, scrollTop / maxScroll); // Calculate scale based on scroll position

  scrollWatcher.style.transform = `scale(${scale}, 1)`; // Update scale
});


// Pre loadi

window.onload = function() {
  const preloader = document.getElementById('preloader');
  preloader.style.animation = 'fadeOut 2s forwards';
  setTimeout(function() {
      preloader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
  }, 2000);
};

