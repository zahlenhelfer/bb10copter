var intRef = null;

var createFlightControlWindow = Titanium.UI.createWindow({  
    title:'Fly',
    backgroundColor:'#fff'
});

var lbLGreeting = Titanium.UI.createLabel({
  text:'Welcome to bb10Copter, Captain!',
  left: 10,
  top: 10,
  height:40
});


var lbLStunts = Titanium.UI.createLabel({
  text:'stunt section:',
  left: 10,
  top: 280,
  height:25  
});

var BtnTurnLeft = Ti.UI.createButton({
  title:'<',
  width: 50,
  top: 100,
  left:10,
  height:40
});

// Create a Button.
var BtnTurnRight = Ti.UI.createButton({
  title : '>',
  width: 50,
  top: 100,
  left:110,
  height:40
});

var BtnMoveForward = Ti.UI.createButton({
  title : '^',
  width: 50,
  top:50,
  left:60,
  height:40
});

var BtnMoveBack = Ti.UI.createButton({
  title : 'v',
  width: 50,
  top:150,
  left:60,
  height:40
});

var BtnStartEngine = Ti.UI.createButton({
  title:'start Com.',
  top: 220,
  width: 100,
  left:10,
  height:40,
});

var BtnTakeOff = Ti.UI.createButton({
  title:'TakeOff',
  top: 220,
  width: 80,
  left: 170,
  height:40
});

var BtnIncrAlt = Ti.UI.createButton({
  title : 'incr. alt',
  width: 70,
  top:50,
  left:170,
  height:40
});

var BtnDecrAlt = Ti.UI.createButton({
  title : 'decr. alt',
  width: 70,
  top:150,
  left:170,
  height:40
});


BtnDecrAlt.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnIncrAlt.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnMoveBack.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnMoveForward.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnTurnRight.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnTurnLeft.addEventListener('touchend', function(e) {
  currentCmd = 'hover';
});

BtnDecrAlt.addEventListener('touchstart', function(e) {
  currentCmd = 'moveDown';
});

BtnIncrAlt.addEventListener('touchstart', function(e) {
  currentCmd = 'moveUp';
});

BtnMoveBack.addEventListener('touchstart', function(e) {
  currentCmd = 'moveBackward';
});

BtnMoveForward.addEventListener('touchstart', function(e) {
  currentCmd = 'moveForward';
});

BtnTurnRight.addEventListener('touchstart', function(e) {
  currentCmd = 'moveRight';
});

BtnTurnLeft.addEventListener('touchstart', function(e) {
  currentCmd = 'moveLeft';
});

BtnStartEngine.addEventListener('click', function(e) {
	startCommunication();
});

BtnTakeOff.addEventListener('click', function(e) {
	changeText();
});


var BtnStunt = Ti.UI.createButton({
  title : 'Flip left',
  width: 100,
  top:300,
  left:10,
  height:40
});

BtnStunt.addEventListener('touchstart', function(e) {
    currentCmd = 'flip_left';
});

BtnStunt.addEventListener('touchend', function(e) {
    currentCmd = 'hover';
});

var BtnRotate = Ti.UI.createButton({
  title : 'rotate',
  width: 80,
  top:300,
  left:170,
  height:40
});

BtnRotate.addEventListener('touchstart', function(e) {
    currentCmd = 'rotate';
});

BtnRotate.addEventListener('touchend', function(e) {
    currentCmd = 'hover';
});

var changeText = function(){
 if (BtnTakeOff.title === 'TakeOff') {
 	BtnTakeOff.title = 'Land';
 	currentCmd = 'takeoff';
  } else{
    BtnTakeOff.title = 'TakeOff';
    currentCmd = 'land';
  }
}


var startCommunication = function(){
 if (BtnStartEngine.title === 'start Com.') {
 	BtnStartEngine.title = 'stop Com.';
 	Ti.API.info('--- Starting UDP-Command-Interval ---');
 	currentCmd = 'trim';
 	intRef = setInterval(doCurrentCmd,30);
  } else{
  	BtnStartEngine.title = 'start Com.';
  	Ti.API.info('--- Stopping UDP-Command-Interval ---');
    clearInterval(intRef);
    seq = 0;
  } 	
}

var dialog = Ti.UI.createAlertDialog({
    message: '1. connect to Drone WiFi.\r2. Start communication\r3. TakeOff\r4. Have fun!',
    ok: 'Let´s fly!',
    title: 'Flight Instructions'
}).show();

createFlightControlWindow.add(lbLGreeting);
createFlightControlWindow.add(BtnTurnLeft);
createFlightControlWindow.add(BtnTurnRight);
createFlightControlWindow.add(BtnMoveForward);
createFlightControlWindow.add(BtnMoveBack);
createFlightControlWindow.add(BtnStartEngine);
createFlightControlWindow.add(BtnTakeOff);
createFlightControlWindow.add(BtnIncrAlt);
createFlightControlWindow.add(BtnDecrAlt);
createFlightControlWindow.add(BtnStunt);
createFlightControlWindow.add(BtnRotate);
createFlightControlWindow.add(lbLStunts);
