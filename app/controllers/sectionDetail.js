var args = arguments[0] || {};
var section = Alloy.createModel("Section");
//var courseBin = Alloy.Collections.CBin;

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
	$.secId.setText(section.get("SECTION"));
	$.secType.setText(section.get("TYPE"));
}

function addToBin() {
	
	//courseBin = Alloy.createCollection("CBin");
	var pLen = courseBin.length;
	
	console.log(courseBin);					
	courseBin.add({SIS_COURSE_ID:"1111"});

	alert("hahaha???.");
	
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