var args = arguments[0] || {};

var dept = args.dept;
//here's a consideration, each time not removing the old coursed but add to collection and filter
//var courses = Alloy.Collections.Course;
var term = "20151";//This should be get from today's time
var newCourse;
var deptcode;

deptcode = dept.get("SOC_DEPARTMENT_CODE");
fetchCourse(term,deptcode,$.courseTable);
fetchTerm();
//$.deptLabel.setText(dept.get("SOC_DEPARTMENT_DESCRIPTION"));

//get an array of active or available terms
function fetchTerm(){
	var termUrl = "http://petri.esd.usc.edu/socAPI/Terms";
	var client = Ti.Network.createHTTPClient({
		onload:function(e){
			setTerm(this.responseText);
		},
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('error');
		},
		timeout :5000 // in milliseconds
	});

	client.open('GET', termUrl, false);
	client.setRequestHeader('Content-Type', 'application/json');
	client.send(); 
}

function setTerm(text){
	var obj = JSON.parse(text);
}


//get courses list under a department and certain term
function fetchCourse(term, deptcode,table) {
	table.setData([]);//clear datas in table
	$.indicator.show();
	newCourse = Alloy.createCollection("Course");
	newCourse.setDir(term + "/" + deptcode);
	newCourse.fetch({
		success : function() {
			console.log("fetch from" + newCourse.url() + ":" + newCourse.models.length);
			updateTable($.courseTable, newCourse.models);
		}
	});
}

//update the fetched course data to Alloy view
function updateTable(table,courses){
	var data=[];
	for(var i= 0; i < courses.length; i++){
		var row = Titanium.UI.createTableViewRow({
			title:courses[i].title(),
			backgroundColor: i%2 == 0?"#F7F7F7":"#D7D7D7", 
			selectedBackgroundColor:"#FF3B30",
			hasChild:true
		});
		data.push(row);
	}
	console.log(data);
	$.indicator.hide();
	table.setData(data);
}

//fired when user change term using <picker>
function changeTerm(e){
	if(e.index == 0)
		term = "20143";
	if(e.index == 1)
		term = "20151";
	if(e.index == 2)
		term = "20152";
	fetchCourse(term,deptcode,$.courseTable);
}


//fired when click course row
function showCourseDetail(e){
	var model=newCourse.at(e.index);
	if(model){//TableViewRow bound to a School model
		model.setDir(term + "/");
		var args = {
			course:model
		};
		Titanium.UI.currentTab.open(Alloy.createController("courseDetail",args).getView(),{animated : true});
	}
}



function showIndicator(){
	 $.indicator.show();
}



$.switchTerm.index = 1;
