var createSettingsWindow = Titanium.UI.createWindow({  
    title:'Settings',
    backgroundColor:'#fff'
});

var droneIpLbl = Titanium.UI.createLabel({
	top: 10,
	left: 10,
	color:'#999',
	text:'IP of the Drone',
	textAlign:'left'
});

var droneIpTextField = Titanium.UI.createTextField({
    hintText : 'default is 192.168.1.1',
    value:droneIp,
    top : 30,
    left: 10,
    width: '90%'
});

var saveButton = Titanium.UI.createButton({
   title: 'Save',
   top: 60,
   left: 10
});

saveButton.addEventListener('click',function(e){

   if (checkIp()) {
     saveProps(droneIpTextField.value);
   } else {
   	var IPdialog = Ti.UI.createAlertDialog({
    	message: 'Please provide the drone IP',
    	ok: 'Ok',
    	title: 'Validation Error'
	}).show();
   }
   
});

var checkIp = function(){
	if (droneIpTextField.value==0) {
	  return false;
	} else {
	  return true;
	};
};

createSettingsWindow.add(droneIpLbl);
createSettingsWindow.add(droneIpTextField);

createSettingsWindow.add(saveButton);
