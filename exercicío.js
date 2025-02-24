let av1 = 5.0;
let av2 = 6.0;
let recup1 = 7.0;
let recup2 = 3.0;
let nota1;
let nota2;
let total;
let media;

if(av1 > recup1){
    nota1 = av1;
} else {
    nota1 = recup1;
}
if(av2 > recup2){
    nota2 = av2;

} else{
    nota2 = recup2;
}

total = nota1 + nota2;
media = total / 2;

if (media >= 6.0){
    console.log("Aluno aprovado! sua media é : " + media)
} else {
    console.log("Aluno reprovado! sua media é : " + media)
}