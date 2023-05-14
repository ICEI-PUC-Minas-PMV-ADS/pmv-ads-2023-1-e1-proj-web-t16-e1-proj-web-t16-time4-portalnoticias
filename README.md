"# tech-news-front-back" 


node ace serve --watch ----> comando que liga o servidor back end e o Banco de dados MYSQL (Executar dentro do diretorio adonis -> BackEND)

INSTRUÇÂO:

1- Criar um arquivo "solto" na pasta adonis(backend) com o nome .env

2 - No .env dar Ctrl+C em:

PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=Im097Yj68tpyC93AwTVJhjzbqULx_wnV
DRIVE_DISK=local
DB_CONNECTION=mysql
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DB_NAME=tech-news
CACHE_VIEWS=false


3 - Salvar e após isso o comando "node ace serve --watch" ira funcionar!

4 - CRIANDO O BANCO:
4.1 - Instalar o MySQL Server na maquina
4.2 - Na conexão com o MySQL, utilizar a HOST e a PORT que estão no .env (caso contrario dara erro de conexão)
4.3 - Achar a OPCAO DE CRIAR BANCO, e UTILIZAR NOME E SENHA IGUAIS A DO ARQUIVO .env
4.4 - Após logado no banco pelo MySQL, rodar o comando do servidor que o Banco de dados será construído
