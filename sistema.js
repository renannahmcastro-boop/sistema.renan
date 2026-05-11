
const produtosArquivo = require("./produtos.json")


// MOSTRAR DADOS
console.log("\n=== LISTA DE CAMINHONETES ===\n")

produtosArquivo.forEach((produtos) => {

    console.log(
        "Nome: " + produtos.nome + "\n" +
        "Marca: " + produtos.marca + "\n" +
        "Valor: R$ " + produtos.valor + "\n" +
        "Peso: " + produtos.peso + " toneladas\n" +
        "Ano: " + produtos.ano + "\n" +
        "Cor: " + produtos.cor + "\n" +
        "Quantidade: " + produtos.quantidade + "\n" +
        "Placa: " + produtos.placa + "\n" +
        "--------------------------------------"
    )

})

// FUNÇÃO PARA ADICIONAR CARRO
function Adicionaprodutos(nome, marca, valor, quantidade) {

    produtosArquivo.push({
        nome: nome,
        marca: marca,
        valor: valor,
        quantidade: quantidade,

    })

    console.log("\nNovo produtos adicionado!\n")
}

// ADICIONAR NOVO CARRO
Adicionaprodutos(
    "Dom Quixote",
    "George Orwell",
    "Fantasia",
    2.400,
    2025,
    2,
    5555
)

// MOSTRAR NOMES
console.log("\n=== PRODUTOS CADASTRADOS ===\n")
    Arquivo.forEach((produtosArquivo) => {

    console.log(produtosArquivo.nome + " - " + produtosArquivo.marca)

})

// DESCONTO
console.log("\n=== LIVROS COM DESCONTO DE 10% ===\n")

const produtosComDesconto = []

produtosArquivo.forEach((produtos) => {

    let preco = Number(
        produtos.valor
        .replace(".", "")
        .replace(",", ".")
    )

    let novoPreco = preco * 0.90

    produtosComDesconto.push({
        nome: produtos.nome,
        marca: produtos.marca,
        valorOriginal: produtos.valor,
        valorComDesconto: "R$ " + novoPreco.toFixed(2)
    })

})

// MOSTRAR DESCONTO
produtosComDesconto.forEach((carro) => {

    console.log(
        "Nome: " + carro.nome + "\n" +
        "Marca: " + carro.marca + "\n" +
        "Valor Original: R$ " + carro.valorOriginal + "\n" +
        "Valor com Desconto: " + carro.valorComDesconto + "\n" +
        "--------------------------------------"
    )

})

// BUSCAR CARRO
console.log("\n=== BUSCANDO ROMANCE ===\n")

const nomeprodutos = "O Pequeno Príncipe"

const encontrado = produtosArquivo.find((produtosArquivo) => {
    return produtosArquivo.nome === nomeprodutos
})

if (encontrado) {

    console.log(
        "PRODUTO ENCONTRADO!\n\n" +
        "Nome: " + encontrado.nome + "\n" +
        "Marca: " + encontrado.marca + "\n" +
        "Valor: R$ " + encontrado.valor + "\n" +
        "Quantidade: " + encontrado.quantidade + "\n" 
    )

} else {

    console.log("PRODUTO NÃO ENCONTRADO!")

}