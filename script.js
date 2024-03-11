const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let matrizCodico = [["e", "enter"] , ["i", "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encriptar(stringEncriptada) {
    let matrizCodico = [["e", "enter"] , ["i", "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodico; i++); {
        if(stringEncriptada.includes(matrizCodico[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodico[i][0], matrizCodico[i][1]);
        }
    }

    return stringEncriptada;
}

function Desencriptar(stringDesencriptar) {
    let matrizCodico = [["e", "enter"] , ["i", "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodico.length; i++); {
        if(stringDesencriptar.includes(matrizCodico[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodico[i][0] , matrizCodico[i][0]);
        }
    }
    return stringDesencriptar;
}