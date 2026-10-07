let nome = "Romulo";
var sobrenome;
const pi=3.14857639;
let peso;
let altura;

if (nome == "Braian") {
    sobrenome = "Moreira";
    var idade = 17;
    var pet = "lobão";
    console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Pet :" + pet);
}
console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Pet :" + pet);

idade=18;   
if (idade ==20){
    console.log("nome: "+nome);
}
else{
    console.log("nome: "+"umelhordomundo");
}

if(idade ==="18"){
    console.log("B");
}

peso=80;
altura=1.80;
imc=peso/(altura*altura);

if(imc<18.5){
    console.log("Abaixo do peso")
}else if(imc>= 25 && imc<=30){
    console.log("peso normal")
}else if (imc > 30 && imc <= 35){
    console.log("Obesidade grau 1")
}else if(imc >= 35 && imc <= 40){
    console.log("Obesidade grau 2")
}else if(imc > 40){
    console.log("Obesidade grau 3")
}

//////switch