const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    email,
    password,
  };

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
      // TODO conversar com o cumpade oshito sobre o local storage.
      form.reset();
      window.location.href = "index.html";
    })
    .catch((_error) => {
      alert("Email ou senha incorreta ⚠");
    });
});
