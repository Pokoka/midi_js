/*function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

let contador = 0;
while (contador < listaDeTeclas.length) {
       const tecla = listaDeTeclas [contador];
       const instrumento = tecla.classList [1];
       const idAudio = `#som_${instrumento}`
       tecla.onclick = function () {
           tocaSom (idAudio);
       };
       contador += 1;*/

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado ou seletor inválido!')
    } else {
        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

tocarSomDasTeclas();

function tocarSomDasTeclas() {

    for (let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`
        tecla.onclick = function () {
            tocaSom(idAudio);
        };
        tecla.onkeydown = function (evento) {
            if (evento.code === "Space" || evento.keyCode === 13) {
                tecla.classList.add('ativa');
            }

        }
        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }
}