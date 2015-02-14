$.index.open();
var schools = Alloy.Collections.School;

var restAdaptor = Alloy.createCollection("Connection");
restAdaptor.setDir("Schools");


//the fetch method is an async call to the remote REST API.
restAdaptor.fetch({
	success : function() {
		console.log(restAdaptor);
		_.each(restAdaptor.models, function(elem) {
			schools.add(Alloy.createModel("School", {
				SOC_SCHOOL_CODE : elem.get("SOC_SCHOOL_CODE"),
				SOC_SCHOOL_DESCRIPTION : elem.get("SOC_SCHOOL_DESCRIPTION"),
				SOC_DEPARTMENT_CODE : elem.get("SOC_DEPARTMENT_CODE")
			}));
			console.log(schools);
		});
		//restAdaptor.destroy();
	},
	error : function() {
		Ti.API.error("hmm - this is not good!");
	}
});
