var args = arguments[0] || {};
var depts = Alloy.Collections.Dept;

if(args.schoolcode){
	fetchDeptList(args.schoolcode);
}

function fetchDeptList(schoolcode) {
	//This request will return json data for a school,
	//it's single object, so i use model not collection
	var conn = Alloy.createModel("Connection");
	conn.setDir("Schools/" + schoolcode);
	conn.fetch({
		success : function() {
			console.log(conn);
			depts.reset(conn.get("SOC_DEPARTMENT_CODE"));
		},
		error : function() {
			Ti.API.error("hmm - this is not good!");
		}
	});
}

function showCourseList(e){
	//get department model
	console.log(e.index);
	var model = depts.at(e.index);
	if(model){
		var args = {
			deptcode:model.get("SOC_DEPARTMENT_CODE")
		};
		Alloy.createController("courseList",args).getView().open();
	}	
}
