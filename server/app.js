const express = require('express');
const app = express();
const http = require('http').Server(app);
const index = require('./routes/index.js');

app.use(express.static('./server/public'));
app.use('/',index);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
    console.log("I'm listening for you: " + app.get("port"));
});
