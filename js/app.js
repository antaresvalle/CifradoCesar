// Por medio de un prompt almacenado en la variable input, preguntamos al usuario un mensaje
var input = prompt("Ingresa la palabra que quieras cifrar. Recuerda no inluir espacios en blanco o caracteres especiales");
var upperCaseA = 65;
var upperCaseZ = 90;
var lowerCaseA = 97;
var lowerCaseZ = 122;


// ------ Funcion para validar si el input es correcto ----
function validateInput(input) { 

	var input = input.toUpperCase();

	while(input == "" || input == null){
		input = prompt("Por favor ingresa una palabra");
	}

	for(var i = 0; i < input.length; i++){
		var character = input.charCodeAt(i); 
		//console.log(character);
		//console.log(upperCaseA);
		//console.log(upperCaseZ);
		if(character < upperCaseA || character > upperCaseZ){
			console.log(character + ' no es letra mayuscula');
		} // termina if
	} // termina ciclo for

	return input;
	
} // termina funcion validateInput()


//  ---- Funcion para cifrar un string ----- //
function cipher(word) { 

	document.getElementById("originalSentence").innerHTML = "Texto Original: " + word; // imprimo en html el texto que ingreso el usuario

	var cipherTextUp = []; // array donde se almacenara el texto cifrado
	var cipherTextLw = [];
 
	for (var i = 0; i < word.length; i++) {

		var characterU = word.charCodeAt(i);

		console.log('Esto es codigo ASCCI original: '+ characterU);
    	var cesar = (characterU - 65 +33) % 26 + 65;
    	console.log('Cifrado: '+ cesar);
    	var cipherLetter = String.fromCharCode(cesar);
    	console.log('Texto cifrado: '+ cipherLetter);
    
    	cipherTextUp.push(cipherLetter);
    	var output = cipherTextUp.join('');
    	console.log(output);
	} // termina ciclo for

	document.getElementById("cipherSentence").innerHTML = "Texto cifrado: " + output; // imprimo en html el texto cifrado

  return output; 
} // termina funcion cipher();

// ---- Funcion para descifrar string cifrado ---- //
function descipher(cipherText){

	var noCipherText = [];

	for(var i = 0; i < cipherText.length; i++){
		var cipherCharacter = cipherText.charCodeAt(i);
		console.log('Codigo ASCCI: ' + cipherCharacter);
		var noCesar = (cipherCharacter - 65 - 33) % 26 + 65;
		console.log('No cifrado: ' + noCesar);
		var noCipherLetter = String.fromCharCode(noCesar);

		noCipherText.push(noCipherLetter);
		var output = noCipherText.join('');
  } // termina ciclo for
  document.getElementById("decipherSentence").innerHTML = "Click en boton para descifrar";
  return output;
} // termina funcion decipher();


// *--- Funcion para que al dar clic en boton "Descifrar" aparezca el texto descifrado --- //
function button(){
	document.getElementById("decipherSentence").innerHTML = "Texto descifrado: " + descipher(cipher(validateInput(input)));
} // termina funcion de boton


validateInput(input);
cipher(validateInput(input));
descipher(cipher(validateInput(input)));