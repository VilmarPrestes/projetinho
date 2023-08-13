const fs = require('fs');
const http = require('http');
const path = require('path');

let csv = fs.readFileSync(path.join(__dirname, 'teste.csv'), 'utf8');
csv = csv.split('\n');

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    '..',
    'client',
    req.url === '/' ? 'index.html' : req.url
  );
  let extname = path.extname(filePath);
  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;

    case '.css':
      contentType = 'text/css';
      break;

    case '.json':
      contentType = 'application/json';
      break;

    case '.png':
      contentType = 'image/png';
      break;

    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  if (contentType == 'text/html' && extname == '') {
    filePath += '.html';
  }

  let receitasTemplate = `
    <div class="post">
      <h3>__TITULO__</h3>
      <p>__RECEITA__</p>
    </div>
  `;

  let receitas = '';

  for (let i = 1; i < csv.length; i++) {
    let linha = csv[i].split(';');
    let titulo = linha[0];
    let receita = linha[1];

    let receitaTemplate = receitasTemplate
      .replace('__TITULO__', titulo)
      .replace('__RECEITA__', receita);

    receitas += receitaTemplate;
  }

  let arquivo = fs.readFileSync(filePath).toString();
  arquivo = arquivo.replace('__RECEITAS__', receitas);

  res.writeHead(200, { 'Content-Type': contentType });
  res.end(arquivo, 'utf8');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
