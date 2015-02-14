var schools = Alloy.Collections.School;

fetchSchoolList(schools);

function fetchSchoolList() {
	var conn = Alloy.createCollection("Connection");
	conn.setDir("Schools");
	//the fetch method is an async call to the remote REST API.
	conn.fetch({
		success : function() {
			_.each(conn.models, function(elem) {
				schools.add(Alloy.createModel("School", {
					SOC_SCHOOL_CODE : elem.get("SOC_SCHOOL_CODE"),
					SOC_SCHOOL_DESCRIPTION : elem.get("SOC_SCHOOL_DESCRIPTION"),
				}));
			});
		},
		error : function() {
			Ti.API.error("hmm - this is not good!");
		}
	});
}

function showDeptList(e){
	var model = schools.at(e.index);
	if(model){//TableViewRow bound to a School model
		var args = {
			schoolcode:model.get("SOC_SCHOOL_CODE")
		};
		Alloy.createController("deptList",args).getView().open();
	}
}