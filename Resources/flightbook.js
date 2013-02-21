/*
 Create our socket. 
*/
//var UDP = { createSocket: function() { return Ti.Network.Socket.createUDP(); } };

var getProps = function(){
	if (droneIP==null){
	  droneIp = '192.168.1.1';
	}
};

var saveProps = function(_droneIp){
  alert('actual just support for default IP');
}

var socket = Ti.Network.Socket.createUDP();

var droneIP = getProps();
var droneComPort = 5556;

socket.addEventListener('started', function (e) {
  Ti.API.info('Socket is started');
});

socket.addEventListener('error', function (e) {
  Ti.API.info('Socket error: '+e);
});

/*
 Kommandos 
 */
var currentCmd = '';

var trimFlag = false;

// Sequence Number init
var seq = 0;

// Takeoff
const takeoff = '290718208';
// Landing
const land = '290717696';

// Forward
const moveForward = '1,0,-1090519040,0,0';
// Backward
const moveBackward = '1,0,1056964608,0,0';

//move left
const moveLeft = '1,-1090519040,0,0,0';
//move right
const moveRight = '1,1056964608,0,0,0';

//move up
const moveDown = '1,0,0,-1090519040,0';
//move right
const moveUp = '1,0,0,1056964608,0';

//Hover
const hover = '1,0,0,0,0';


/* Socket starten */
socket.start({
  port: droneComPort
});

var cmd = '';

var doCurrentCmd = function (){

	  switch(currentCmd)
	  {
	  	case 'moveLeft':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveLeft+'\r';
	  	  break;
	  	case 'moveRight':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveRight+'\r';
	  	  break;
	  	case 'moveForward':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveForward+'\r';
	  	  break;
	  	case 'moveBackward':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveBackward+'\r';
	  	  break;
	  	case 'moveUp':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveUp+'\r';
	  	  break;
	  	case 'moveDown':
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+moveDown+'\r';
	  	  break;
	  	case 'land':
	  	  seq=seq+1;
	  	  cmd = 'AT*REF='+seq+','+land+'\r';
	  	  break;
	  	case 'trim':
	  	  seq=seq+1;
	  	  Ti.API.info('Trimming the drone');
	  	  cmd = 'AT*FTRIM='+seq+',\r';
	  	  Ti.API.info('TRIM::'+trimFlag)
	  	  break;
	  	case 'takeoff':
	  	  Ti.API.info('TAKEOFF::'+trimFlag)
	  	  seq=seq+1;
	  	  Ti.API.info('Takeoff the drone');
	  	  cmd = 'AT*REF='+seq+','+takeoff+'\r';
	  	  break;
	  	case 'flip_left':
	  	  seq=seq+1;
	  	  cmd = 'AT*CONFIG='+seq+',"control:flight_anim","18,2000"\r';
	  	  break;
	  	case 'rotate':
	  	  seq=seq+1;
	  	  cmd = 'AT*CONFIG='+seq+',"control:flight_anim","6,5000"\r';
	  	  break;	  	  
	  	default:
	  	  seq=seq+1;
	  	  cmd = 'AT*PCMD='+seq+','+hover+'\r';
	  }
	  
    socket.sendString({
        host: droneIP,
        port: droneComPort,
        data: cmd 
    });
    
    Ti.API.info('Send command' + cmd);
    Ti.API.info('SEND::'+trimFlag);
    //if (trimFlag && currentCmd==='trim') {currentCmd = 'takeoff'};
};