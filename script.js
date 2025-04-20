document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling para links de âncora
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

