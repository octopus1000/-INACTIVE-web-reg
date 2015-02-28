var args = arguments[0] || {};
var section = Alloy.createModel("Section");

var calendar = Alloy.Collections.cbin;

var day;
var courseName;

var startTime;
var endTime;


init(args.sec);
if (section) {
	showSection(section);
}

//using section object to build section model
function init(secObj) {
	if (secObj) {
		section.set(secObj);
	} else {
		console.log("no section acquired");
	}
}

//write section data into view
//include:SECTION,SESSION,TYPE,BEGIN_TIME,END_TIME,DAY,LOCATION,REGISTERED,INSTRUCTOR
function showSection(section) {

	courseName = section.get("SIS_COURSE_ID");

	if(section.get("SECTION")){
		$.secId.setTitle("Section ID: " + section.get("SECTION"));
	}
	else{
		$.secId.setTitle("Section ID: N/A");
	}
	
	if(section.get("TYPE")){
		$.secType.setTitle("Type: " + section.get("TYPE"));
	}
	else{
		$.secType.setTitle("Type: N/A");
	}
	
	if (section.get("REGISTERED")){
		$.secUnit.setTitle("Units: " + section.get("REGISTERED"));
	}
	else{
		$.secUnit.setTitle("Units: N/A");
	}
	
	if(section.get("BEGIN_TIME") && section.get("END_TIME")){
		startTime = section.get("BEGIN_TIME");
		endTime = section.get("END_TIME");;
		//courseTime = section.get("BEGIN_TIME") + "-" + section.get("END_TIME");	
		$.secTime.setTitle("Time: " + section.get("BEGIN_TIME") + "-" + section.get("END_TIME"));
	}
	
	else{	
		$.secTime.setTitle("Time: N/A");
	}

	showDay(section);
	
	if(section.get("LOCATION")){
		$.secRoom.setTitle("Room: " + section.get("LOCATION"));
	}
	else{
		$.secRoom.setTitle("Room: N/A");
	}
	
	if(section.get("INSTRUCTOR")){
		$.secProf.setTitle("Instructor: " + section.get("INSTRUCTOR"));
	}
	else{
		$.secProf.setTitle("Instructor: N/A");
	}
}

function showDay(section){
	day = section.get("DAY");
	var len;
	
	if (day == null){
		len = 0;
	}	
	else{
		len = day.length;
	}
	
	var i;
	var output = "|";
	for (i = 0; i<len; i++){
			output = output + day[i] + "|";
	}			
	$.secDay.setTitle("Day:" + output);
}

function addToBin() {
	var courseBin = Alloy.Collections.cbin;
	

	var pLen = courseBin.length;
	var mm;
	//console.log(courseBin.where({SECTION : section.get("SECTION").length}) );
	if (courseBin.where({SECTION : section.get("SECTION")}).length < 1) {
		try {
			Ti.App.fireEvent("upSec",section.toJSON());
			console.log(Alloy.Collections.cbin.length);
			
		} catch(e) {
			console.log(e);
		}
	}
	else{
		alert("Already added.");
	}
}


function addToCal(section) {
	var time0 = startTime.split(":"); 
	var timef = endTime.split(":");	
	var index = 0;
	var j = timef[0] - time0[0];
//	console.log("jjjjjjjjjjjjjjjjjjjjj" + j);
	if (time0 && timef){
		index = time0[0] - 8;
		rowIndex = index;
		
		//console.log("rowIndex :" + rowIndex);
	}
	else{
		alert("Failed to add in to calendar");
	}
	
	
	
	var len = day.length;
	var i;
	var output = "|";
	for (i = 0; i<len; i++){
	

	if (day[i] == "M"){
		j = timef[0] - time0[0];
		var titleLen = tableMon[index].title.length;		
		if(titleLen > startTime.length){
			globalJ = j;
			confIndex = index;
			if (flag1 == 0){
				alert("Error: Time table conflict!");
				flag1++;	
			}							
		}
		else{
			if (flag2 == 0){
				alert("Add in to calendar successfully");
				flag2++;
			}	
		}
		
		tableMon[index] = {title:  startTime + "\t" + courseName};
		
		while (j>0) {
			tableMon[index + j] = {title: endTime + "\t\t"};
			j--;	
		}
		
	
//		console.log("helloaaaaa" + tableMon[index].title);

		Ti.App.fireEvent("updateTable1");
	}
	
	else if (day[i] == "T"){
		j = timef[0] - time0[0];
		var titleLen = tableTue[index].title.length;		
		
	if(titleLen > startTime.length){
			globalJ = j;
			confIndex = index;
			if (flag1 == 0){
				alert("Error: Time table conflict!");
				flag1++;	
			}							
		}
		else{
			if (flag2 == 0){
				alert("Add in to calendar successfully");
				flag2++;
			}	
		}

		console.log("test" + startTime + courseName);
		tableTue[index] = {title:  startTime + "\t" + courseName};
		
		while (j>0) {
			tableTue[index + j] = {title: endTime + "\t\t"};
			j--;	
		}
		
		Ti.App.fireEvent("updateTable2");
	}
	
	else if (day[i] == "W"){
		j = timef[0] - time0[0];
		var titleLen = tableWed[index].title.length;		
		
		if(titleLen > startTime.length){
			globalJ = j;
			confIndex = index;
			if (flag1 == 0){
				alert("Error: Time table conflict!");
				flag1++;	
			}							
		}
		else{
			if (flag2 == 0){
				alert("Add in to calendar successfully");
				flag2++;
			}	
		}
		
		console.log(courseName);
		tableWed[index] = {title:  startTime + "\t" + courseName};
		
		while (j>0) {
			tableWed[index + j] = {title: endTime + "\t\t"};
			j--;	
		}
		
		Ti.App.fireEvent("updateTable3");
	}
	
	else if (day[i] == "H"){
		j = timef[0] - time0[0];
		
		var titleLen = tableThu[index].title.length;		
		
		if(titleLen > startTime.length){
			globalJ = j;
			confIndex = index;
			if (flag1 == 0){
				alert("Error: Time table conflict!");
				flag1++;	
			}							
		}
		else{
			if (flag2 == 0){
				alert("Add in to calendar successfully");
				flag2++;
			}	
		}

		console.log(courseName);

		tableThu[index] = {title:  startTime + "\t" + courseName};
		
		while (j>0) {
			tableThu[index + j] = {title: endTime + "\t\t"};
			j--;	
		}
		
		Ti.App.fireEvent("updateTable4");
	}
	
	else if (day[i] == "F"){
		console.log(courseName);
		j = timef[0] - time0[0];
		var titleLen = tableFri[index].title.length;		
		
		if(titleLen > startTime.length){
			globalJ = j;
			confIndex = index;
			if (flag1 == 0){
				alert("Error: Time table conflict!");
				flag1++;	
			}							
		}
		else{
			if (flag2 == 0){
				alert("Add in to calendar successfully");
				flag2++;
			}	
		}
		

		tableFri[index] = {title:  startTime + "\t" + courseName};
		
		while (j>0) {
		tableFri[index + j] = {title: endTime + "\t\t"};
			j--;	
		}
		
		Ti.App.fireEvent("updateTable5");
	}
	
	else{
		alert("No such day");
		}
	}			
}


$.sectionDetail.addEventListener('close', function() {
	$.destroy();
}); 