document.addEventListener('DOMContentLoaded', function () {
  // Obter os dados para o campo de busca
  let searchInput = document.getElementById('search');
  let searchButton = document.getElementById('buttonSearch');

  let originalNewsItems = [];

  // Recuperar os itens de notícias e preencher a página
  fetch('http://localhost:3000/news/?_expand=user&_sort=createdAt&_order=desc')
    .then(response => response.json())
    .then(news => {
      originalNewsItems = news;
      populateNewsItems(news);
    })
    .catch(error => {
      console.error(error);
    });

  // Adicionar um listener de evento ao botão de busca
  searchButton.addEventListener('click', performSearch);

  // Realizar pesquisa pela tecla enter
  searchInput.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {
      performSearch();
    }
  });

  function performSearch() {
    let query = searchInput.value.trim().toLowerCase();

    // Limpar resultados da busca anterior
    let searchResults = document.querySelector('.cards');
    searchResults.innerHTML = '';

    // Perform search logic here
    let matchingNewsItems = originalNewsItems.filter(function (newsItem) {
      let title = newsItem.title.toLowerCase();
      let sharedBy = newsItem.user.name.toLowerCase();
      return title.includes(query) || sharedBy.includes(query);
    });

    populateNewsItems(matchingNewsItems);
  }

  function populateNewsItems(newsItems) {
    let container = document.querySelector('.cards');
    container.innerHTML = '';

    newsItems.forEach(function (newsItem) {
      let card = createCard(newsItem);
      container.appendChild(card);
    });
  }

  function createCard(newsItem) {
    let card = document.createElement('div');
    card.classList.add('card-news');

    let image = document.createElement('img');
    image.src = newsItem.image;
    card.appendChild(image);

    let cardNewsInfos = document.createElement('div');
    cardNewsInfos.classList.add('card-news-infos');

    let title = document.createElement('h2');
    let link = document.createElement('a');
    link.href = newsItem.url;
    link.target = '_blank';
    link.textContent = newsItem.title;
    title.appendChild(link);
    cardNewsInfos.appendChild(title);

    let sharedBy = document.createElement('p');
    sharedBy.textContent = 'Compartilhado por ' + newsItem.user.name;
    cardNewsInfos.appendChild(sharedBy);

    let likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    let likeIcon = document.createElement('i');
    likeIcon.classList.add('fas', 'fa-thumbs-up');
    likeButton.appendChild(likeIcon);
    cardNewsInfos.appendChild(likeButton);

    card.appendChild(cardNewsInfos);

    return card;
  }
});
