// Animações e interações para o site do curso INOB

document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const scrollReveal = () => {
        const triggerBottom = window.innerHeight * 0.92;
        scrollElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('show');
            } else {
                el.classList.remove('show');
            }
        });
    };
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // inicializa ao carregar
    // Animação de entrada dos elementos
    const fadeElements = document.querySelectorAll('.header, .hero, .vantagens, .cta');
    fadeElements.forEach((el, i) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 0.8s';
            el.style.opacity = 1;
        }, 300 + i * 200);
    });

    // Animação de destaque nas vantagens ao rolar
    const vantagens = document.querySelectorAll('.vantagens li');
    vantagens.forEach((li, idx) => {
        li.style.opacity = 0;
        li.style.transform = 'translateY(30px)';
        setTimeout(() => {
            li.style.transition = 'opacity 0.7s, transform 0.7s';
            li.style.opacity = 1;
            li.style.transform = 'translateY(0)';
        }, 1200 + idx * 180);
    });

    // Botão WhatsApp com animação e ação
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.whatsapp.com/', '_blank');
        });
        whatsappBtn.addEventListener('mouseenter', function() {
            whatsappBtn.style.boxShadow = '0 0 24px 4px #25d36688';
        });
        whatsappBtn.addEventListener('mouseleave', function() {
            whatsappBtn.style.boxShadow = '';
        });
    }

    // Efeito parallax simples na imagem do curso
    const cursoImg = document.querySelector('.curso-img');
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 600 && cursoImg) {
            let offset = window.scrollY * 0.15;
            cursoImg.style.transform = `translateY(${offset}px) scale(1.05)`;
        }
    });
});
