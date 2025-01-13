// JavaScript para alternar a exibição dos detalhes da jornada
document.getElementById('toggleJornada').addEventListener('click', function() {
  const details = document.getElementById('jornadaDetails');
  if (details.style.display === "none") {
      details.style.display = "block";
      this.textContent = "Ocultar Detalhes";
  } else {
      details.style.display = "none";
      this.textContent = "Mostrar Detalhes";
  }
});

// Função para adicionar o efeito de movimento nos cards
function setupCardClickEffect() {
  $('.card').on('click', function() {
      $(this).toggleClass('clicked');
  });
}

// Função para rolagem suave ao clicar na seta
function setupScrollDown() {
  const scrollDownButtons = document.querySelectorAll('.scroll-down');
  scrollDownButtons.forEach(button => {
      button.addEventListener('click', function () {
          const targetId = this.getAttribute('data-target'); // Obter o ID do alvo da seta
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

// Função para atualizar a bolinha ativa ao rolar a página
function updateActiveDot() {
  const sections = document.querySelectorAll('section');
  const dots = document.querySelectorAll('.navigation-dots .dot');

  let index = sections.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Inicializa os eventos
function init() {
  setupCardClickEffect();
  setupScrollDown();
  
  // Atualiza a bolinha ativa ao rolar a página
  window.addEventListener('scroll', updateActiveDot);

  const sections = document.querySelectorAll('section');
  const dots = document.querySelectorAll('.navigation-dots .dot');

  // Rolagem suave ao clicar em uma bolinha
  dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
          sections[idx].scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Atualiza ao carregar a página
  updateActiveDot();
}

// Chamando a função init quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);


