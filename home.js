function start() {
				cast.receiver.logger.setLevelValue(0);
				window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
				console.log('Starting Receiver Manager');

				// handler for the 'ready' event
				castReceiverManager.onReady = function(event) {
					console.log('Received Ready event: ' + JSON.stringify(event.data));
					window.castReceiverManager.setApplicationState("Application status is ready...");
				};

				// handler for 'senderconnected' event
				castReceiverManager.onSenderConnected = function(event) {
					console.log('Received Sender Connected event: ' + event.data);
					console.log(window.castReceiverManager.getSender(event.data).userAgent);

					var playerNumber = window.castReceiverManager.getSenders().length + 1;
					displayPlayerConnection(playerNumber, true);
				};

				// handler for 'senderdisconnected' event
				castReceiverManager.onSenderDisconnected = function(event) {
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
					console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' + event.data['muted']);
				};

				// create a CastMessageBus to handle messages for a custom namespace
				window.messageBus = window.castReceiverManager.getCastMessageBus('urn:x-cast:com.google.cast.sample.helloworld');

				// handler for the CastMessageBus message event
				window.messageBus.onMessage = function(event) {
					console.log('Message [' + event.senderId + ']: ' + event.data);
					document.getElementById("player1").innerHTML = event.senderId;
					document.getElementById("player3").innerHTML = event.data;
					// display the message from the sender
					displayText(event.data);
					// inform all senders on the CastMessageBus of the incoming message event
					// sender message listener will be invoked
					window.messageBus.send(event.senderId, event.data);
				};
				// initialize the CastReceiverManager with an application status message
				window.castReceiverManager.start({
					statusText : "Application is starting"
				});
				console.log('Receiver Manager started');
			};

			// utility function to display the text message in the input field
			function displayText(text) {
				console.log(text);
				document.getElementById("message").innerHTML = text;
				window.castReceiverManager.setApplicationState(text);
			};

			function displayPlayerConnection(playerNumber, connected) {
				console.log("player " + playerNumber + "connected ? " + connected);
				document.getElementById("player" + playerNumber).innerHTML = "player " + playerNumber + "c?" + connected;
				window.castReceiverManager.setApplicationState("huh?");
			};
		
