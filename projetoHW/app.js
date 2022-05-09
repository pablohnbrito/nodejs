//parou no video 13 min 37
/* 
www.npmjs.com - site para ver a documentação do npm
devdocs.io/npm/ - outra opcao para documentação npm
www.nodejs.org - verificar a documentação para o nodejs
www.w3schools.com/nodejs/
*/

//incluindo uma biblioteca
const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs');

let resposta;

//definição de endereço / url
const hostname = '127.0.0.1';
const port = 3000;

// implementação da regra de negócio
const server = http.createServer((req, res) => {

  //criar um usuário - create
    //pegar informações do usuário
    const params = queryString.parse(url.parse(req.url, true).search);
    console.log(params);

    //salvar informações
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Salvo!');
    });

    resposta = 'Usuário criado com sucesso!';

  //buscar usuário - read
  //atualizar um usuário - update
  //remover usuario - delete
  // Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("hello world");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});