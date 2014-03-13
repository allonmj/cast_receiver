var listOfPlayers = [];
var numPlayers = 0;
var sentenceCards = [];
var playerCards = [];

/**
 * Main method for CAH
 * 
 * @param data -
 *            the JSON data
 */
function cah(data){
	
	log("arrived in cah.js" + JSON.stringify(data));
	
	if(data.player){
		handlePlayer(data);

	}
	
	if(data.playerCard){
		handlePlayerCard(data);
		
	}
	
	if(data.sentenceCard){
		handleSentenceCard(data);
	}
}

/**
 * Generate the sentence cards
 */
playerCards.push("Godzilla");
playerCards.push("Salamander");
playerCards.push("Waffle Ironed Grilled Cheese");
playerCards.push("Lumpy Sausage Poop");
playerCards.push("Skinny Funfetti");
playerCards.push("Basket Weaving T-Shirts");
playerCards.push("Dump Truck");
playerCards.push("Smokey Bacon");
playerCards.push("Hourglass Body");
playerCards.push("Pregnancy Yoga");
playerCards.push("Bubble Refill Stations");
playerCards.push("Nutella Cheesecake Dip");
playerCards.push("Tax Season");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards.push("");
playerCards = shuffle(playerCards);
 
/**
 * Generate the player cards
 */
sentenceCards.push("_____ just destroyed the city!");
sentenceCards.push("_____, always good for one last beer.");
sentenceCards = shuffle(sentenceCards);

function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


