// Variables
// -----------------------------------------------------------------------------

var words = [
new Word(0, "A", "Comença per A:", "Que busca la governança àgil?", "agilitat"),
new Word(1, "B", "Amb la B:", "responsabilitat i autoritat que s'atorga a cada membre de l'equip per aconseguir els objectius i lliurar valor al client i al negoci, a través d'una clara definició de rols i responsabilitats i una major autonomia i empoderament de l'equip", "accountabilities "),
new Word(2, "C", "Comença per C:", "document que estableix les bases i principis fonamentals que guien l'organització i el funcionament de l'equip", "constitucio"),
new Word(3, "D", "Comença per D:", "Gracies a la governança àgil, permet que els equips i organitzacions àgils siguin capaces d'adaptar-se ràpidament als canvis i necessitats ", "dinamisme"),
new Word(4, "E", "Amb la lletra E:", "grup de persones que treballen juntes en un àmbit específic i que comparteixen una visió i objectius comuns", "cercle"),
new Word(5, "F", "Comença per F:", "Càrrec electe que assegurar que les reunions i les interaccions entre els membres de l'equip siguin efectives, eficients i satisfactòries per a tothom, i que es respectin els valors, principis i normes establerts per a la governança àgil", "facilitador"),
new Word(6, "G", "Amb la lletra G:", "Trobada o reunió que ajuda a definir les prioritats i a establir les bases per a la presa de decisions en la governança àgil. Per fer-ho es fa una dinàmica de retrospectiva a fi de millorar el bon funcionament del cercle", "estrategia"),
new Word(7, "H", "Comença per H:", "Eina o portal que s'utilitza per portar el cens de rols, documentar les diferents reunions o trobades entre altres ", "holoon"),
new Word(8, "I", "Amb la lletra I:", "Interacció informal entre membres de l'equip o entre diferents equips que té lloc en el corredor o en espais comuns de l'organització. Aquesta forma de comunicació és una alternativa a les reunions formals i planificades, i es caracteritza per ser més ràpida, eficient i centrada en problemes o qüestions específiques. Reunió de _____", "passadis"),
new Word(9, "J", "Comença per J:", " la ________ en la governança àgil es basa més en la delegació de responsabilitats i en la capacitat de lideratge dels membres de l'equip que en una estructura _______ tradicional", "jerarquia"),
new Word(10, "L", "Amb la lletra L:", "són responsabilitats clarament definides i assignades a membres específics de l'equip o de l'organització. Això significa que cada persona té una llista específica de tasques i responsabilitats que ha d'assumir i que és responsable de portar a terme", "accountabilities"),
new Word(11, "M", "Comença per M:", "Figura que ajuda a assegurar la formació contínua i la millora continua dels membres de l'equip en matèria de governança àgil, així com per fomentar una cultura de col·laboració i aprenentatge en l'organització àgil", "mentor"),
new Word(12, "N", "Amb la lletra N:", "Reunió regular que es realitza entre els membres del cercle per mantenir-se alineats i coordinats en el progrés del projecte o producte, també es on es portaran les tensions per ser tractades per els diferents rols", "sincronitzacio"),
new Word(13, "O", "Amb la lletra O:", " és una declaració clara i concisa que estableix la raó d'existir del cercle", "proposit"),
new Word(14, "P", "Comença per P:", "És la persona o rol que té una visió clara del que s'espera del cercle i és capaç de comunicar aquesta visió a l'equip. També es el responsable de crear el cercle i definir i assignar els rols inicialment", "principal"),
new Word(15, "Q", "Comença per Q:", "gracies a la entrega continua de productes o serveis que satisfacin  les necessitats i expectatives de l'hospital i a una comunicació continua, millorem la _____ dels nostres productes", "qualitat"),
new Word(16, "R", "Comença per R:", "Funció o responsabilitat específica dins d'un equip o organització. Té les seves pròpies responsabilitats, tasques i objectius, i és important per assegurar que les tasques es compleixin de manera eficaç i eficient", "rol"),
new Word(17, "S", "Comença per S:", "Càrrec electe que s'encarrega de la gestió de les reunions, actes i interpretacions dels propòsits i la constitució", "secretari"),
new Word(18, "T", "Comença per T:", "Resulta de la diferència entre el que és i el que podria ser (no és positiu, tampoc negatiu), se sent o s’observa quan actuem o experimentem", "tensio"),
new Word(19, "U", "Amb la lletra U:", "S'encarrega de recollir tensions que no es poden solucionar en el cercle i portar-les al cercle superior. Enllaç ____", "representatiu"),
new Word(20, "V", "Comença per V:", "Gracies a la governança àgil, els membres de la DSI tenim més autonomia i això millora la nostre ____ dins el grup", "visibilitat"),
new Word(21, "Ç", "Amb la lletra Ç:", "Trobada periòdica on s'actualitzen les polítiques del cercle i ajuda a assegurar que totes les parts interessades estiguin involucrades en la presa de decisions i que cercle segueixi una direcció clara i coherent", "governança"),
new Word(22, "Y", "Amb la lletra Y:", "valor important en la governança àgil, ja que s'espera que els membres de l'equip treballin junts de manera col·laborativa i donin suport mútuament per assolir els objectius. Això implica un enfocament en la comunicació efectiva, la transparència i la confiança", "acompanyament"),
new Word(23, "Z", "Amb la lletra Z:", "El que fa un rol per arribar als propòsits (i responsabilitats) en la seva saviesa", "energitza"),
new Word(23, "*", "Qualsevol lletra", "Quina és la postura adequada que ha de tenir quan fas de facilitador?", "adult")

];

