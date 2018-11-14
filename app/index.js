// Import the messaging module
import * as messaging from 'messaging'
// Import document
import document from 'document'

let station1 = document.getElementById('station-1')

// Listen for the onmessage event
messaging.peerSocket.onmessage = message => {
  // Output the message to the console
  console.log('message: ' + message)
  const data = message.data
  console.log('data: ' + data)
  const arrivalTime = data.arrivalTime
  console.log('arrivalTime: ' + arrivalTime)
  const readable = JSON.stringify(message)
  console.log('readable: ' + readable)

  // const arrivalTime = readable.data
  // console.log('arrivalTime: ' + arrivalTime)
  // station1.text = arrivalTime
  let mixedtext = document.getElementById('mixedtext')
  // mixedtext.text = "The Header";

  let body = mixedtext.getElementById('copy')
  body.text = arrivalTime.toString()
}
