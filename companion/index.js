// Import the messaging module
import * as messaging from 'messaging'
// TriMet API
import { endpoint } from './api'
// Import Config
import { appID } from '../config'
// Moment
import moment from 'moment'

// Listen for the onopen event
messaging.peerSocket.onopen = function() {
  // console.log(getArrivals())
  getArrivals().then(data => {
    sendMessage(data)
  })
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log('Connection error: ' + err.code + ' - ' + err.message)
}

// Send a message to the peer
const sendMessage = messageObj => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send(messageObj)
  }
}

const getArrivals = () => {
  return fetch(endpoint + '?locIDs=13724' + '&appID=' + appID + '&minutes=10')
    .then(response => response.json())
    .then(data => {
      const arrivalArray = data.resultSet.arrival
      const arrivalTime = moment(arrivalArray[0].scheduled).format("hh:mm:ss")
      console.log(arrivalTime)
      return { arrivalTime }
    })
    .catch(error => console.error(error))
}
