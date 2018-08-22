# React Phonebook - Irio czaikowski junior

Aplicação composta por duas partes:
Api => Api em laravel disponível na pasta phonebook-send4 da raiz do repositório.
Aplicação => Aplicação desenvolvida em react com redux disponível na pasta phonebook-front da raiz do repositório. 

## Backend - API - Tecnologia utilizadas:
- Laravel 5.6
- Banco de dados MySql
- Composer
- Laravel Homestead
- Laravel / Swagger

## Instruções de instalação:

1. Troque a conexão do banco de dados no arquivo .env da raiz do projeto
2. Utilize o laravel Homestead para criar uma máquina virtual vagrant
3. Acesse a máquina via ssh com comando 'vagrant ssh'
4. Execute o comando 'composer update'
5. Execute o comando 'php artisan migrate' para criar as tabelas de baco de dados
6. Crie um domínio local para 'phonebook-react.local' (Obrigatório para essa aplicação)

## Frontend - Tecnologia utilizadas:
- React SSR (Server side rendering)
- Redux
- Biblioteca Materialize CSS
- Axios
- Express

## Instruções de instalação:

1. Execute o comando 'npm install' na raiz do projeto
2. Execute o comando 'npm start'
3. A aplcação será executada na porta 3000

## Observações Gerais:
1. O caminho para o diagrama EER é: './react-phonebook/database/diagrams/phonebook-send4-eer.png'
2. A documnetação da API está disponível em: api.phonebook.local/api/documentation

Obrigado !!!
