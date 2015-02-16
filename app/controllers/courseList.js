var args = arguments[0] || {};

var deptcode = args.deptcode;
var courses = Alloy.Collections.Course;
var term = "20151";

var newCourse = Alloy.createCollection("Course");
newCourse.setDir(term + "/" + deptcode);
newCourse.fetch({
	success:function(){
		console.log("fetch from" + newCourse.url() + ":"+ newCourse.models.length);
		updateTable($.courseTable,newCourse.models);
	}
});

function updateTable(table,courses){
	var data=[];
	for(var i= 0; i < courses.length; i++){
		var row = Titanium.UI.createTableViewRow({
			title:courses[i].get("SIS_COURSE_ID")
		});
		data.push(row);
	}
	console.log(data);
	table.setData([]);
	table.setData(data);
}





