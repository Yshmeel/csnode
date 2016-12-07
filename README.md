# csnode
Simple CSGO cheat written in node.
This was an hour long project or so just to do a further break down of a node cheat for CSGO. Seperating out functionality into different modules, allowing for more re-usable code.
I will be updating this later with more features and maybe generate a yoman boilerplate for game functionality.

##Merge requests are welcome!##

## How to "install/build" it
* First off you will need nodejs (x86) - https://nodejs.org/en/download/current/
* Open PowerShell/CMD and run:
```$ npm install --global --production windows-build-tools```
* Then run:
```$ npm install -g node-gyp```
* Now you have all the dependancies, clone the project:
```$ git clone https://github.com/senrab/csnode.git```
* Install the node modules with:
```$ npm i```
* Get the latest offsets by running:
```$ node getOffsets.js```
* Run the cheat using:
```$ node index.js```

##Credits:

https://github.com/frk1 - for constantly updating the hazedumper config and offsets that are downloaded in this app.

https://github.com/Rob-- - for memoryjs

https://github.com/Zysen - for node-asynckeystate

Users on UC that provided their take on using node for CSGO cheats/
