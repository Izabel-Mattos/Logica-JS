console.log("Izabel")

let dia  = true;

if(dia == true){
console.log("Esta Claro");
}
else{
    console.log("Está Escuro");

}

for( let i = 2; i <=20; i += 2){
    console.log(i);
}

function exibirMensagem(){
    console.log( "Ola Pessoas!")
}

exibirMensagem();

function exibirNome(nome){
    console.log("Meu Nome é" + nome);
   
}

exibirNome(" Izabel")

function exibirInformacoes(nome, idade, estilo)
{
   console.log("Meu nome é " + nome, "Tenho " + idade + " anos", "Meu estilo musical é " + estilo);}

   exibirInformacoes("Izabel", 44, "Kpop");

   function exibirFilmesMusica(filme,musica)
   {
console.log("Filme:" + filme, "Musica: " + musica);

   }

   exibirFilmesMusica("Indiana Jones", "Dynamite");

   function triploNumero(numero){
    return numero * 3;
   }

   let resultado = triploNumero(3);
   console.log(resultado);


   function verificarBoleano(valor)
   {
if (valor===true)
console.log("É verdadeiro");

else{console.log("É falso");}

}

verificarBoleano(true);


let mercado = ["Batata","Cenoura","Tomate", "Limão","Uva"];

function array(){
    console.log(mercado);
}

array();

function addNome(){
    mercado.unshift("Laranja");
    console.log(mercado);
}

addNome();

function removerNome(){
    mercado.pop();
    console.log(mercado);
}

removerNome();

function removerNomeStart(){
    mercado.shift();
    console.log(mercado);
}

removerNomeStart();

function addNomeEnd(){
mercado.push("Alface, Mamão");
console.log(mercado);
}

addNomeEnd();


function addNomeQuite(){
    mercado.splice(3,0, "Melão");
    console.log(mercado);
}

addNomeQuite();

function ordemCrescente(){

    let number = [7, 5, 6, 3, 8, 9, 2, 1, 4];

    number.sort(function(a,b){
        return a - b;
    });

    console.log(number);
}

ordemCrescente();










