var args = arguments[0] || {};
var course = args.course;
//this is a Course model
var sections = [];

showCourse(course);

function showCourse(course) {
	
	if(course == undefined){
		Ti.API.error("Selected course not defined");
	}
	//set <Label> text
	$.courseTitle.setText(course.title());	
	$.courseDescription.setText(course.get("DESCRIPTION"));	
	
	
	//fetch course to get sections
	course.fetch({
		success : function() {
			sections = course.get("V_SOC_SECTION");
			showSection(sections);
		}
	});
}

//show add section detail to scrollable view
function showSection(sections) {
	//need to create a new view and add it to <Window>, else it won't refresh
	var scrollableView = Titanium.UI.createScrollableView({
		showPagingControl:true,
		backgroundColor:"transparent",
		pagingControlColor: "#D7D7D7"
	});
//	scrollableView.setHeight(200);
//	scrollableView.setBottom(0);

	//scrollableView.setBackgroundColor("yellow");
	//create views using sections array
	_.each(sections, function(section) {
		var args = {
			sec : section
		};
		scrollableView.addView(Alloy.createController("sectionDetail", args).getView());
	});
	$.courseDetailWindow.add(scrollableView);
}

//bug:courseDetail undefined
/*$.courseDetail.addEventListener('close', function() {
 $.destroy();
 });*/
