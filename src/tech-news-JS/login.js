const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the input values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Cria novo usuário logado
  const user = {
    email,
    password,
  };

  // Envia um requerimento POST para adicionar um novo objeto ao arquivo db.json
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((_data) => {
      localStorage.setItem('token', _data.accessToken); // Guarda o token no local storage
      localStorage.setItem('username', _data.user.name); // Guarda o nome do usuário no local storage
      localStorage.setItem('id', _data.user.id); // Guarda o id do usuário no local storage
      form.reset();
      window.location.href = "index.html";
    })
    .catch((_error) => {
      Toastify({
        text: "Email ou senha incorreta ⚠",
        duration: 3000,
      }).showToast();
    });
});
