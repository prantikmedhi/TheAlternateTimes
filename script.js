document.addEventListener('DOMContentLoaded', () => {
  // Handle form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Chatbot functionality
let isChatbotOpen = false;

function toggleChatbot() {
  isChatbotOpen = !isChatbotOpen;
  const chatbotIcon = document.getElementById('chatbot-icon');

  if (isChatbotOpen) {
    const chatbotWindow = document.createElement('div');
    chatbotWindow.className = 'chatbot-window animate-fade-in';
    chatbotWindow.innerHTML = '<p>Chatbot functionality coming soon!</p>';
    chatbotIcon.appendChild(chatbotWindow);
  } else {
    const chatbotWindow = chatbotIcon.querySelector('.chatbot-window');
    if (chatbotWindow) {
      chatbotWindow.remove();
    }
  }
}

// Stop video when it ends
const video = document.querySelector('video');
video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.pause();
});
