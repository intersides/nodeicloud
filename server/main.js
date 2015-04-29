/**
 * Created by marco.falsitta on 04/04/15.
 */
var dev = false;
var maxEvent = 500;

var colors = require('colors');

var CircularJSON = require('circular-json');
var favicon = require('serve-favicon');
var express = require('express');
var WebSocketServer = require('ws').Server;
var http = require('http');
var fs = require('fs');

var publicPort = 7777;//PUBLIC PORT
var channelledPort = process.env['PORT'] || 5000; //WS DEFAULT PORT

var eventArray = [];


var app = express();
app.use(express.static(__dirname+"/../"));
app.use(favicon(__dirname+"/../favicon.ico"));

//load the router module
require('./router/routes.js')(app);




//HTTP SERVER to handle GET, POST, ajax, etc...
app.listen(publicPort, function(){
    var _httpServer = this;
    console.log('http server listening at http://%s:%s', _httpServer.address().address, _httpServer.address().port);
});


//WEBSOCKET SERVER
var wsServer = new WebSocketServer({port:channelledPort}, function(){
    console.log('webSocket server listening at ws://%s'.inverse, this._connectionKey);
});
wsServer.on('connection', function(ws){
    console.log('web-socket connection opened'.blue);

    ws.on('open', function open() {
        console.log('connected'.blue);
        ws.send(Date.now().toString(), {mask: true});
    });

    ws.on('close', function close() {
        console.log('disconnected'.red);
    });

    ws.on('message', function message(data, flags) {
        console.log('message received '.magenta);

        //console.log(CircularJSON.parse(data));
        var clientMessage = JSON.parse(data);
        console.log('received: %j', JSON.parse(data));

        var clientEvent = clientMessage.clientEvent;
        var clientData = clientMessage.data;


        switch(clientEvent){

            case "onOpen":{
                console.log('onOpen received');

                ws.send(CircularJSON.stringify({msgType:"onPrepareToSendAllEvents", msg:null}));



            }break;

            case "onReadyToReceive":{
                console.log('onOpen onReadyToReceive');

                setTimeout(function timeout() {
                    ws.send(CircularJSON.stringify({msgType:"onAllEventObjectsSent", msg:null}));
                    console.log("all event objects have been sent !".yellow);
                }, 500);

            }break;

            case "onShareSelected":{
                console.log('onShareSelected');
                //console.log(clientData);

                setTimeout(function timeout() {
                    ws.send(CircularJSON.stringify({msgType:"onShareSelected", msg:{sent:true}}));
                    console.log("onShareSelected have been sent !".yellow);
                }, 500);



            }break;


            default:{
                console.log('un-handle client event type'.red);


            }break;
        }




    });

});