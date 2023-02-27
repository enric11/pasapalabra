// Variables
// -----------------------------------------------------------------------------

var words = [
	new Word(0, "A", "Empieza por A:", " ¿Qué es la gobernanza ágil?", "Agilidad"),
	new Word(1, "B", "Empieza por B:", " ¿Cuál es el objetivo principal de la gobernanza ágil?", "Beneficio"),
	new Word(2, "C", "Empieza por C:", " ¿Cuáles son las principales características de la gobernanza ágil?", "Colaboración"),
	new Word(3, "D", "Empieza por D:", " ¿Cuáles son los beneficios de la gobernanza ágil para una organización?", "Desarrollo"),
	new Word(4, "E", "Empieza por E:", " ¿Cómo se toman las decisiones en la gobernanza ágil?", "Experimentación"),
	new Word(5, "F", "Empieza por  F:", " ¿Cómo se asegura la transparencia en la gobernanza ágil?", "Feedback"),
	new Word(6, "G", "Empieza por G:", " ¿Cómo se mantienen los equipos motivados en la gobernanza ágil?", "Gestión"),
	new Word(7, "H", "Empieza por  H:", " ¿Cómo se fomenta la innovación en la gobernanza ágil?", "Horizonte"),
	new Word(8, "I", "Empieza por I:", " ¿Cómo se asegura la responsabilidad en la gobernanza ágil?", "Integridad"),
	new Word(9, "J", "Empieza por J:", " ¿Cómo se promueve el aprendizaje continuo en la gobernanza ágil?", "Justicia"),
	//¿Qué papel juega la colaboración en la gobernanza ágil? - Koinonía
	new Word(10, "L", "Empieza por  L:", " ¿Qué es la gobernanza sociocrática y cómo se relaciona con la gobernanza ágil?", "Liderazgo"),
	new Word(11, "M", "Empieza por M:", " ¿Cómo se define el éxito en la gobernanza ágil?", "Medición"),
	new Word(12, "N", "Empieza por N:", " ¿Cómo se garantiza la calidad en la gobernanza ágil?", "Normas"),
	//new Word(13, "Ñ", "Empieza por  Ñ:", " Dar a una cosa un color distinto del que tiene.", "Optimización"),
	new Word(14, "O", "Empieza por O:", " ¿Qué es el enfoque Lean en la gobernanza ágil?", "Optimización"),
	new Word(15, "P", "Empieza por P:", " ¿Cómo se asegura la participación y el compromiso en la gobernanza ágil?", "Participación"),
	new Word(16, "Q", "Empieza por Q:", " ¿Cómo se mide el progreso en la gobernanza ágil?", "Quantificación"),
	new Word(17, "R", "Empieza por R:", " ¿Cómo se garantiza la seguridad de la información en la gobernanza ágil?", "Resguardo"),
	new Word(18, "S", "Empieza por S:", " ¿Cómo se mantiene la estabilidad en la gobernanza ágil?", "Sostenibilidad"),
	new Word(19, "T", "Empieza por T:", " ¿Cómo se fomenta la confianza en la gobernanza ágil?", "Transparencia"),
	new Word(20, "U", "Empieza por U:", " ¿Cómo se gestionan los riesgos en la gobernanza ágil?", "Unificación"),
	new Word(21, "V", "Empieza por V:", " ¿Cómo se definen las prioridades en la gobernanza ágil?", "Valoración"),
	new Word(22, "X", "Empieza por X:", " ¿Cómo se fomenta la autonomía y la responsabilidad en la gobernanza ágil?", "Xenodoquia"),
	new Word(23, "Y", "Empieza por Y:", " ¿Qué es el enfoque de la gestión visual en la gobernanza ágil?", "Yuxtaposición"),
	new Word(24, "Z", "Empieza por Z:", " ¿Cómo se manejan los cambios en la gobernanza ágil?", "Zumbido")
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

function checkAnswer(pos) {
	var userAnswer = $("#js--user-answer").val().toLowerCase();
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
