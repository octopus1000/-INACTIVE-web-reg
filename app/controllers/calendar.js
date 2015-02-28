
updateTable(1,$.table);
$.switchDay.index = 0;
$.table.rowHeight = 40;
var flag = 0;
$.table.setSeparatorColor = "Transparent";


	for (i = 0; i < $.table.data[0].rows.length; i++){
		$.table.data[0].rows[i].selectedBackgroundColor = "#ff3b30";
	}



function changeDay(e){
	if(e.index == 0)
		updateTable(1,$.table);
	if(e.index == 1)
		updateTable(2,$.table);
	if(e.index == 2)
		updateTable(3,$.table);
	if(e.index == 3)
		updateTable(4,$.table);
	if(e.index == 4)
		updateTable(5,$.table);
}

Ti.App.addEventListener("reset",function(){
	
	tableMon = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
	tableTue = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
	tableWed = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
	tableThu = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
	tableFri = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];

	updateTable(1,$.table);
	updateTable(2,$.table);
	updateTable(3,$.table);
	updateTable(4,$.table);
	updateTable(5,$.table);
	
	for (i = 0; i < $.table.data[0].rows.length; i++){
		$.table.data[0].rows[i].selectedBackgroundColor = "#ff3b30";
	}
	
	$.switchDay.index = 0;
});

Ti.App.addEventListener("updateTable1",function(){
	updateTable(1,$.table);
	$.switchDay.index = 0;
});

Ti.App.addEventListener("updateTable2",function(){
	updateTable(2,$.table);
	$.switchDay.index = 1;


});

Ti.App.addEventListener("updateTable3",function(){
	updateTable(3,$.table);
	$.switchDay.index = 2;

});

Ti.App.addEventListener("updateTable4",function(){
	updateTable(4,$.table);
	$.switchDay.index = 3;


});

Ti.App.addEventListener("updateTable5",function(){
	updateTable(5,$.table);
	$.switchDay.index = 4;
});

