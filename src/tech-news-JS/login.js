const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the input values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new news object
  const user = {
    email,
    password,
  };

  // Send a POST request to add the new news object to the db.json file
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
      window.location.href = "./index.html";
    })
    .catch((_error) => {
      alert("Email ou senha incorreta ⚠");
    });
});
