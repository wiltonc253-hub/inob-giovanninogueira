// Animação de contador para alunos e anos de experiência


function animarContador(elemento, valorFinal, duracao, prefixo = '', sufixo = '', barra = null) {
    let inicio = 0;
    const incremento = Math.ceil(valorFinal / (duracao / 16));
    const contador = setInterval(() => {
        inicio += incremento;
        if (inicio >= valorFinal) {
            inicio = valorFinal;
            clearInterval(contador);
        }
        elemento.textContent = prefixo + inicio + sufixo;
        if (barra) {
            let percent = Math.min(inicio / valorFinal, 1) * 100;
            barra.style.width = percent + '%';
        }
    }, 16);
}


document.addEventListener('DOMContentLoaded', function() {
    const alunos = document.getElementById('contador-alunos');
    const anos = document.getElementById('contador-anos');
    let alunosAnimado = false;
    let anosAnimado = false;
    const barraAlunos = document.getElementById('barra-preenchida-alunos');

    function startAlunos() {
        if (alunos && !alunosAnimado) {
            animarContador(alunos, 750, 1200, '', '', barraAlunos);
            setTimeout(() => {
                alunos.textContent = '+DE 750';
                if (barraAlunos) barraAlunos.style.width = '100%';
            }, 1300);
            alunosAnimado = true;
        }
    }
    function startAnos() {
        if (anos && !anosAnimado) {
            animarContador(anos, 10, 1000);
            anosAnimado = true;
        }
    }

    // Intersection Observer para disparar animação ao aparecer na tela
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === alunos) startAlunos();
                    if (entry.target === anos) startAnos();
                }
            });
        }, { threshold: 0.5 });
        if (alunos) observer.observe(alunos);
        if (anos) observer.observe(anos);
    } else {
        // Fallback: anima ao carregar
        startAlunos();
        startAnos();
    }
});
