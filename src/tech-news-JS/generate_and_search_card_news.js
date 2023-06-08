document.addEventListener('DOMContentLoaded', function () {
  let searchInput = document.getElementById('search');
  let searchButton = document.getElementById('buttonSearch');
  let tagFilterSelect = document.getElementById('tagFilter');

  let originalNewsItems = [];

  fetch('http://localhost:3000/news/?_expand=user&_sort=createdAt&_order=desc')
    .then(response => response.json())
    .then(news => {
      originalNewsItems = news;
      populateNewsItems(news);
    })
    .catch(error => {
      console.error(error);
    });

  searchButton.addEventListener('click', performSearch);

  searchInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      performSearch();
    }
  });

  tagFilterSelect.addEventListener('change', performSearch);

  function performSearch() {
    let query = searchInput.value.trim().toLowerCase();
    let tagFilter = tagFilterSelect.value.toLowerCase();

    let searchResults = document.querySelector('.cards');
    searchResults.innerHTML = '';

    let matchingNewsItems = originalNewsItems.filter(function (newsItem) {
      let title = newsItem.title.toLowerCase();
      let sharedBy = newsItem.user.name.toLowerCase();
      let tag = newsItem.tag.toLowerCase();

      let matchesQuery = title.includes(query) || sharedBy.includes(query);
      let matchesTagFilter = tagFilter === '' || tag === tagFilter;

      return matchesQuery && matchesTagFilter;
    });

    populateNewsItems(matchingNewsItems);
  }

  function populateNewsItems(newsItems) {
    let container = document.querySelector('.cards');
    container.innerHTML = '';

    newsItems.forEach(function (newsItem) {
      let card = createCard(newsItem);
      if (document.body.classList.contains('dark')) {
        card.classList.add('dark');
      }
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

    let tag = document.createElement('p');
    tag.textContent = newsItem.tag;
    cardNewsInfos.appendChild(tag);

    let likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    let likeIcon = document.createElement('i');
    likeIcon.classList.add('fas', 'fa-heart');
    likeButton.appendChild(likeIcon);
    cardNewsInfos.appendChild(likeButton);

    card.appendChild(cardNewsInfos);

    return card;
  }
});
