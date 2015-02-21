var args = arguments[0] || {};
var section = Alloy.createModel("Section");


init(args.sec);
showSection(section);

//using section object to build section model
function init(secObj){
	if(secObj){
		section.set(secObj);		
	}
	else{
		console.log("no section acquired");
	}
}

//write section data into view
//include:SECTION,SESSION,TYPE,BEGIN_TIME,END_TIME,DAY,LOCATION,REGISTERED,INSTRUCTOR
function showSection(section){
	$.secId.setText(section.get("SECTION"));
	$.secType.setText(section.get("TYPE"));
}

$.sectionDetail.addEventListener('close', function() {
    $.destroy();
});