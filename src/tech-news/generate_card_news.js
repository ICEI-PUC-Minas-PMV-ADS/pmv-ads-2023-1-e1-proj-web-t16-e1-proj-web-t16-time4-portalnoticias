window.onload = function () {
  // Get a reference to the container where the cards will be added
  const container = document.querySelector('.cards');

  // Todo: Ler dados da API usando fetch.
  // const news = fetch('http://localhost:3000/news')
  //   .then(response => response.json())
  //   .then(data => {
  //     return data;
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  // Apagar (const news abaixo) após atualizar o caminho do banco de dados no codigo acima (deixar somente o const news acima).
  const news = [
    {
      title: 'Investigating Linux Phantom Disk Reads',
      url: 'https://questdb.io/blog/investigating-linux-phantom-disk-reads/',
      image: 'https://source.unsplash.com/random/?technology',
      sharedBy: 'Pedro'
    },
    {
      title: 'Jsonformer: A Bulletproof Way to Generate Structured JSON from Language Models',
      url: 'https://github.com/1rgs/jsonformer',
      image: 'https://source.unsplash.com/random/?random',
      sharedBy: 'Pedro'
    },
    {
      title: 'Fakespot is acquired by Mozilla',
      url: 'https://www.fakespot.com/post/fakespot-acquired-by-mozilla',
      image: 'https://source.unsplash.com/random/?tech',
      sharedBy: 'Pedro'
    },
    {
      title: 'How to Build a Full-Stack Web Application with Angular and Spring Boot',
      url: 'https://developer.okta.com/blog/2021/04/26/full-stack-web-application-angular-spring-boot-part-1',
      image: 'https://source.unsplash.com/random/?mobile',
      sharedBy: 'Pedro'
    }
  ];

  // Loop through the news array and create a card for each news item
  news.forEach(newsItem => {
    // Create the card element
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
    sharedBy.textContent = `Compartilhado por ${newsItem.sharedBy}`;
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
      console.log(likeButton)
      clicked = !clicked;
      if (clicked) {
        likeButton.classList.add('clicked');
      } else {
        likeButton.classList.remove('clicked');
      }
    });
  })
};
