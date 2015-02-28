// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
	var flag1 = 0;
	var flag2 = 0;


var Backbone = require("alloy/backbone");

Alloy.Collections.cbin = Alloy.createCollection('cbin');

var tableMon = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
var tableTue = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
var tableWed = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
var tableThu = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];
var tableFri = [{title: "08:00"}, {title: "09:00"},{title: "10:00"},{title: "11:00"},{title: "12:00"},{title: "13:00"},{title: "14:00"},{title: "15:00"},{title: "16:00"},{title: "17:00"},{title: "18:00"},{title: "19:00"},{title: "20:00"},{title: "21:00"},{title: "22:00"}];


var theDay = 1;
var rowIndex = -1;
var confIndex = -1;
var globalJ = -1;

function test(table){
	
	var i;

	for (i = 0; i < table.data[0].rows.length; i++){

		if (table.data[0].rows[i].title.length > 5){
				table.data[0].rows[i].backgroundColor = "#ff3b30";
		}
	}
}

function conf(table){	
	var i;
	
	if (table.data[0].rows[confIndex].title.length > 5){
		for (i = confIndex; i <= confIndex + globalJ; i++){		
				console.log("111" + confIndex + " " + globalJ);
				table.data[0].rows[i].backgroundColor = "#FFCC00";		
		}
	}
}


function updateTable(theDay, table){

	console.log(table);
		
	if(theDay == "1"){
		console.log(tableMon);
		table.setData(tableMon);
			
	}
	
	else if(theDay == "2"){		
		table.setData(tableTue);
	}
	
	else if(theDay == "3"){
		
		table.setData(tableWed);
	}
		
	else if(theDay == "4"){
		
		table.setData(tableThu);
	}	
	
	else if(theDay == "5"){
		console.log(tableFri);

		table.setData(tableFri);
	}	
	else{
		console.log(table);
	}			
	
	for (i = 0; i < table.data[0].rows.length; i++){
		table.data[0].rows[i].selectedBackgroundColor = "#ff3b30";
	}
	
	if (rowIndex > -1)
		test(table);

	if (confIndex > -1)
		conf(table);

}
