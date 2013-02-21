// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include('flightbook.js');
Ti.include('settings.js');
Ti.include('flightControl.js');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Fly',
    window:createFlightControlWindow
});

//
// create controls tab and root window
//
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Settings',
    window:createSettingsWindow
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
