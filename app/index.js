// Import the messaging module
import * as messaging from 'messaging'
// Import document
import document from 'document'

// Listen for the onmessage event
messaging.peerSocket.onmessage = message => {
  // Output the message to the console
  const data = message.data
  const arrivalTime = data.arrivalTime
  let mixedtext = document.getElementById('mixedtext')
  let body = mixedtext.getElementById('copy')
  body.text = arrivalTime
}
