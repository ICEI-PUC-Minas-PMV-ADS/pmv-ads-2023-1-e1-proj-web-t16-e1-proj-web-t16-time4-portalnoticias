const chk = document.getElementById('chk');
const navbar = document.getElementById('navbar');
const search = document.getElementById('search');
const loginFields = document.querySelectorAll('.login-field');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  navbar.classList.toggle('dark');
  search.classList.toggle('dark');
  
  const cardNewsElements = document.querySelectorAll('.card-news');
  cardNewsElements.forEach((element) => {
    element.classList.toggle('dark');
  });

  loginFields.forEach((field) => {
    field.classList.toggle('dark');
  });

  const isDarkMode = document.body.classList.contains('dark');
  localStorage.setItem('dark', isDarkMode ? 'true' : 'false'); // Salva a preferência do tema no armazenamento local
});

document.addEventListener('DOMContentLoaded', function () {
  const isDarkMode = localStorage.getItem('dark');
  
  if (isDarkMode === 'true') {
    document.body.classList.add('dark'); // Aplica o tema escuro se a preferência for verdadeira
    chk.checked = true; // Ativa o checkbox do tema escuro
    navbar.classList.toggle('dark');
    search.classList.toggle('dark');
    
    cardNewsElements.forEach((element) => {
      element.classList.toggle('dark');
    });
  
    loginFields.forEach((field) => {
      field.classList.toggle('dark');
    });
  }
});


