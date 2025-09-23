document.addEventListener('DOMContentLoaded', () => {
  // Efeito de rolagem suave para links de navegação
  const links = document.querySelectorAll('nav a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  // Efeito de fade-in ao carregar a página
  const sections = document.querySelectorAll('.item');
  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});