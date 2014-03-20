var isLoadedAdditionalCahFiles = false;

function start() {
	cast.receiver.logger.setLevelValue(0);
	window.castReceiverManager = cast.receiver.CastReceiverManager
			.getInstance();
	log('Starting Receiver Manager');
	console.log('Starting Receiver Manager');

	// handler for the 'ready' event
	castReceiverManager.onReady = function(event) {
		log('Received Ready event: ' + JSON.stringify(event.data));
		console.log('Received Ready event: ' + JSON.stringify(event.data));

		window.castReceiverManager
				.setApplicationState("Application status is ready...");
	};

	// handler for 'senderconnected' event
	castReceiverManager.onSenderConnected = function(event) {
		log('Received Sender Connected event: ' + event.data);
		console.log('Received Sender Connected event: ' + event.data);

		log(window.castReceiverManager.getSender(event.data).userAgent);

		var playerNumber = window.castReceiverManager.getSenders().length + 1;
		displayPlayerConnection(playerNumber, true);
	};

	// handler for 'senderdisconnected' event
	castReceiverManager.onSenderDisconnected = function(event) {
		log('Received Sender Disconnected event: ' + event.data);
		console.log('Received Sender Disconnected event: ' + event.data);

		var playerNumber = window.castReceiverManager.getSenders().length + 1;

		if (playerNumber == 1) {
			window.close();
		} else {
			displayPlayerConnection(playerNumber, false);
		}
	};

	// handler for 'systemvolumechanged' event
	castReceiverManager.onSystemVolumeChanged = function(event) {
		log('Received System Volume Changed event: ' + event.data['level']
				+ ' ' + event.data['muted']);
	};

	// create a CastMessageBus to handle messages for a custom namespace
	window.messageBus = window.castReceiverManager
			.getCastMessageBus('urn:x-cast:com.google.cast.sample.helloworld');

	// handler for the CastMessageBus message event
	window.messageBus.onMessage = function(event) {
		log('Message [' + event.senderId + ']: ' + JSON.stringify(event.data), 'outputDiv');
		console.log('Message [' + event.senderId + ']: ' + JSON.stringify(event.data), 'outputDiv');

		if (event.data.requestType === "CAH") {
			log("RequestType is 'CardsAgainstHumanity'");
			loadAdditionalCahFiles();
			cah(event.data.requestData);

		}

		if (event.data === 'a' || event.data === 'b' || event.data === 'c'
				|| event.data === 'd') {
			document.getElementById("player2").innerHTML = event.senderId
					+ " answered " + event.data;
			if (event.data == 'c') {
				document.getElementById("player4").innerHTML = "Correct!";
			} else {
				document.getElementById("player4").innerHTML = "Wrong!";
			}
		}
		// display the message from the sender
		// displayText(event.data);
		// inform all senders on the CastMessageBus of the incoming message
		// event
		// sender message listener will be invoked
		window.messageBus.send(event.senderId, event.data);
	};
	// initialize the CastReceiverManager with an application status message
	window.castReceiverManager.start({
		statusText : "Application is starting"
	});
	log('Receiver Manager started');
};

// utility function to display the text message in the input field
function displayText(text) {
	log(text);
	document.getElementById("message").innerHTML = text;
	window.castReceiverManager.setApplicationState(text);
};

function displayPlayerConnection(playerNumber, connected) {
	log("player " + playerNumber + "connected ? " + connected);
	document.getElementById("player" + playerNumber).innerHTML = "player "
			+ playerNumber + "c?" + connected;
	window.castReceiverManager.setApplicationState("huh?");
};

function loadAdditionalCahFiles() {

	if (!isLoadedAdditionalCahFiles) {
		
		$.each(listOfCahFilesToLoad, function(index, value){
			$.getScript(cah_dir_home+value, function(){
				log("loaded " +value);
			});
		});
		
		isLoadedAdditionalCahFiles = true;
	}
}

function log(message, divId) {
	//log(message);
	if (null === divId || divId === "") {
		divId = "outputDiv";
	}
	$("#" + divId).val($("#" + divId).val() + "\n" + message);
}

var cah_dir_home = "js/service/";
var listOfCahFilesToLoad[] = ["cah.js", "cah_player.js", "cah_card.js"];
