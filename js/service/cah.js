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
		
		if(data.player.add){
			if($.inArray(data.player.playerId, listOfPlayers) < 0){
				listOfPlayers.push(data.player)
			}
			
			return;
		}
		if(data.player.remove){

			
			if($.inArray(data.player.playerId, listOfPlayers) > -1){
				listOfPlayers = jQuery.grep(listOfPlayers, function(value) {
				  return value != data.player.playerId;
				});
				
				if(numPlayers > 0){
					numPlayers--;
				}
				log("Player " + data.player.playerId + " has disconnected.");
				return;
			}
			log("Error: Player " + data.player.playerId + " was not found.");
			
			return;
		}
		
		
		
	}
	
	if(data.playerCard){
		handlePlayerCard(data);
		
	}
	
	
	
}


/**
 * handles a white card being played
 * 
 * @param data
 */
function handlePlayerCard(data){
	
}