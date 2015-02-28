$.index.open();
Titanium.UI.currentTab= $.tab1;

Alloy.Globals.tab1 = $.tab1;
Alloy.Globals.tab2 = $.tab2;

<<<<<<< Updated upstream
var cbin= Alloy.Collections.cbin;

cbin && cbin.fetch();


Ti.App.addEventListener("upSec",function(section){
	var model = Alloy.createModel('cbin', section);
	cbin.add(model);
	model.save();
	alert("Successfully added to CourseBin.");
});
=======
var btnMenu = Ti.UI.createButton({
        
        title: 'Reset',
        color: "white",
        top : 0,
        right: 0
   });
 
 btnMenu.addEventListener('click', function (e) {
		Ti.App.fireEvent("reset");
		alert("Reset done");

   });
    

$.calWin.setRightNavButton(btnMenu);

>>>>>>> Stashed changes
