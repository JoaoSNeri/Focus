// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

// carrosel
const carouselSlide = document.querySelector('.carousel-slide');
const members = document.querySelectorAll('.member');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalMembers = members.length;
let membersToShow = getMembersToShow(); // Função que ajusta automaticamente o número de membros a serem mostrados

// Função para mover o carrossel
function moveCarousel() {
  const memberWidth = carouselSlide.clientWidth / membersToShow; // Tamanho de cada membro
  carouselSlide.style.transform = 'translateX(' + (-memberWidth * currentIndex) + 'px)';
}

// Ajuste dinâmico de membros conforme o tamanho da tela
function getMembersToShow() {
  if (window.innerWidth <= 768) {
    return 1; // No celular, um membro por vez
  } else if (window.innerWidth <= 1200) {
    return 2; // Em tablets, dois membros por vez
  } else {
    return 3; // No desktop, três membros por vez
  }
}

// Evento para o botão "Next"
nextButton.addEventListener('click', () => {
  if (currentIndex < totalMembers - membersToShow) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta ao início se ultrapassar o limite
  }
  moveCarousel();
});

// Evento para o botão "Prev"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalMembers - membersToShow; // Vai para o final se estiver no início
  }
  moveCarousel();
});

// Atualiza a quantidade de membros mostrados quando a tela é redimensionada
window.addEventListener('resize', () => {
  membersToShow = getMembersToShow();
  moveCarousel(); // Ajusta o carrossel conforme a nova configuração
});

// Configuração inicial
moveCarousel();s