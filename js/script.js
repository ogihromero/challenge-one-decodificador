const inputTexto = document.getElementById("box-criptografia__texto-alvo");
const resultado = document.querySelector(".box-resultado__texto");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    resultado.value = textoEncriptado;
    resultado.style.backgroundImage ="none";
}

function btnDesencritpar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    resultado.value = textoEncriptado;
    resultado.style.backgroundImage ="none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();
    let stringDesencriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDesencriptada;

}

function desencriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();
    let stringDesencriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;

}
