
var workBtn = document.querySelector("#working");
var restBtn = document.querySelector("#break");
var stopBtn = document.querySelector("#stop");

var sound = document.querySelector("#sound");


workBtn.onclick = () => {play(document.querySelector('#worktime'))};
restBtn.onclick = () => {play(document.querySelector('#resttime'))};

function alertSound(){

}

function play (valor){
    var worktimeValue = valor.value*60;

    workBtn.style.display ="none";
    restBtn.style.display ="none";
    stopBtn.style.display ="block";

    intervalo(worktimeValue);
}

function intervalo (worktimeValue){
    var inicioCron = setInterval(function(){

        let timeLeft = new Date(worktimeValue * 1000)
        .toISOString().substr(11, 8);

        if(worktimeValue == 0){
            document.querySelector("#cronometro p").innerHTML = timeLeft;
            botoesStop();
            clearInterval(inicioCron);
            alerta("TEMPO FINALIZADO");
            sound.play();
        }

        console.log(`${worktimeValue} segundos de trabalho`);
        document.querySelector("#cronometro p").innerHTML = timeLeft;
        
        worktimeValue--;
        
    }, 1000)

    stopBtn.onclick = () => {
        worktimeValue == 0;
        document.querySelector("#cronometro p").innerHTML = '00:00:00';
        botoesPlay();
        clearInterval(inicioCron);
        alerta("CRONOMETRO CANCELADO");
    }
}

function botoesStop(){
    workBtn.style.display ="block";
    restBtn.style.display ="block";
    stopBtn.style.display ="none";
}

function botoesPlay(){
    workBtn.style.display ="block";
    restBtn.style.display ="block";
    stopBtn.style.display ="none";
}

function alerta (mensagem){

    let alertaBox = document.querySelector(".alerta-box");
    alertaBox.classList.add("alerta-box-show")
    alertaBox.classList.remove("alerta-box-hidden");
    alertaBox.innerHTML = `
        <h3>${mensagem}</h3>
        <div class="alerta-close">X</div>
    `;

    document.querySelector(".alerta-close").onclick = () => {
        alertaBox.classList.add("alerta-box-hidden");
        alertaBox.classList.remove("alerta-box-show");
    }

}








