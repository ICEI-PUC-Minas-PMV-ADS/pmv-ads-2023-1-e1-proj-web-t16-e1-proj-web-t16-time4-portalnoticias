const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obter os inputs do formulário.
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Cria um novo usuário
  const newUser = {
    name,
    email,
    password,
  };

  // Enviar uma solicitação POST para adicionar um novo objeto de notícia ao arquivo db.json
  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((_data) => {
      alert("Usuário criado com sucesso 👍");
      form.reset();
    })
    .catch((_error) => {
      alert("Erro ao criar o usuário ⚠");
    });
});
