function updateTable(table,courses){
	var data=[];
	for(var i= 0; i < courses.length; i++){
		var row = Titanium.UI.createTableViewRow({
			title:courses[i].title(),
			hasChild:true
		});
		data.push(row);
	}
	console.log(data);
	//$.indicator.hide();
	table.setData(data);
}

updateTable($.courseBinTable, courseBin.models);
