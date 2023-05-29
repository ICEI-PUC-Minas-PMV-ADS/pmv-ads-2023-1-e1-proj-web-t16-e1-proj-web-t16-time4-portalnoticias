const form = document.getElementById("add-form");
let id = localStorage.getItem("id")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const url = document.getElementById("link").value;

  const newNews = {
    title: title,
    url: url,
    image: "https://source.unsplash.com/random/?technology",
    createdAt: new Date().toISOString(),
    userId: id
  };

  fetch("http://localhost:3000/600/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + `${localStorage.getItem("token")}`
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
      Toastify({
        text: "Notícia adicionada com sucesso 👍",
        duration: 3000,
      }).showToast();
      form.reset();
    })
    .catch((_error) => {
      Toastify({
        text: "Erro ao adicionar notícia ⚠",
        duration: 3000,
      }).showToast();
    });
});
