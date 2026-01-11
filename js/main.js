import "./styles.css";

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

const dots = document.querySelectorAll('.dot');
const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.credit-card');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    
    const cardWidth = cards[0].offsetWidth + 10;
    cardsContainer.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  });
});

cardsContainer.addEventListener('scroll', () => {
  const scrollLeft = cardsContainer.scrollLeft;
  const cardWidth = cards[0].offsetWidth + 10;
  const activeIndex = Math.round(scrollLeft / cardWidth);
  
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', () => {
  downloadBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    downloadBtn.style.transform = 'scale(1)';
  }, 100);
  
  console.log('Download initiated');
});

const creditCards = document.querySelectorAll('.credit-card');

creditCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 8px 30px rgba(212, 197, 240, 0.3)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});

const transactionItems = document.querySelectorAll('.transaction-item');

transactionItems.forEach(item => {
  item.addEventListener('click', () => {
    console.log('Transaction clicked:', item.querySelector('.transaction-name').textContent);
  });
});

const infoCards = document.querySelectorAll('.info-card');

infoCards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transform = 'translateY(-3px)';
    }, 100);
  });
});

const navIcons = document.querySelectorAll('.nav-icon');

navIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    navIcons.forEach(i => i.style.color = '#8b92a8');
    this.style.color = '#d4c5f0';
  });
});

const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('active');
});

signupBtn.addEventListener('click', () => {
  signupModal.classList.add('active');
});

closeLogin.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

closeSignup.addEventListener('click', () => {
  signupModal.classList.remove('active');
});

switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.classList.remove('active');
  signupModal.classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupModal.classList.remove('active');
  loginModal.classList.add('active');
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove('active');
  }
  if (e.target === signupModal) {
    signupModal.classList.remove('active');
  }
});

document.querySelector('.login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Login submitted');
  loginModal.classList.remove('active');
});

document.querySelector('.signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Sign up submitted');
  signupModal.classList.remove('active');
});