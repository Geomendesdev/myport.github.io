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

    // Animações GSAP que serão disparadas ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // A seção está visível, então disparamos as animações com GSAP
                
                // Anima as palavras do título em sequência
                gsap.from("h1 span", {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1, // Atraso de 0.1s entre cada palavra
                    ease: "power2.out"
                });

                // Anima o parágrafo logo depois do título
                gsap.from("p", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    delay: 0.8, // Começa depois da animação do título
                    ease: "power2.out"
                });

                // Animação para os cubos, com a propriedade stagger
                gsap.from(".caixa", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: 1.5, // Começa depois do parágrafo
                    stagger: 0.2,
                    ease: "power2.out"
                });

                // Para evitar que a animação se repita ao rolar para cima e para baixo
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    const sections = document.querySelectorAll('.item');
    sections.forEach((section) => {
        observer.observe(section);
    });

});