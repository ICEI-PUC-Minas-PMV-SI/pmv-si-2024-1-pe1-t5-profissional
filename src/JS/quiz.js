var answers = {};

var questao_1 = document.getElementById('qu-1');
var questao_2 = document.getElementById('qu-2');
var questao_3 = document.getElementById('qu-3');
var questao_4 = document.getElementById('qu-4');
var questao_5 = document.getElementById('qu-5');
var questao_6 = document.getElementById('qu-6');
var questao_7 = document.getElementById('qu-7');
var questao_8 = document.getElementById('qu-8');


function armazenaRespostas(numero_questao, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['q'+ numero_questao] = parseInt(event.target.value);
        console.log(answers);
    }
}

questao_1.addEventListener('click', function(event){
    armazenaRespostas(1, event)
})


questao_2.addEventListener('click', function(event){
    armazenaRespostas(2, event)
})


questao_3.addEventListener('click', function(event){
    armazenaRespostas(3, event)
})


questao_4.addEventListener('click', function(event){
    armazenaRespostas(4, event)
})


questao_5.addEventListener('click', function(event){
    armazenaRespostas(5, event)
})


questao_6.addEventListener('click', function(event){
    armazenaRespostas(6, event)
})


questao_7.addEventListener('click', function(event){
    armazenaRespostas(7, event)
})


questao_8.addEventListener('click', function(event){
    armazenaRespostas(8, event)
})


function totalScore(){
    var total_score =
    answers.questao_1+
    answers.questao_2+
    answers.questao_3+
    answers.questao_4+
    answers.questao_5+
    answers.questao_6+
    answers.questao_7+
    answers.questao_8;

    return total_score;
}


function pegarInfoBaseadoNoScore(){
    if(totalScore()< 7){
        var score_info = "Vocé é dev";

    } else if (totalScore()> 7){
        var score_info= "Parabéns vc é mto dev"
    }

    return score_info;
}



var sub1 = document.getElementById('submit1');
var sub2 = document.getElementById('submit2');
var sub3 = document.getElementById('submit3');
var sub4 = document.getElementById('submit4');
var sub5 = document.getElementById('submit5');
var sub6 = document.getElementById('submit6');
var sub7 = document.getElementById('submit7');
var sub8 = document.getElementById('submit8');



function proximaQuestao(numero_questao){
    var atual_numero_questao = numero_questao - 1;
    var numero_questao = numero_questao.toString();
    var atual_numero_questao =  atual_numero_questao.toString();

    var elemento1 = document.getElementById('qu-' + numero_questao);
    var elemento2 = document.getElementById('qu-' + atual_numero_questao);


    elemento1.style.display = "block";
    elemento2.style.display = "none";
   
}


sub1.addEventListener('click', function(){
    proximaQuestao(2);
    growProgressBar('5%');


})

sub2.addEventListener('click', function(){
    proximaQuestao(3);
    growProgressBar('40%');


})

sub3.addEventListener('click', function(){
    proximaQuestao(4);
    growProgressBar('45%');


})

sub4.addEventListener('click', function(){
    proximaQuestao(5);
    growProgressBar('60%');


})

sub5.addEventListener('click', function(){
    proximaQuestao(6);
    growProgressBar('75%');


})

sub6.addEventListener('click', function(){
    proximaQuestao(7);
    growProgressBar('90%');


})

sub7.addEventListener('click', function(){
    proximaQuestao(8);
    growProgressBar('100%');


})

submit8.addEventListener('click', function(){
    nextQuestion(9);
})

submit8.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = pegarInfoBaseadoNoScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}




