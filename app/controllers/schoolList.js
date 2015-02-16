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
		Alloy.createController("deptList",args).getView().open();
	}
	/*model.fetch({
		success:function(){
			var depts = model.get("SOC_DEPARTMENT_CODE");
			var data=[];
			for(var i =0;i < depts.length;i++){
				var row = Titanium.UI.createTableViewRow({
					title:depts[i].SOC_DEPARTMENT_CODE
				});
				data.push(row);
			}
			console.log(data.length);
			//console.log(e.child);
			//e.setData([]);
			//e.setData(data);
		}
	});*/
}