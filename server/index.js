const express = require('express');
const {createMessage, readMessage, updateMessage, deleteMessage} = require('./controllers/messages_controller');
const app = express();
let portNo = 3001;
//gives express access to parse JSON from the body (req.body)
app.use(express.json());
//I have ZERO CLUE what this does.
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', createMessage);
app.get('/api/messages', readMessage);
app.put('/api/messages/:id', updateMessage);
app.delete('/api/messages/:id', deleteMessage);


// app.listen(portNo, messages_controller);
app.listen(portNo, (() => console.log(`Server is listening on port ${portNo}.`)))