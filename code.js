var readlineSync = require('readline-sync');
var Lista= ["Pneu","Motor","volante","Vidros","Retrovisor","Bateria","Freios","Borrachas","Painel"]
console.log('------------------------------------')
var Peca = readlineSync.question( console.log('Nome da Peça:') )
console.log('------------------------------------')
if(Peca.length < 3){
    console.log('------------------------------------')
    console.log('Invalido.')
    console.log('------------------------------------')
    console.log('A peça contém menos de 3 carecteres.')
    console.log('------------------------------------')
    return
}
console.log('------------------------------------')
var Peso = [readlineSync.question( console.log('Qual o peso da peça ?'))]
console.log('------------------------------------')
if (Peso <= 100 ){
    console.log('------------------------------------')
    console.log('Invalido')
    console.log('------------------------------------')
    console.log('Peso abaixo do valor minimo (101 Gramas).')
    console.log('------------------------------------')
    return
}

if(Lista.length >=10 ){
        console.log('------------------------------------')
        console.log('Impossivel adicionar. A lista alcançou o limite.')
        console.log('------------------------------------')
        return
    }
else{
    console.log('------------------------------------')
    console.log(`A peça ${Peca} foi adicionado a lista com sucesso!`)
    console.log('------------------------------------')
}

Lista.forEach(function(item,indice,array){
        console.log(`Outra peça da lista:${item}`)
})
console.log("Finalizando...")
