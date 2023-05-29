window.onload = function () {
  const container = document.querySelector('.cards');

  // TODO: Ler dados da API usando fetch.
  fetch('http://localhost:3000/news/?_expand=user&_sort=createdAt&_order=desc')
    .then(response => response.json())
    .then(news => {
      // Percorra o array de notícias e crie um cartão para cada item de notícia
      news.forEach(newsItem => {
        // Cria o elemento card-news
        console.log(newsItem)
        const card = document.createElement('div');
        card.classList.add('card-news');

        const image = document.createElement('img');
        image.setAttribute('src', newsItem.image);
        card.appendChild(image);

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

        // Cria o botão de like
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        const likeIcon = document.createElement('i');
        likeIcon.classList.add('fas', 'fa-thumbs-up');
        likeButton.appendChild(likeIcon);
        cardNewsInfos.appendChild(likeButton);

        card.appendChild(cardNewsInfos);

        // Adiciona o card ao container
        container.appendChild(card);
      });

      // Botão de like
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
