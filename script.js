
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });







// Script para CONTAGEM NA VERSÃO EFICIENCIA COMPROVADA
  // Versão corrigida e testada do JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const metricSection = document.querySelector('.metrics-final');
  const metricNumbers = document.querySelectorAll('.metric-number');
  
  // Configurações da animação
  const animationDuration = 3000; // 3 segundos de duração
  const frameDuration = 16; // ~60fps
  
  function formatNumber(number) {
    return number.toLocaleString('pt-BR');
  }

  function animateNumber(element, target) {
    let start = null;
    const targetNumber = parseInt(target.replace(/\D/g, ''), 10);
    
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / animationDuration, 1);
      const currentValue = Math.floor(progress * targetNumber);
      
      element.textContent = formatNumber(currentValue);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = formatNumber(targetNumber); // Garante o valor final exato
      }
    }
    
    window.requestAnimationFrame(step);
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        metricNumbers.forEach(metric => {
          const target = metric.getAttribute('data-target');
          animateNumber(metric, target);
        });
        observer.unobserve(entry.target);
      }
    });
  }

  // Configura o Intersection Observer
  const observerOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
  if (metricSection) {
    observer.observe(metricSection);
  }

  // Fallback caso o Intersection Observer não funcione
  setTimeout(() => {
    if (metricNumbers[0] && metricNumbers[0].textContent === '0') {
      metricNumbers.forEach(metric => {
        const target = metric.getAttribute('data-target');
        animateNumber(metric, target);
      });
    }
  }, 1000);
});




 // Script para o menu hamburguer
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
      menuToggle.textContent = nav.classList.contains('nav-open') ? '✕' : '☰';
    });
  });








  // Adiciona classe 'active' ao item de menu correspondente à página atual
document.addEventListener('DOMContentLoaded', function() {
    // Remove a classe active de todos os links primeiro
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Obtém o caminho atual (considerando que pode ser index.html ou /)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Encontra o link correspondente e adiciona a classe active
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath || 
            (currentPath === '' && linkPath === 'index.html') ||
            (currentPath.endsWith('.html') && linkPath === currentPath)) {
            link.classList.add('active');
        }
    });

    // Para links externos (como Vagas) que abrem em nova aba
    document.querySelectorAll('.nav-link[target="_blank"]').forEach(link => {
        link.classList.remove('active');
    });
});

// Se for um SPA (Single Page Application), adicione este código também:
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.getAttribute('target') || this.getAttribute('target') !== '_blank') {
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});
















// hero empresa


