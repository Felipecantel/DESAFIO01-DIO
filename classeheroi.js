var nome = prompt("Digite seu nome de herói:");
function XP(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let pontuacaoXP = XP(0, 10000);
let Classe = "";
    if (pontuacaoXP <= 1000) {
        Classe = "Ferro";
}   
    else if (pontuacaoXP <= 2000) {
        Classe = "Bronze";
}   
    else if (pontuacaoXP <= 5000) {
        Classe = "Prata";
} 
    else if (pontuacaoXP <= 7000) {
        Classe = "Ouro";
} 
    else if (pontuacaoXP <= 8000) {
        Classe = "Platina";
} 
    else if (pontuacaoXP <= 9000) {
        Classe = "Ascendente";
}   
    else if (pontuacaoXP <= 10000) {
        Classe = "Supremo";
} 
    else {
        Classe = "Lendario";
}
alert(`Nobre guerreiro ${nome}, sua pontuação é de ${pontuacaoXP} e sua classificação é nível ${Classe}`);