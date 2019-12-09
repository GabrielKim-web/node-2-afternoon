let messages = [];
let id = 0;

function createMessage (req, res) {
   let message = {
      id: id,
      // reads text and time properties written in body.json and assigns them to message's key-value pairs
      text: req.body.text,
      time: req.body.time
   }
   //increment by 1 so each message has a unique id
   id++;
   messages.push(message);
   res.status(200).json(messages);
}

function readMessage (req, res) {
   res.status(200).json(messages);
}

function updateMessage (req, res) {
   // need to match ID
   const {id} = req.params;
   const index = messages.findIndex(element => element.id == id);
   //if index is truthy (not -1), edit that message
   if (index !== -1) {
      //if text of body is empty, do not edit the message
      if (req.body.text !== '') {
         messages[index].text = req.body.text;
      }
   }
   res.status(200).json(messages);
}

function deleteMessage (req, res) {
   // remember that we created the params id in the delete path
   const {id} = req.params;
   let index = messages.findIndex((element) => element.id == id);
   if (index !== -1) {
      messages.splice(index, 1);
   }
   res.status(200).json(messages);
}

module.exports = {
   createMessage,
   readMessage,
   updateMessage,
   deleteMessage
}