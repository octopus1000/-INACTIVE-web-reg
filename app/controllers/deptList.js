var args = arguments[0] || {};
var depts = Alloy.Collections.Dept;
var school = args.school;

//var schoolTitle = school.get("SOC_SCHOOL_DESCRIPTION");

fetchDepts(school);

//$.schoolLabel.setText(schoolTitle);


/*var btnMenu = Ti.UI.createButton({
        title: 'Menu'
   });

btnMenu.addEventListener('click', function (e) {
       alert('Menu');
});

$.mainWin.setRightNavButton(btnMenu);


var btnBack = Ti.UI.createButton({ 
   });
   
btnBack.addEventListener('click', function(e){
	    $.mainWin.close();
}); 
*/

//get departments of clicked school
function fetchDepts(school){
	if (school && (school.get("SOC_DEPARTMENT_CODE") == undefined || school.get("SOC_DEPARTMENT_CODE").length == 0)) {
		//refetch the school so that the department can be get
		school.fetch({
			success : function() {
				console.log("get department");
				depts.add(school.get("SOC_DEPARTMENT_CODE"));
			}
		});
	}
	depts.trigger("change"); 
}


function filter(depts){
	return school ? depts.where({SOC_SCHOOL_CODE:school.get("SOC_SCHOOL_CODE")}) : depts.models;
}

function showCourseList(e){
	//get department model
	var filteredDepts = filter(depts);
	var model = filteredDepts[e.index];
	//$.indicator.hide();

	if(model){
		var args = {
			dept:model
		};
		Titanium.UI.currentTab.open(Alloy.createController("courseList",args).getView());
		//Alloy.createController("courseList",args).getView().open();
	}	
}

function close(){
	$.destroy();
}

var count = true;
function transColor(model){
	var tran = model.toJSON();
	tran.color = count? "#FFF":"#F7F7F7",
	count = !count;
	return tran;
}

function showIndicator(){
	 $.indicator.show();
}