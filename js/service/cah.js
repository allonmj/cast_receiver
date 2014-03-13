var listOfPlayers[];
var numPlayers = 0;

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





