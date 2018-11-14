// Import the messaging module
import * as messaging from "messaging";
// Import document
import document from "document";

let log = document.getElementById("log");
log.text = "hullo";

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  // Output the message to the console
  const readable = JSON.stringify(evt.data);
  console.log(readable);
  log.text = readable;
};