// Functions
// -----------------------------------------------------------------------------

function Word(idNumber, letter, hint, definition, word, correct) {
	this.idNumber = idNumber;
	this.letter = letter;
	this.hint = hint;
	this.definition = definition;
	this.word = word;
	this.correct = null;
}

function showDefinition(pos) {
	$("#js--hint").html(words[pos].hint);
	$("#js--definition").html(words[pos].definition);
}

var remainingWords = 25;

function treureAccens(cadena) {
  return cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
	
	userAnswer = treureAccens(userAnswer);
	
	if (userAnswer == words[pos].word.toLowerCase()) {
		words[pos].correct = true;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--success");

	} else {
		words[pos].correct = false;
		$(".circle .item").eq(words[pos].idNumber).addClass("item--failure");
	}
	remainingWords--;
	$("js--score").html(remainingWords);

	return count++;
}

function pasapalabra(pos) {
	var w = words.splice(pos, 1)[0];
	words.push(w);

}

function continuePlaying() {
	if (count != 25) {
		$("#js--user-answer").val("");
		showDefinition(count);
	} else {
		endGame();
	}
}

var seconds;
var temp;

function countdown() {
	seconds = $("#js--timer").html();
	seconds = parseInt(seconds, 10);
	if (seconds == 1) {
		temp = $("#js--timer");
		temp.innerHTML = 0;
		endGame();
		return;
	}
	seconds--;
	temp = $("#js--timer");
	temp.html(seconds);
	timeoutMyOswego = setTimeout(countdown, 1000);
}

function endGame() {
	$("#js--question-controls").addClass("hidden");
	$("#js--pa-controls").removeClass("hidden");
	$("#js--end-title").html("Partida finalitzada!");
	$("#js--end-subtitle").html(showUserScore());
	$("#js--close").addClass("hidden")
}

function showUserScore() {
	var counter = 0;
	for (i = 0; i < words.length; i++) {
		if (words[i].correct == true) {
			counter++;
		}
	}
	return "Has fet un total de " + counter + " encerts.";
}


// Main Program
// ----------------------------------------------------------------------------- */

// New game
var count = 0; // Counter for answered words
$("#js--new-game").click(function() {
	$("#js--ng-controls").addClass("hidden");
	$("#js--question-controls").removeClass("hidden");
	$("#js--close").removeClass("hidden");
	showDefinition(count);
	countdown();
});

// Send the answer
$("#js--send").click(function() {
	checkAnswer(count);
	continuePlaying();
});

// Key bindings for send the answer
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "13") {
		checkAnswer(count);
		continuePlaying();
	}
});

// Skip the word
$("#js--pasapalabra").click(function() {
	pasapalabra(count);
	continuePlaying();
});

// Key bindings for skip the word
$("#js--question-controls").keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == "32") {
		pasapalabra(count);
		continuePlaying();
	}
});

// Play again
$("#js--pa").click(function() {
	location.reload()
});

// End the game
$("#js--close").click(function() {
	endGame();
});
