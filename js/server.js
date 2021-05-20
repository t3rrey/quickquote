// https://zellwk.com/blog/crud-express-mongodb/



const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('using port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});