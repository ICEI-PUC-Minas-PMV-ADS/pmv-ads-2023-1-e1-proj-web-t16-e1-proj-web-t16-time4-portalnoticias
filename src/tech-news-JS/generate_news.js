const form = document.getElementById("add-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the input values from the form
  const title = document.getElementById("title").value;
  const url = document.getElementById("link").value;

  // Create a new news object
  const newNews = {
    title: title,
    url: url,
    image: "https://source.unsplash.com/random/?technology",
    createdAt: new Date().toISOString(),
    userId: 1 // TODO localStorage.getItem("user_id")
  };

  // Send a POST request to add the new news object to the db.json file
  fetch("http://localhost:3000/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbSIsImlhdCI6MTY4NDIxMjc5MCwiZXhwIjoxNjg0MjE2MzkwLCJzdWIiOiIxIn0.IqVhzUKGno1Uj718U8mTqO8hUSdcYeaoBeLZLW7e634" // localStorage.getItem("token")
    },
    body: JSON.stringify(newNews),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((_data) => {
      alert("Notícia adicionada com sucesso 👍");
      form.reset();
    })
    .catch((_error) => {
      alert("Erro ao adicionar notícia ⚠");
    });
});
