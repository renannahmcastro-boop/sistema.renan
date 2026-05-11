
const produtos = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
    preco: 150,
    ano: 1954
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopia",
    preco: 80,
    ano: 1949
  },
  {
    id: 3,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    genero: "Aventura",
    preco: 120,
    ano: 1605
  },
  {
    id: 4,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    genero: "Infantojuvenil",
    preco: 60,
    ano: 1943
  },
  {
    id: 5,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasia",
    preco: 99,
    ano: 1997
  },
  {
    id: 6,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    genero: "Sátira",
    preco: 70,
    ano: 1945
  },
  {
    id: 7,
    titulo: "Moby Dick",
    autor: "Herman Melville",
    genero: "Aventura",
    preco: 13
  },
  {
    id: 10,
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    genero: "Suspense",
    preco: 75,
    ano: 2003
  }
];

const fs = require("fs")

const produtosJSON = JSON. stringify(produtos, null, 2)

fs.writeFileSync("produtos.json", produtosJSON)

const produtosArquivo = require("./produtos.json")