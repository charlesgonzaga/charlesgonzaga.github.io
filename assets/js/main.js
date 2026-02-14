document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Efeito de Digitação do Terminal
    const terminalBody = document.querySelector('.terminal-body');
    const heroContent = document.querySelector('.profile-intro');

    const lines = [
        "> INITIALIZING CHARLES_GONZAGA_SYSTEM.EXE...",
        "> ACCESSING CORE_ARCHITECT_MODULE...",
        "> STATUS: AI RESEARCH & DEVELOPMENT READY",
        "> LOCATION: SANTA CATARINA, BRAZIL",
        "> WELCOME, USER."
    ];

    let currentLine = 0;
    let currentChar = 0;

    function typeLine() {
        if (currentLine < lines.length) {
            if (currentChar < lines[currentLine].length) {
                terminalBody.innerHTML += lines[currentLine][currentChar];
                currentChar++;
                setTimeout(typeLine, 30);
            } else {
                terminalBody.innerHTML += "<br>";
                currentLine++;
                currentChar = 0;
                setTimeout(typeLine, 500);
            }
        } else {
            // Revelar o restante da hero section
            gsap.to(heroContent, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    }

    setTimeout(typeLine, 1000);

    // Fallback de visibilidade para o conteúdo do herói (7 segundos)
    setTimeout(() => {
        if (heroContent.style.opacity === "0" || heroContent.style.opacity === "") {
            gsap.to(heroContent, { opacity: 1, y: 0, duration: 1 });
        }
    }, 7000);

    // Animações de Scroll mais robustas
    const animateElements = document.querySelectorAll('.section-title, .glass, .timeline-item, .skill-tag, .cert-card');

    animateElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    // Efeito Hover 3D nos cards (opcional, apenas para desktop)
    const cards = document.querySelectorAll('.glass');
    if (window.innerWidth > 1024) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });
    }
});