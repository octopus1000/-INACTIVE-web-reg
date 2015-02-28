var args = arguments[0] || {};
var course = args.course;
//this is a Course model
var sections = [];
var pickerData=[];
var scrollableView;

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
	scrollableView = Titanium.UI.createScrollableView({
		id:"scrollableView",
		showPagingControl:true,
		backgroundColor:"transparent",
		pagingControlColor: "#D7D7D7"
	});

	//create views using sections array
	console.log(sections.length);
	_.each(sections, function(section,i) {
		pickerData.push({
			title:section.SECTION + "\t" + section.BEGIN_TIME + "-" + section.END_TIME + "\t" + section.TYPE,
			height:'30dp',
			font:{
				fontSize:'12sp'
			},
			idx:i
			});
		var args = {
			sec : section
		};
		scrollableView.addView(Alloy.createController("sectionDetail", args).getView());
	});
	$.courseDetailWindow.add(scrollableView);
	
	$.picker.setData(pickerData);
	$.picker.data[0].rows[0].rightImage = 'down.png';
}

//execute when description is clicked
function showDesp(e){
	if(!this.short){
		this.height = 'auto';
		this.short = true;
	}
	else{
		this.height = '50dp';
		this.short = false;
	}
	
}
//execute when picker is clicked
function showPicker(e){
	var h = 30;
	
	
	if(e.index){
		//swap the line to first line
		var swapTemp = pickerData[e.index];
		pickerData[e.index] = pickerData[0];
		pickerData[0] = swapTemp;
		//reset data
		$.picker.setData(pickerData);
		$.picker.data[0].rows[0].rightImage = 'down.png';
		//change scrollable view
		scrollableView.setCurrentPage(swapTemp.idx);
	}
	
	if(!$.picker.sh){
		$.picker.height = h * $.picker.data[0].rows.length;
		$.picker.sh = true;
	}
	else{
		$.picker.height = h;
		$.picker.sh = false;
	}
	
	//$.picker.scrollToIndex(e.index,{animated:true,position:Titanium.UI.iPhone.TableViewScrollPosition.TOP});
	
}
//bug:courseDetail undefined
$.courseDetailWindow.addEventListener('close', function() {
 $.destroy();
 });
