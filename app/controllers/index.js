$.index.open();
Titanium.UI.currentTab= $.tab1;

Alloy.Globals.tab1 = $.tab1;
Alloy.Globals.tab2 = $.tab2;

var cbin= Alloy.Collections.cbin;

cbin && cbin.fetch();


Ti.App.addEventListener("upSec",function(section){
	var model = Alloy.createModel('cbin', section);
	cbin.add(model);
	model.save();
	alert("Successfully added to CourseBin.");
});
