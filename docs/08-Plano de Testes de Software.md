# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
-	Site publicado na Internet
-	Navegador da Internet - Chrome, Firefox ou Edge
-	Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados são descritos a seguir:

| Caso de Teste| CT-1 - Redirecionamento para o site fonte da notícia  | 
|-----------|----------| 
| **Requisitos Associados** | RF-001 Ao clicar na notícia, o site deve redirecionar o usuário para a fonte da mesma	  |
| **Objetivo do Teste** | Verificar se o usuário está sendo redirecionado corretamente   |
| **Passos** | Acessar o navegador, informar o endereço do site, clicar na notícia desejada   |
| **Critérios de Êxito** | Primeiramente, as notícias que foram adicionadas pelos usuários devem ser exibidas na página principal; Quando o visitante clicar na notícia, ele deve ser redirecionado ao site fonte da notícia em nova aba do navegador   |

| Caso de Teste| CT-2 - Pesquisa e filtro de notícias  | 
|-----------|----------| 
| **Requisitos Associados** | RF-002 O usuário deve ser capaz de filtrar as notícias; RF-005	O site deve ter um sistema de "tags"	  |
| **Objetivo do Teste** | Verificar se as notícias estão sendo filtradas corretamente   |
| **Passos** | Acessar o navegador, informar o endereço do site, clicar no campo "selecione um filtro" e pesquisar o nome de uma notícia no campo "Buscar Notícia"   |
| **Critérios de Êxito** | Quando o usuário selecionar a tag desejada, o site deve exibir apenas as notícias que correspondam a essa tag específica. Da mesma forma, quando o usuário pesquisar por uma notícia, o site deve exibir apenas as notícias que contenham as palavras-chave da pesquisa e que também tenham a tag selecionada anteriormente.   |


| Caso de Teste| CT- 3 Sistema de "likes"  | 
|-----------|----------| 
| **Requisitos Associados** |	RF-003 Sistema de "likes" a fim de exibir mais notícias daquele tipo ao usuário	  |
| **Objetivo do Teste** | Verificar se o usuário consegue dar "like" nas notícias, a fim de demonstrar as notícias que mais gostou   |
| **Passos** | Acessar o navegador, informar o endereço do site, clicar no botão de coração associado à notícia    |
| **Critérios de Êxito** | Quando o usuário clicar no botão de coração de alguma notícia, o site deve contabilizar esse clique. Clicando novamente no mesmo ícone, esse contador deve ser subtraído |

| Caso de Teste| CT- 4 Postagem das notícias | 
|-----------|----------| 
| **Requisitos Associados** |	RF-004 O usuário deve ser capaz de alimentar o site com notícias de sua preferência	  |
| **Objetivo do Teste** | Verificar se usuários logados conseguem adicionar notícas à home page do site   |
| **Passos** | Após acessar o site, criar uma conta e fazer login, o usuário deve clicar no botão "Adicionar Notícia" para ser redirecionado à página "Adicionar Notícia". Em seguida, deve preencher os campos de Título, Link da notícia e Tag da notícia. Após concluir esses passos, deve clicar no botão "Postar". Ao retornar à página principal, a notícia adicionada deve ser exibida entre as mais recentes.   |
| **Critérios de Êxito** | O botão "adicionar notícia" só deve ser exbido a usuários logados; caso algum campo não seja preenchido, a notícia não deve ser postada, após clicar em "Postar", a notícia deve ser gerada e exibida na home page do site  |

| Caso de Teste| CT- 5 O site deve exibir o usuário que postou a notícia	  | 
|-----------|----------| 
| **Requisitos Associados** | RF-006 O site deve exibir o usuário que postou a notícia		  |
| **Objetivo do Teste** | Verificar se o usuário correto está sendo exibido em cada notícia   |
| **Passos** | Acessar o navegador, informar o endereço do site, verificar se as notícias tem um nome associado ao campo "compartilhado por..." em cada uma delas    |
| **Critérios de Êxito** | Cada notícia deve exibir o nome do usuário que postou a a mesma |


