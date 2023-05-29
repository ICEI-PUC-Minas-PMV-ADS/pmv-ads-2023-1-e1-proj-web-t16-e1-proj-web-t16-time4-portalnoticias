document.addEventListener("DOMContentLoaded", function () {
  let token = localStorage.getItem('token'); // Pega o token no local storage
  let username = localStorage.getItem('username'); // Pega o username no local storage
  let novaNoticiaButton = document.getElementById('novaNoticiaButton');
  let logoutButton = document.getElementById('logoutButton');
  let usernameElement = document.getElementById('username');

  if (novaNoticiaButton) {
    // Página com o botão "Nova Nótica"
    if (token) {
      // Usuário logado
      novaNoticiaButton.style.display = 'block'; // Mostra o botão "Nova notícia"
      logoutButton.style.display = 'block'; // Mostra o botão logout
      loginButton.style.display = 'none'; // Não mostra o botão login
      usernameElement.textContent = 'Olá ' + username; // Mostra nome do usuário
    } else {
      // Usuário não logado
      novaNoticiaButton.style.display = 'none';
      logoutButton.style.display = 'none';
      loginButton.style.display = 'block';
      usernameElement.textContent = '';
    }
  } else {
    // Página sem o botão "Nova Nótica"
    if (token) {
      // Usuário logado
      logoutButton.style.display = 'block';
      usernameElement.textContent = 'Olá ' + username;
    } else {
      // Usuário não logado
      logoutButton.style.display = 'none';
      usernameElement.textContent = '';
    }
  }

  // Butão Logout
  logoutButton.addEventListener('click', function () {
    localStorage.removeItem('token'); // Remove o token do local storage
    localStorage.removeItem('username'); // Remove username do local storage
    localStorage.removeItem('id'); // Remove id do local storage
    window.location.href = 'index.html'; // Retorna a Home page
  });
});
