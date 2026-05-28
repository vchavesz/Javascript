//Exibir produto com preço - a função deve receber 2 (dois) parâmetros, o nome de um produto
//  (string) e o preço do produto (number), ela deve exibir no console o nome do produtos
// seguido do preço com símbolo monetário, aproximadamente assim:
// Jaqueta Jeans …………………………… R$ 220,00

function registrarProduto(nome, preco){
    console.log(nome + " …………………………… R$ " + preco)
}

registrarProduto("Jaqueta Jeans", 220);

// - a função deve receber 2 (dois) parâmetros: o preço total do pedido, 
// e a quantidade de parcelas. O número máximo de parcelas deve ser 12. 
// A função deve retornar o preço da parcela, caso o segundo parâmetro seja maior que 12,
//  o preço total deve ser retornado.

function parcela(precoTotal, quantidadeDeParcela){
    if (quantidadeDeParcela > 12){
        return precoTotal
    } else {
        return precoTotal / quantidadeDeParcela
    }
}

console.log("O Valor de cada parcela será de = R$ " + parcela(220, 6))

//Aplicar desconto - a função deve receber 2 (dois) parâmetros: o valor total do pedido,
//e um segundo parâmetro um desconto. A função deve retornar o preço com o desconto 
//decrescido, caso o desconto seja maior que o valor total do pedido, o valor a ser retornado deve ser 0.

function aplicarDesconto (valorTotal, desconto){
    if (desconto > valorTotal){
        return 0;
    }  else {
        return valorTotal - desconto;
    }
}

console.log("Preço com desconto: R$ " + aplicarDesconto(220,30))

//Aplicar cupom de desconto - a função deve receber 2 (dois) parâmetros: o valor total do pedido, e 
// um segundo uma string. A função deve verificar se a string passada é: CUPOM50, CUPOM100 ou CUPOM200.

//Caso seja CUPOM50, deve ser invocada a função de aplicação do desconto passando como parâmetro 
// de desconto o valor 50. O resultado retornado da função de aplicação de desconto deve ser retornado.

//Caso seja CUPOM100, deve ser invocada a função de aplicação do desconto passando como parâmetro de desconto o 
// valor 100. O resultado retornado da função de aplicação de desconto deve ser retornado.

//Caso seja CUPOM200, deve ser invocada a função de aplicação do desconto passando como parâmetro de desconto o 0
// valor 200. O resultado retornado da função de aplicação de desconto deve ser retornado.


function aplicarCupom(valorTotal, cupom){
    if ( cupom === "CUPOM50"){
        return aplicarDesconto(valorTotal, 50)
    }else if ( cupom === "CUPOM100"){
        return aplicarDesconto(valorTotal, 100)
    }else if ( cupom === "CUPOM200"){
        return aplicarDesconto(valorTotal, 200)
    }else {
        return valorTotal
    }
}

console.log("Foi aplicado um desconto de 50,00 no entanto o valor com desconto será de R$" + aplicarCupom (220, "CUPOM50"))

// Exibir preço - a função deve receber um parâmetro, que é um valor, 
// e deve exibir no console o valor precedido de “💵 R$”

function precoFinal (final){
    console.log("💵 R$: " + final)
}

precoFinal(220) 


