# Programação de Funcionalidades


Nesta seção serão apresentadas as telas desenvolvidas para cada funcionalidade da solução. Para acessar a aplicação, ativamos uma API do JSON e o local storage, através do terminal do Visual Studio CODE.


# Redirecionamento do Usuário a Fonte da Notícia (RF-001)

A tela principal do site exibe as notícias mais recentes que foram postadas. Ao clicar no card, o usuário é redirecionado para a fonte da notícia, abrindo outra aba do navegador.

> - ![home](img/home.png)

## Artefatos da Funcionalidade

- index.html (Pedro Batista)

- generate_and_search_card_news.js (Pedro Batista, Pedro Aguilar)

- db.json (Pedro Batista, Luca Barbosa)

- style.css (Pedro Batista, Pedro Aguilar, João Ricardo)


# Filtro de Notícias (RF-002)

A tela principal apresenta uma caixa de busca, aonde o usuário pode digitar um título e pesquisar por notícias que tenham aquelas palavras em seu título.

> - ![search](img/search.png)

## Artefatos da Funcionalidade

- index.html (Pedro Batista)

- generate_and_search_card_news.js (Pedro Batista, Pedro Aguilar)

- db.json (Pedro Batista, Luca Barbosa)

- style.css (Pedro Batista, Pedro Aguilar, João Ricardo)

### Estrutura de Dados

```
  function performSearch() {
    let query = searchInput.value.trim().toLowerCase();

    // Limpar resultados da busca anterior
    let searchResults = document.querySelector('.cards');
    searchResults.innerHTML = '';

    let matchingNewsItems = originalNewsItems.filter(function (newsItem) {
      let title = newsItem.title.toLowerCase();
      let sharedBy = newsItem.user.name.toLowerCase();
      return title.includes(query) || sharedBy.includes(query);
    });
```

# O Usuário Pode Alimentar o Site com Novas Notícias (RF-004)

Criando uma conta e logando na mesma, os usuários podem adicionar novas notícias ao site através do botão "Adicionar notícia".

> - ![generate](img/generate.png)

## Artefatos da Funcionalidade

- add_news.html (Pedro Aguilar)

- generate_and_search_card_news.js (Pedro Batista, Pedro Aguilar)

- db.json (Pedro Batista, Luca Barbosa)

- style.css (Pedro Batista, Pedro Aguilar, João Ricardo)

- create_user.js (Pedro Batista)

- handleUserLoggedIn.js (Pedro Batista)

### Estrutura de Dados

```
"news": [
    {
        "title": "Investigating Linux Phantom Disk Reads",
        "url": "https://questdb.io/blog/investigating-linux-phantom-disk-reads/",
        "image": "https://source.unsplash.com/random/?technology",
        "createdAt": "2023-04-07T16:42:21.461Z",
        "userId": 1,
        "id": 1
    },
    // Outros itens de notícias...
]
```
# O Site Deve Exibir o Usuário que Postou a Notícia (RF-006)

Nos cards de notícia, gerados dinamicamente, é exibido o nome do usuário responsável pela postagem

> - ![user](img/user.png)

## Artefatos da Funcionalidade

- index.html (Pedro Batista)

- generate_and_search_card_news.js (Pedro Batista, Pedro Aguilar)

- db.json (Pedro Batista, Luca Barbosa)

- style.css (Pedro Batista, Pedro Aguilar, João Ricardo)

- create_user.js (Pedro Batista, Willian Pereira)

### Estrutura de Dados

```
    let sharedBy = document.createElement('p');
    sharedBy.textContent = 'Compartilhado por ' + newsItem.user.name;
    cardNewsInfos.appendChild(sharedBy);
```

