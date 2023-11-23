const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, imagem: "soc.jpg", titulo: "Six Of Crows", preco: "109.31", decricao: "Six Of Crows é o primeiro livro de uma duologia do Grishaverso e deve ser lido depois da triologia de Sombra e Ossos. E conta a história de 6 pessoas unidas pela proposta de receber 1 milhão de Kruges para retirar uma pessoa da prisão de mais alta segurança, um livro emocionante e cheio de reviravoltas." },
  {id: 2, imagem: "estilhaca.jpg", titulo: "Estilhaça-me", preco: "45,43", decricao: "No eletrizante primeiro volume da série Estilhaça-me, Tahereh Mafi apresenta um mundo distópico hipnotizante, uma emocionante história de super-heróis e uma heroína inesquecível. Eu li essa série de livros em Janeiro de 2022, e se tornou um dos meus livros favoritos. Os meus personagens favoritos são a Juliette, o Aaron e o Kenji." },
  {id: 3, imagem: "pj.jpg", titulo: "Percy Jackson", preco: "40.99", decricao: "Primeiro volume da saga Percy Jackson e os olimpianos, O ladrão de raios esteve entre os primeiros lugares na lista das séries mais vendidas do The New York Times. O autor conjuga lendas da mitologia grega com aventuras no século XXI." },
  {id: 4, imagem: "legend.jpg", titulo: "Legend", preco: "42.30", decricao: "Nascida em uma família de elite em um dos bairros mais prósperos da República, June, de quinze anos, é um prodígio militar. Obediente, entusiasmada e comprometida com seus pais, ela está sendo preparada para o sucesso nos círculos mais elevados da sociedade.Nascido nas favelas do setor Lake da República, Day, de quinze anos, é o criminoso mais procurado do país. Mas suas ações talvez não sejam tão mal-intencionadas quanto dizem." },
  {id: 5, imagem: "jh.jpg", titulo: "Jogos de Herança", preco: "33.99", decricao: "Avery Grambs tem um plano para um futuro melhor: sobreviver ao ensino médio, ganhar uma bolsa de estudos e garantir sua independência. Mas sua sorte muda no instante em que o bilionário Tobias Hawthorne morre e deixa toda a sua fortuna para ela... sendo que ela não tem ideia do porquê – ou mesmo de quem é Tobias Hawthorne." },
  {id: 6, imagem: "pc.jpg", titulo: "O Príncipe Cruel", preco: "32.99", decricao: "Da autora de best-sellers nº 1 do The New York Times, Holly Black, O prínicipe cruel é o primeiro livro da envolvente série O Povo do Ar sobre uma garota mortal que se vê presa em uma teia de intrigas de fadas reais." },
  {id: 7, imagem: "caraval.jpg", titulo: "Caraval", preco: "49.32", decricao: "Os anos de espera acabaram: a jovem Scarlett Dragna finalmente recebeu o tão esperado convite para participar do Caraval, um evento lendário que ocorre uma vez por ano e que conta com a participação do público." },
  {id: 8, imagem: "fw.jpg", titulo: "Fourth Wing", preco: "87.99", decricao: "Violet Sorrengail, de 20 anos, deveria entrar no Quadrante dos Escribas, vivendo uma vida tranquila entre livros e história. Agora, a comandante geral - também conhecida como sua mãe durona - ordenou que Violet se juntasse às centenas de candidatos que lutam para se tornar a elite de Navarra: os cavaleiros de dragões." },
  {id: 9, imagem: "lendarios.jpg", titulo: "Lendários", preco: "37.99", decricao: "Um dos livros mais aguardados do ano, Lendários é uma fantasia apaixonante que une magia, mistério e sociedades secretas, trazendo um novo olhar sobre as lendas do rei Arthur." },
  {id: 10, imagem: "rd.jpg", titulo: "A Rebelde do Deserto", preco: "26.99", decricao: "O destino do deserto está nas mãos de Amani Al’Hiza ― uma garota feita de fogo e pólvora, com o dedo sempre no gatilho. O deserto de Miraji é governado por mortais, mas criaturas míticas rondam as áreas mais selvagens e remotas, e há boatos de que, em algum lugar, os djinnis ainda praticam magia. De toda maneira, para os humanos o deserto é um lugar impiedoso, principalmente se você é pobre, órfão ou mulher. Amani Al’Hiza é as três coisas." },

]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render("index", { produtos });
});

app.get('/produto', (req, res) => {
  res.render('produtos', { message: 'Deu certo' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});