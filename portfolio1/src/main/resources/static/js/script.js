//loading animation
window.addEventListener('load', () => {
	setTimeout(() => {
		const loader = document.querySelector('.loader-wrapper');
		const content = document.querySelector('.content');

		loader.style.opacity = '0';

		setTimeout(() => {
			loader.style.display = 'none';
			content.style.display = 'block'; // Show content
		}, 500); // after fade-out
	}, 2000); // show loader for 2 seconds
});

// Scrolled Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
  projectObserver.observe(card);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated');
      }
  });
}, observerOptions);

document.querySelectorAll('.timeline-content').forEach(item => {
  timelineObserver.observe(item);
});

const achievementObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
              entry.target.classList.add('animated');
          }, index * 200);
      }
  });
}, observerOptions);

document.querySelectorAll('.achievement-card').forEach(card => {
  achievementObserver.observe(card);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
      });
  });
});