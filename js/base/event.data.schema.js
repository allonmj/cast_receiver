/**
 *  current json schema for chromecast's onEvent data.
 *
 *  @author bhurthib
 */

event.data = {
  requestType = "REQUEST_TYPE",
  requestData = {Additional_data_for_this_specific_request},
  contextData = {Additional_information_about_this_specific_request}
}

event.data.requestType = {
  //the string the name of the request app
}

event.data.requestData = {
  //any additional data use for the request app.  the actual schema of the requestData will depend on the request app
}

event.data.contextData = {
 //include context information like time, phone information, etc. This will be common information to be used across all request apps.
  
}

/**
 * CAH specific schema
 *
 */

event.data.player = {
	//JSON for when a player disconnects
	add = bool,	//whether or not this is a new player being added.  OPTIONAL
	remove = bool, //whether or not this is a player being removed.  OPTIONAL
	playerId = "PLAYER'S NAME",
}

event.data.playerCard = {
	//JSON for when a player plays a white card

}