document.addEventListener('DOMContentLoaded', () => {
  // Selecionar os elementos
  const toggleButton = document.getElementById('toggleJornada');
  const jornadaDetails = document.getElementById('jornadaDetails');

  if (toggleButton && jornadaDetails) {
      // Configurar o estado inicial
      jornadaDetails.style.display = 'none'; // Esconde os detalhes inicialmente
      toggleButton.textContent = 'Mostrar Detalhes'; // Define o texto inicial

      // Adicionar evento de clique
      toggleButton.addEventListener('click', function () {
          if (jornadaDetails.style.display === 'none') {
              jornadaDetails.style.display = 'block';
              this.textContent = 'Ocultar Detalhes';
          } else {
              jornadaDetails.style.display = 'none';
              this.textContent = 'Mostrar Detalhes';
          }
      });
  }

  // Efeito de clique nos cards
  function setupCardClickEffect() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          card.addEventListener('click', () => {
              card.classList.toggle('clicked');
          });
      });
  }

  // Rolagem suave ao clicar na seta
  function setupScrollDown() {
      const scrollDownButtons = document.querySelectorAll('.scroll-down');
      scrollDownButtons.forEach(button => {
          button.addEventListener('click', function () {
              const targetId = this.getAttribute('data-target');
              const targetSection = document.querySelector(`#${targetId}`);
              if (targetSection) {
                  window.scrollTo({
                      top: targetSection.offsetTop,
                      behavior: 'smooth'
                  });
              }
          });
      });
  }

  // Rolagem da página com ScrollReveal
  ScrollReveal().reveal('.reveal', {
      duration: 1000,  // Duração da animação em milissegundos
      origin: 'bottom', // Origem da animação
      distance: '50px', // Distância que o elemento vai se mover
      easing: 'ease-in-out', // Tipo de easing da animação
  });

  // Atualizar bolinha ativa ao rolar a página
  function updateActiveDot() {
      const sections = document.querySelectorAll('section');
      const dots = document.querySelectorAll('.navigation-dots .dot');

      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
  }

  // Inicializar eventos
  function init() {
      setupCardClickEffect();
      setupScrollDown();

      // Atualizar bolinha ativa ao rolar a página
      window.addEventListener('scroll', updateActiveDot);

      const sections = document.querySelectorAll('section');
      const dots = document.querySelectorAll('.navigation-dots .dot');

      // Rolagem suave ao clicar em uma bolinha
      dots.forEach((dot, idx) => {
          dot.addEventListener('click', () => {
              sections[idx].scrollIntoView({ behavior: 'smooth' });
          });
      });

      // Atualizar ao carregar a página
      updateActiveDot();
  }

  init();

  // Partículas JS
  particlesJS('particles-js', {
      particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#9b59b6' },
          shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
              polygon: { nb_sides: 5 }
          },
          opacity: {
              value: 0.5,
              anim: { enable: false }
          },
          size: {
              value: 5,
              random: true,
              anim: { enable: false }
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: '#9b59b6',
              opacity: 0.4,
              width: 1
          },
          move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              out_mode: 'out',
              bounce: false
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
          },
          modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
          }
      },
      retina_detect: true
  });
});
