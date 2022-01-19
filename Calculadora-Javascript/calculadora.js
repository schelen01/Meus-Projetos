
//Nível I
 console.log("Minha Primeira Calculadora JS")
//funçao add
function adicao(x,y){
    return x + y
}
//função subtração
function subtracao(x,y){
    return x -y
}
//função multiplicação
function mult(x, y){
    return x * y
}
//função divisão
function div(x, y){
    return x / y
}

//funão ao quadrado
function quadradoDoNumero(x){
    return mult(x,x);
}

//função média
function mediaDeTresNumeros(x, y, z){
    return (adicao(x,y)+z) / 3
}
//Porcentagem
function porcentagem(x, y){
    return mult(x, y) / 100 
}
 
 //geradorDePorcentagem
 function geradorDePorcentagem(x, y){
    return div(x, y) * 100 
}


//Nível II
console.log ("-------------- Teste de Operações / Calculadora Adição --------------")
console.log (adicao(5,2))

console.log ("-------------- Teste de Operações / Calculadora Subtração --------------")
console.log (subtracao(5,2))

console.log ("-------------- Teste de Operações / Calculadora Multiplicação --------------")
console.log (mult(5,2))

console.log ("-------------- Teste de Operações / Calculadora Divisão --------------")
console.log (div(5,2))

// Passando valor 0
console.log ("-------------- Teste de Operações / Calculadora Divisão --------------")
console.log (div(0,5))

console.log ("-------------- Teste de Operações / Calculadora Divisão --------------")
console.log (div(5, 0))

console.log ("-------------- Teste de Operações / Calculadora Média de Três --------------")
console.log((adicao(5, 2) + 7) /3)

console.log ("-------------- Teste de Operações / Calculadora Porcentagem --------------")
console.log (mult(10, 100) /100) 

//calculaPorcentagem(300, 15)  
console.log ("-------------- Teste de Operações / Calculadora Porcentagem --------------")
console.log (mult(300,15) /100) 

//geradorDePorcentagem (2, 200)
console.log ("-------------- Teste de Operações / Calculadora Gerador de Porcentagem --------------")
console.log (div(2,200) * 100)