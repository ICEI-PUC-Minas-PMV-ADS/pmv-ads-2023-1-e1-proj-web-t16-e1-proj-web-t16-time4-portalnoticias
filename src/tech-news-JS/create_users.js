const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the input values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new news object
  const newUser = {
    name,
    email,
    password,
  };

  // Send a POST request to add the new news object to the db.json file
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
