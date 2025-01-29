// JavaScript para alternar entre inglês e português
const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('click', () => {
    const isEnglish = languageToggle.textContent === 'EN';
    
    if (isEnglish) {
        languageToggle.textContent = 'PT'; // Muda o texto do botão para PT
        switchToPortuguese();
    } else {
        languageToggle.textContent = 'EN'; // Muda o texto do botão para EN
        switchToEnglish();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Selecionar os elementos
    const toggleButton = document.getElementById('toggleJornada');
    const jornadaDetails = document.getElementById('jornadaDetails');
    const languageToggle = document.getElementById('language-toggle'); // O checkbox que alterna o idioma

    // Configurar o estado inicial
    if (toggleButton && jornadaDetails) {
        jornadaDetails.style.display = 'none'; // Esconde os detalhes inicialmente
        toggleButton.textContent = 'Mostrar Detalhes'; // Texto inicial em português

        // Adicionar evento de clique
        toggleButton.addEventListener('click', function () {
            if (jornadaDetails.style.display === 'none') {
                jornadaDetails.style.display = 'block';
                this.textContent = languageToggle.checked ? 'Hide Details' : 'Ocultar Detalhes'; // Atualiza o texto com base no idioma
            } else {
                jornadaDetails.style.display = 'none';
                this.textContent = languageToggle.checked ? 'Show Details' : 'Mostrar Detalhes'; // Atualiza o texto com base no idioma
            }
        });
    }

    // Lógica para alternar idiomas
    languageToggle.addEventListener('change', () => {
        const isEnglish = languageToggle.checked; // Verifica se o idioma está definido como inglês
        if (isEnglish) {
            toggleButton.textContent = jornadaDetails.style.display === 'block' ? 'Hide Details' : 'Show Details'; // Atualiza o texto do botão
        } else {
            toggleButton.textContent = jornadaDetails.style.display === 'block' ? 'Ocultar Detalhes' : 'Mostrar Detalhes'; // Atualiza o texto do botão
        }
    });
});


function switchToPortuguese() {
    // Tradução para Português
    document.getElementById('typed-text').textContent = 'Olá, eu sou Jaqueline!'; // Título da seção Home
    document.querySelector('.paragrafo').textContent = 'Desenvolvedora de Software Júnior e Mestre em Gestão.'; // Parágrafo adicionado
    document.getElementById('my-journey-title').textContent = 'Minha Jornada';
    document.getElementById('my-journey-text').innerHTML = `
        Estou em uma jornada emocionante no mundo do Desenvolvimento Web, onde minha paixão por tecnologia se transforma em habilidades práticas. Atualmente, estou aprimorando meu conhecimento em HTML, CSS e JavaScript para criar experiências digitais que sejam funcionais e atraentes.
        <br><br>
        Com 9 anos de experiência em gestão no ambiente empresarial, desenvolvi uma forte capacidade de lidar com desafios e trabalhar em equipe. Essa experiência me ajuda a trazer uma perspectiva única para o desenvolvimento de soluções inovadoras. Convido você a explorar meu portfólio e acompanhar meu crescimento nesta nova fase, onde tecnologia e criatividade se encontram.
    `;

    document.getElementById('projects-title').textContent = 'Projetos';
    document.getElementById('projects-description').textContent = 'Confira alguns dos projetos em que trabalhei:';    

    // Traduções dos cards
    document.getElementById('project1-title').textContent = 'Clínica Renovar';
    document.getElementById('project1-description').textContent = 'Projeto de site. Tecnologias utilizadas incluem HTML5, CSS3, Bootstrap e JavaScript.';
    document.getElementById('project1-link').textContent = 'Ver Projeto';

    document.getElementById('project2-title').textContent = 'Conversor';
    document.getElementById('project2-description').textContent = 'Este é um site para conversão de moedas, desenvolvido com HTML, CSS, JavaScript e ASP.NET Core. Ele permite converter valores entre Real (BRL), Dólar (USD) e Euro (EUR) com taxas de câmbio pré-definidas.';
    document.getElementById('project2-link').textContent = 'Ver Projeto';

    document.getElementById('project3-title').textContent = 'Registo-App';
    document.getElementById('project3-description').textContent = 'Este é um projeto em C# para gerenciar o registo de clientes. Linguagem: C# Framework: ASP.NET Core.';
    document.getElementById('project3-link').textContent = 'Ver Projeto';

    // Mudança do botão "About Me" para "Sobre Mim"
    document.getElementById('about-me-button').textContent = 'Sobre Mim';

    // Seção Habilidades
    document.getElementById('skills-title').textContent = 'Habilidades';
    document.getElementById('skills-description').textContent = 'Tecnologias e ferramentas que uso:';

    // Tradução da seção Header
    document.querySelector('.navbar-brand').textContent = 'Portfólio';
    document.querySelector('a[data-lang="about"]').textContent = 'Sobre Mim';
    document.querySelector('a[data-lang="projects"]').textContent = 'Projetos';
    document.querySelector('a[data-lang="skills"]').textContent = 'Habilidades';
    document.querySelector('a[data-lang="contact"]').textContent = 'Contato';

    // Seção de Contato
    document.getElementById('contact-title').textContent = 'Contato';
    document.getElementById('contact-description').textContent = 'Entre em contato comigo para mais informações!';
    document.getElementById('name-label').textContent = 'Nome';
    document.getElementById('inputName').placeholder = 'Seu Nome';
    document.getElementById('email-label').textContent = 'Email';
    document.getElementById('inputEmail').placeholder = 'Seu Email';
    document.getElementById('message-label').textContent = 'Mensagem';
    document.getElementById('inputMessage').placeholder = 'Sua Mensagem';
    document.getElementById('submit-button').textContent = 'Enviar';
    


    // Seção de Rodapé
    document.getElementById('footer-social').textContent = 'Siga-me nas redes sociais:';
    document.getElementById('footer-rights').textContent = '© 2025 Jaqueline Rabelo. Todos os direitos reservados.';

    // Seção do Perfil
    document.querySelector('.card-title').textContent = 'Minha Jornada'; // Título do perfil
    document.getElementById('name-label').textContent = 'Nome:'; // Atualiza o rótulo do nome
    document.querySelector('.info-text p:nth-child(2)').innerHTML = '<strong>Grau Atual:</strong> Estudante de Análise e Desenvolvimento de Sistemas.'; // Atualiza grau atual
    document.querySelector('.info-text p:nth-child(3)').innerHTML = '<strong>Educação:</strong> Mestre em Gestão e Graduada em Administração de Empresas.'; // Atualiza educação
    document.querySelector('.card-title2').textContent = 'Perfil';
}

function switchToEnglish() {
    // Tradução para Inglês
    document.getElementById('typed-text').textContent = 'Hi, I\'m Jaqueline!'
; // Título da seção Home
    document.querySelector('.paragrafo').textContent = 'Software Developer and Master in Management.'; // Parágrafo adicionado
    document.getElementById('my-journey-title').textContent = 'My Journey';
    document.getElementById('my-journey-text').innerHTML = `
        I am on an exciting journey in the world of Web Development, where my passion for technology transforms into practical skills. Currently, I am enhancing my knowledge in HTML, CSS, and JavaScript to create digital experiences that are both functional and appealing.
        <br><br>
        With 9 years of experience in management in the business environment, I have developed a strong ability to deal with challenges and work in a team. This background helps me bring a unique perspective to the development of innovative solutions. I invite you to explore my portfolio and follow my growth in this new phase, where technology and creativity meet.
        
    `;

    document.getElementById('projects-title').textContent = 'Projects';
    document.getElementById('projects-description').textContent = 'Check out some of the projects I have worked on:';
    
    // Traduções dos cards
    document.getElementById('project1-title').textContent = 'Clinic Renew';
    document.getElementById('project1-description').textContent = 'Website project. Technologies used include HTML5, CSS3, Bootstrap, and JavaScript.';
    document.getElementById('project1-link').textContent = 'View Project';

    document.getElementById('project2-title').textContent = 'converter';
    document.getElementById('project2-description').textContent = 'This is a currency conversion website developed with HTML, CSS, JavaScript, and ASP.NET Core. It allows users to convert values between Brazilian Real (BRL), US Dollar (USD), and Euro (EUR) using predefined exchange rates.';
    document.getElementById('project2-link').textContent = 'View Project';

    document.getElementById('project3-title').textContent = 'Registration-App';
    document.getElementById('project3-description').textContent = 'This is a C# project to manage customer registration. Language: C# Framework: ASP.NET Core.';
    document.getElementById('project3-link').textContent = 'View Project';

    // Mudança do botão "Sobre Mim" para "About Me"
    document.getElementById('about-me-button').textContent = 'About Me';
    document.getElementById('about-me-button').textContent = 'About Me';

    // Seção Habilidades
    document.getElementById('skills-title').textContent = 'Skills';
    document.getElementById('skills-description').textContent = 'The technologies and tools I use:';

    // Tradução da seção Header
    document.querySelector('.navbar-brand').textContent = 'Portfolio';
    document.querySelector('a[data-lang="about"]').textContent = 'About Me';
    document.querySelector('a[data-lang="projects"]').textContent = 'Projects';
    document.querySelector('a[data-lang="skills"]').textContent = 'Skills';
    document.querySelector('a[data-lang="contact"]').textContent = 'Contact';

    // Seção de Contato
    document.getElementById('contact-title').textContent = 'Contact';
    document.getElementById('contact-description').textContent = 'Get in touch with me for more information!';
    document.getElementById('name-label').textContent = 'Name';
    document.getElementById('inputName').placeholder = 'Your Name';
    document.getElementById('email-label').textContent = 'Email';
    document.getElementById('inputEmail').placeholder = 'Your Email';
    document.getElementById('message-label').textContent = 'Message';
    document.getElementById('inputMessage').placeholder = 'Your Message';
    document.getElementById('submit-button').textContent = 'Send';

    // Seção de Rodapé
    document.getElementById('footer-social').textContent = 'Follow me on social media:';
    document.getElementById('footer-rights').textContent = '© 2025 Jaqueline Rabelo. All rights reserved.'; 

    // Seção do Perfil
    document.querySelector('.card-title').textContent = 'My Journe'; // Título do perfil
    document.getElementById('name-label').textContent = 'Name:'; // Atualiza o rótulo do nome
    document.querySelector('.info-text p:nth-child(2)').innerHTML = '<strong>Current Degree:</strong> Student of Analysis and Development of Systems.'; // Atualiza grau atual
    document.querySelector('.info-text p:nth-child(3)').innerHTML = '<strong>Education:</strong> Master in Management and Graduate in Business Administration.'; // Atualiza educação
    document.querySelector('.card-title2').textContent = 'Profile'; 


}




// Seleciona os elementos necessários
const navbar = document.getElementById('navbar');
const toggler = document.getElementById('menu-toggler');
const navPrincipal = document.getElementById('nav-principal');

// Adiciona um evento ao botão do menu hambúrguer
toggler.addEventListener('click', () => {
    // Verifica se o menu está expandido
    if (navPrincipal.classList.contains('show')) {
        navbar.classList.remove('expanded'); // Remove a classe quando fecha
    } else {
        navbar.classList.add('expanded'); // Adiciona a classe quando abre
    }
});



document.addEventListener('DOMContentLoaded', () => {
  // Selecionar os elementos
  const toggleButton = document.getElementById('toggleJornada');
  const jornadaDetails = document.getElementById('jornadaDetails');

  if (toggleButton && jornadaDetails) {
      // Configurar o estado inicial
      jornadaDetails.style.display = 'none'; // Esconde os detalhes inicialmente
      toggleButton.textContent = 'Show Details'; // Define o texto inicial

      // Adicionar evento de clique
      toggleButton.addEventListener('click', function () {
          if (jornadaDetails.style.display === 'none') {
              jornadaDetails.style.display = 'block';
              this.textContent = 'Hide Details';
          } else {
              jornadaDetails.style.display = 'none';
              this.textContent = 'Show Details';
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

//cards com 3 acima de 992px
function updateProjectCardColumnsForLargeScreens() {
    const projectCards = document.querySelectorAll('#projetos .row > div');
    projectCards.forEach(card => {
        card.classList.remove('col-12', 'col-sm-6'); // Remove classes antigas
        card.classList.add('col-12', 'col-sm-6', 'col-lg-4'); // Adiciona novas classes
    });
}

// Chama a função para ajustar as colunas
updateProjectCardColumnsForLargeScreens();



/**/ 

