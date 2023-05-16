window.onload = function () {
  // Get a reference to the container where the cards will be added
  const container = document.querySelector('.cards');

  // TODO: Ler dados da API usando fetch.
  fetch('http://localhost:3000/news/?_expand=user&_sort=createdAt&_order=desc')
    .then(response => response.json())
    .then(news => {
      // Loop through the news array and create a card for each news item
      news.forEach(newsItem => {
        // Create the card element
        console.log(newsItem)
        const card = document.createElement('div');
        card.classList.add('card-news');

        // Create the image element and set its attributes
        const image = document.createElement('img');
        image.setAttribute('src', newsItem.image);
        card.appendChild(image);

        // Create the card-news-infos element and add the news item's title and sharedBy properties
        const cardNewsInfos = document.createElement('div');
        cardNewsInfos.classList.add('card-news-infos');

        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.setAttribute('href', newsItem.url);
        link.setAttribute('target', '_blank');
        link.textContent = newsItem.title;
        title.appendChild(link);
        cardNewsInfos.appendChild(title);

        const sharedBy = document.createElement('p');
        sharedBy.textContent = `Compartilhado por ${newsItem.user.name}`;
        cardNewsInfos.appendChild(sharedBy);

        // Create the like button
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        const likeIcon = document.createElement('i');
        likeIcon.classList.add('fas', 'fa-thumbs-up');
        likeButton.appendChild(likeIcon);
        cardNewsInfos.appendChild(likeButton);

        card.appendChild(cardNewsInfos);

        // Add the card to the container
        container.appendChild(card);
      });

      // Botão de curtida
      const likeButtons = document.querySelectorAll('.like-button');
      let clicked = false;

      likeButtons.forEach(likeButton => {
        likeButton.addEventListener('click', function () {
          console.log(likeButton);
          clicked = !clicked;
          if (clicked) {
            likeButton.classList.add('clicked');
          } else {
            likeButton.classList.remove('clicked');
          }
        });
      });
    })
    .catch(error => {
      console.error(error);
    });
};
