const msgCripografar = document.querySelector("#mensagemCriptografar");
const msgDescriptografar  = document.querySelector("#mensagemDescriptografada");

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnCriptografado(){
	const textoCriptografado = criptografar(msgCripografar.value);
	msgDescriptografar.value = textoCriptografado;
	msgCripografar.value = "";
}

function btnDescriptografado(){
	const textoCriptografado = descriptografia(msgCripografar.value);
	msgDescriptografar.value = textoCriptografado;
	msgCripografar.value = "";
}

function copiar(){
	msgCripografar.value = msgDescriptografar.value;
	msgDescriptografar.value = " ";
}

function limpar(){
	msgCripografar.value = " ";
	msgDescriptografar.value = " ";

}

function criptografar(msgcriptografada){
	
	let matrizCodigo = [["e","enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]];
	msgcriptografada = msgcriptografada.toLowerCase();

	for ( i = 0 ; i < matrizCodigo.length; i ++){
		if (msgcriptografada.includes(matrizCodigo[i][0])){
			msgcriptografada = msgcriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return msgcriptografada;
}

function descriptografia(msgcriptografada){
	let matrizCodigo = [["e","enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]];
	msgcriptografada = msgcriptografada.toLowerCase();

	for ( i = 0 ; i < matrizCodigo.length; i ++){
		if (msgcriptografada.includes(matrizCodigo[i][1])){
			msgcriptografada = msgcriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}
	return msgcriptografada;
}