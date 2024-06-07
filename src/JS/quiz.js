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
        /*Armazena as respostas no local storage como JSON string */
        localStorage.setItem('answers', JSON.stringify(answers));
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

// Teste para saber o total

function totalScore() {
    var total_score = 0;
    for (let i = 1; i <= 8; i++) {
        total_score += answers['q' + i] || 0;
    }
    return total_score;
}



function pegarInfoBaseadoNoScore(){
    if(totalScore() < 1){
        var score_info = "Vocé é dev";

    } else if (totalScore()> 2){
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
  
    var elemento = document.getElementById('qu-' + numero_questao);
    var questions = document.querySelectorAll('.question');
    
    questions.forEach(function(question) {
        question.style.display = 'none';
    });

    elemento.style.display = "block";

   
}


sub1.addEventListener('click', function(){
    proximaQuestao(2);
    growProgressBar('20%');


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

// RESULTADO - DE TESTE
/*
document.getElementById('submit8').addEventListener('click', function() {
    proximaQuestao(9);
    document.getElementById('grafico').style.display = 'block';
    document.getElementById('questions_nav').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
    //document.getElementById('pic').style.display = 'block';
    document.getElementById('progress_bar').style.display = 'none';
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = pegarInfoBaseadoNoScore();


})

*/

//TESTE DO TESTE

document.getElementById('submit8').addEventListener('click', function() {
    // Supondo que a função proximaQuestao está definida em algum lugar
    proximaQuestao(9);

    // Mostra ou esconde os elementos conforme necessário
    document.getElementById('grafico').style.display = 'block';
    document.getElementById('questions_nav').style.display = 'none';
    document.getElementById('loader').style.display = 'block';
    document.getElementById('pic').style.display = 'block';
    document.getElementById('progress_bar').style.display = 'none';

    // Atualiza o total score e score info
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = pegarInfoBaseadoNoScore();

    // Lógica para mostrar uma imagem diferente dependendo das respostas
    let totalCounts = countTotalResponses();
    console.log("Total count of 'A' responses: " + totalCounts.A);
    console.log("Total count of 'B' responses: " + totalCounts.B);
    console.log("Total count of 'C' responses: " + totalCounts.C);

    let resultImage = document.getElementById('result-image');
    let resultLink = document.getElementById('result-link');
    let roadmapTitle = document.getElementById('roadmap-title');

    // Atualiza a imagem, o link e o título baseado nas contagens
    if (totalCounts.A > totalCounts.B && totalCounts.A > totalCounts.C) {
        resultLink.href = 'map-front.html'; // Link para A
        roadmapTitle.innerText = 'Desenvolvimento Web'; // Título para A
    } else if (totalCounts.B > totalCounts.A && totalCounts.B > totalCounts.C) {
        resultLink.href = 'map-back.html'; // Link para B
        roadmapTitle.innerText = 'Back End'; // Título para B
    } else if (totalCounts.C > totalCounts.A && totalCounts.C > totalCounts.B) {
        resultLink.href = 'map-dados.html'; // Link para C
        roadmapTitle.innerText = 'Data Science'; // Título para C
    } else {
        resultImage.src = 'default.png'; // Caminho da imagem padrão se não houver um claro vencedor
        resultLink.href = 'map-default.html'; // Link padrão
        roadmapTitle.innerText = 'Desenvolvimento Web'; // Título padrão
    }

    // Exibe o contêiner da imagem
    document.getElementById('pic').style.display = 'block';
});









function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}





// Conta as respostas 
function countTotalResponses() {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    let radios = document.querySelectorAll('.questions_box input[type="radio"]');


    radios.forEach(radio => {
        if (radio.checked) {
        
            if (radio.value === '1') {
                countA++;
            } else if (radio.value === '2') {
                countB++;
            } else if (radio.value === '3') {
                countC++;
            }
        }
    });

    return { A: countA, B: countB, C: countC };
}

// Mostra a quantidade que cada resposta foi selecionada
document.getElementById('submit8').addEventListener('click', function() {
    let totalCounts = countTotalResponses();
    console.log("Total count of 'A' responses: " + totalCounts.A);
    console.log("Total count of 'B' responses: " + totalCounts.B);
    console.log("Total count of 'C' responses: " + totalCounts.C);
});



 //Lógica para escolher como irá ficar a última pergunta em relação as respostas

 function countTotalResponses() {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    let radios = document.querySelectorAll('.questions_box input[type="radio"]');

    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.value === '1') {
                countA++;
            } else if (radio.value === '2') {
                countB++;
            } else if (radio.value === '3') {
                countC++;
            }
        }
    });

    return { A: countA, B: countB, C: countC };
}

