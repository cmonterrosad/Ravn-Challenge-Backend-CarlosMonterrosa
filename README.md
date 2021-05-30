<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Ravn Backend Engineer Challenge

# Part 1
Inside the repository there are two files, book_store_structure.sql and book_store_data.sql. The first file is has the table structure and the second one was the seeding data. Import both files in your desired db engine to generate tables and populate them with data. The answers to the questions are shown below:

1. Who are the first 10 authors ordered by date_of_birth?
    select * FROM book_store.authors as a order by a.date_of_birth asc limit 10; 

2. What is the sales total for the author named “Lorelai Gilmore”?
    select s.sales,a.name from book_store.books as b
    inner join (select book_id,(item_price*quantity) as sales from book_store.sale_items) as s on s.book_id = b.id
    inner join book_store.authors as a on b.author_id = a.id
    where a.name = 'Lorelai Gilmore';

3. What are the top 10 performing authors, ranked by sales revenue?
    select sum(s.sales),a.name from book_store.books as b
    inner join (select book_id,(item_price*quantity) as sales from book_store.sale_items) as s on s.book_id = b.id
    inner join book_store.authors as a on b.author_id = a.id
    group by a.id limit 10;

# Part 2:
To be able to run the application a db server/docker container must be running. Create your own .env following the env-example to be able to generate the correct configuration for TypeORM. Variables can have any key just remember to edit them is the config files. After the .env is setup correctly if u dont have node please install it. After the installation run the following commands to run the migrations files in the project. The files will create the author table and populate it with 13 different authors.

npm run typeorm migration:run
npm start:dev

Once the application is running use the following Curl to get the author data.

curl --request GET \
  --url 'http://localhost:3000/author?count=4'

# Part 3:

The caching module was registed in the nestJs context and used in the author controller. To verify that the cache is working as intended do multiple get request the endpoints and check the response time. It will show a gradual decrease as the number of request with the query params are increased eventually hitting a plateu.

# Part 4:
Dockerfile was commited to the repository, after this the following scripts need to be run. This scripts should be automated using CI/CD providers such as jenkins. The scripts are 
      1. Login to AWS using the ecrLogin plugin from jenkins.
      2. Build the docker iamge using the following syntax(use dockerImage plugin) "docker build -t nest/ravnbvf --build-arg DB_HOST=XXXXXX --build-arg DB_PORT=XXX --build-arg DB_USERNAME=XXX --build-arg DB_PASSWORD=XXXX --build-arg DB_DATABASE=book_store ."
      3. After the image is built the image should be pushed to the AWS docker repository so that it can be later pulled in your task declaration.
      4. Go to the aws console and create an ECS task definition. This is where you will specify which container is going to be used. Which in this case is the one your just updated to the docker registry for your aws account.
      5. After the task is created we need a service where the task will run which is this case is a cluster.Create a cluster and attach a load balancer to be able to redirect traffic to the url you specify.
      6. Create a service in the ECS page and use the your task definition from step 4 and if a load balancer is being used select that as well. After this wait for the service status to change to running and you can use the public IP/configured host to access your application.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
