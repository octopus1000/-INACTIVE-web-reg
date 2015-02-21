var args = arguments[0] || {};
var depts = Alloy.Collections.Dept;
var school = args.school;

if(school && (school.get("SOC_DEPARTMENT_CODE") == undefined || school.get("SOC_DEPARTMENT_CODE").length == 0)){
	//refetch the school so that the department can be get
	school.fetch({
		success:function(){
			console.log("get department");
			depts.add(school.get("SOC_DEPARTMENT_CODE"));
		}
	});
}
depts.trigger("change");

function filter(depts){
	return school ? depts.where({SOC_SCHOOL_CODE:school.get("SOC_SCHOOL_CODE")}) : depts.models;
}

function showCourseList(e){
	//get department model
	var filteredDepts = filter(depts);
	var model = filteredDepts[e.index];
	if(model){
		var args = {
			deptcode:model.get("SOC_DEPARTMENT_CODE")
		};
		Titanium.UI.currentTab.open(Alloy.createController("courseList",args).getView());
		//Alloy.createController("courseList",args).getView().open();
	}	
}

function close(){
	$.destroy();
}
