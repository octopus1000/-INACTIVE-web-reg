var args = arguments[0] || {};
var section = Alloy.createModel("Section");
var courseBin = Alloy.Collections.cbin;
var day;
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
	if(section.get("SECTION")){
		$.secId.setText("Section ID: " + section.get("SECTION"));
	}
	else{
		$.secId.setText("Section ID: N/A");
	}
	
	if(section.get("TYPE")){
		$.secType.setText("Type: " + section.get("TYPE"));
	}
	else{
		$.secId.setText("Type: N/A");
	}
	
	if (section.get("REGISTERED")){
		$.secUnit.setText("Units: " + section.get("REGISTERED"));
	}
	else{
		$.secUnit.setText("Units: N/A");
	}
	if(section.get("BEGIN_TIME") && section.get("END_TIME")){
		$.secTime.setText("Time: " + section.get("BEGIN_TIME") + "-" + section.get("END_TIME"));
	}
	
	else{
//				$.secTime.setText("Time: " + section.get("BEGIN_TIME") + "-" + section.get("END_TIME"));

			$.secTime.setText("Time: N/A");
	}
	//if(section.get("DAY")){
	//	$.secDay.setText("Day: " + section.get("DAY"));
	//}
	//else{
	//			$.secDay.setText("Day: N/A");
	//}
	
	day = showDay(section);
	
	if(section.get("LOCATION")){
		$.secRoom.setText("Room: " + section.get("LOCATION"));
	}
	else{
		$.secRoom.setText("Room: N/A");
	}
	if(section.get("INSTRUCTOR")){
		$.secProf.setText("Instructor: " + section.get("INSTRUCTOR"));
	}
	else{
		$.secProf.setText("Instructor: N/A");
	}
}

function showDay(section){
	var day = section.get("DAY");
	
	if (day == "M"){
		$.secDay.setText("Day: M");
	}
	else if (day == "T"){
		$.secDay.setText("Day: T");
	}
	else if (day == "W"){
		$.secDay.setText("Day: W");
	}
	else if (day == "H"){
		$.secDay.setText("Day: Th");
	}
	else if (day == "F"){
		$.secDay.setText("Day: F");
	}
	else if (day == "TH"){
		$.secDay.setText("Day: T/Th");
	}
	else if (day == "MW"){
		$.secDay.setText("Day: M/W");
	}
	else if (day == "MWF"){
		$.secDay.setText("Day: M/W/F");
	}
	else{
		$.secDay.setText("Day<" + day);
	}
	return day;
}

function addToBin() {
	
	//courseBin = Alloy.createCollection("CBin");
	var pLen = courseBin.length;
	
	try{
		courseBin.add(section);
		console.log(Alloy.Collections.cbin.length);
	}
	catch(e){
		console.log(e);
	}
	
	var nLen = courseBin.length;
	if ( nLen == pLen + 1)
		alert("Successfully added to CourseBin.");
	else {
		alert("Already added.");
	}
}

$.sectionDetail.addEventListener('close', function() {
	$.destroy();
}); 