# Run the project

The project depends on node.js since it implements a pre-loader useful for large data transfer.
Nodejs is also used to send email notifications as part of the task to share "interesting data" with team members.

User npm to install the node modules locally and **npm start** to run the applicatin server.

1 - npm install

2 - npm start

3 - navigate to ** [http://localhost:7777/](http://localhost:7777/ "local project") **

**The current code is only optimized for latest Chrome. (I only tested on OS X Yosemite) **


# Nodei Cloud Production log

This file should be considered as a development diary and not a production document therefore it might not be correctly updated with the latest code.


### WISH LIST

* `item1`: blah blah blah.
* `item2`: blah blah blah.
* `item3`: blah blah blah.


### TODO LIST


### THE SERVER

The server is a node.js server. It is split into a http server and a web-socket server. The client communicates with ajax POSTs and with a web-socket tunnel.

### SERVER REQUIREMENTS

* Install the npm modules
* run `npm start`

**Read the console of the node.js server. Http server responds to port 7777, ws-socket server to port 5000**.

### CLASSES 
JS function describing object are in js/entities.

* `EventManager.js`:  keep tracks of event stream and current event. Watches on event array changes and emits DOM events for drawing items. It should also implement lower level data-management such linked-list (still in wish list)
* `SREventElement.js`: wrapper to build jQuery "avatars" to display event content.

## TOOLS

## Diary