document.getElementById('submit7').addEventListener('click', function() {
    let totalCounts = countTotalResponses();
    console.log("Total count of 'A' responses: " + totalCounts.A);
    console.log("Total count of 'B' responses: " + totalCounts.B);
    console.log("Total count of 'C' responses: " + totalCounts.C);
    // Testado Pode escolher entre Front a BackEnd
    if (totalCounts.A === 3 && totalCounts.B === 3) {
        document.getElementById('q8-resposta-C').parentNode.style.display = 'none';
    }
     // Testado Pode escolher entre Front a DB
    else if (totalCounts.A === 3 && totalCounts.C === 3) {
        document.getElementById('q8-resposta-B').parentNode.style.display = 'none';
    }
     // Testado Pode escolher entre BackEnd a DB
    else if (totalCounts.B === 3 && totalCounts.C === 3) {
        document.getElementById('q8-resposta-A').parentNode.style.display = 'none';
    }
    // Testado Se a pessoa marca mais Back ela pode escolher entre DB e BackEnd

    else if (totalCounts.B > totalCounts.C &&  totalCounts.C === totalCounts.A  ) {
        document.getElementById('q8-resposta-A').parentNode.style.display = 'none';
    }
    // Testado Se a pessoa marca mais DB ela pode escolher entre DB e BackEnd
    else if (totalCounts.C > totalCounts.A && totalCounts.A  === totalCounts.B  ) {
        document.getElementById('q8-resposta-A').parentNode.style.display = 'none';
    }
    // Testado Se a pessoa marca mais Front ela pode escolher entre Front e BackEnd
    else if (totalCounts.A > totalCounts.B  &&  totalCounts.B === totalCounts.C  ) {
        document.getElementById('q8-resposta-C').parentNode.style.display = 'none';
    }

});



// Para não enviar o form vazio

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('questions_form').addEventListener('submit', function(event) {
        // Obtém todas as respostas selecionadas
        let answers = {};
        let questions = document.querySelectorAll('.question');
        questions.forEach(function(question, index) {
            let questionNumber = index + 1;
            let selectedAnswer = question.querySelector('input[type="radio"]:checked');
            if (selectedAnswer) {
                answers['qu-' + questionNumber] = selectedAnswer.value;
            } else {
                answers['qu-' + questionNumber] = null;
            }
        });

        // Verifica se pelo menos uma resposta foi selecionada
        let hasAnswer = Object.values(answers).some(answer => answer !== null);
        if (!hasAnswer) {
            alert('Por favor, selecione pelo menos uma resposta antes de enviar o formulário.');
            event.preventDefault(); // Evita o envio do formulário se nenhuma resposta for selecionada
        } else {
            // Grava as respostas em um arquivo JSON
            let jsonData = JSON.stringify(answers);
            console.log(jsonData);
            // Aqui você pode enviar os dados para o servidor ou fazer qualquer outra coisa com eles
        }
    });
});


// Para mostrar o loading
document.querySelector('.quiz-form').addEventListener('submit', function(event) {
    // Impede que o formulário seja enviado normalmente
    event.preventDefault();

    // Mostra o loader imediatamente
    document.querySelector('.style-quiz-loading').style.display = 'block';

    // Define a duração do tempo de exibição do loader (em milissegundos)
    var loaderDisplayTime = 5000; // 5 segundos

    // Simula um atraso antes de mostrar o resultado
    setTimeout(function() {
        // Esconde o loader
        document.querySelector('.style-quiz-loading').style.display = 'none';

        // Mostra o resultado do quiz
        document.querySelector('.quiz-result').style.display = 'block';
    }, loaderDisplayTime); 
});




/*Checar se todas as perguntas estão sendo respondidas */
function verificarRespostas() {
    var todasRespondidas = true;
    var perguntas = document.querySelectorAll('.question');

    for (var i = 0; i < perguntas.length - 1; i++) {
        var respostaSelecionada = perguntas[i].querySelector('input[type="radio"]:checked');
        if (!respostaSelecionada) {
            todasRespondidas = false;
            break;
        }
    }

    if (todasRespondidas) {
        document.getElementById('qu-9').style.display = 'block';
    } else {
        document.getElementById('qu-9').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var botoesEnviar = document.querySelectorAll('.button[type="submit"]');
    botoesEnviar.forEach(function(botao) {
        botao.addEventListener('click', function(event) {
            event.preventDefault();
            verificarRespostas();
        });
    });
});

/*Funções para as bolinhas na parte inferior */


function selectBall(ballNumber) {
    var balls = document.querySelectorAll('.ball');
    balls.forEach(function(ball) {
        ball.classList.remove('selected');
    });

    var selectedBall = document.querySelector('.ball:nth-child(' + ballNumber + ')');
    selectedBall.classList.add('selected');

    proximaQuestao(ballNumber);

    if (ballNumber > 1) {
        var previousQuestion = document.getElementById('qu-' + (ballNumber - 1));
        previousQuestion.style.display = 'none';
    }
}

document.querySelectorAll('.ball').forEach(function(ball, index) {
    ball.addEventListener('click', function() {
        selectBall(index + 1);
    });
});



