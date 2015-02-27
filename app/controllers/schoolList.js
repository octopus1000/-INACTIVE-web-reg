//var args = arguments[0] || {};

var schools = Alloy.Collections.School;

schools.fetch({
	success:function(){
		console.log("schools fetched, length:" + schools.length);
	}
});

function showDeptList(e){
	var model = schools.at(e.index);
	if(model){//TableViewRow bound to a School model
		var args = {
			school:model
		};
		Titanium.UI.currentTab.open(Alloy.createController("deptList",args).getView(),{animated : true});
		//Alloy.createController("deptList",args).getView().open();
	}
}


var count = true;
function transColor(model){
	var tran = model.toJSON();
	tran.color = count? "#F7F7F7":"#D7D7D7";
	count = !count;
	return tran;
}
