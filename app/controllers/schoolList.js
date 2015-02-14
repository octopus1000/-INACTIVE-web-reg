//var args = arguments[0] || {};


//create department collection
var depts = Alloy.createCollection("Dept");
var data = [];
var isDisplayed = false;
var restAdaptorModel = Alloy.createModel("Connection");

function majorDisplay(e){
	var deptsView = e.source;
	var rows = deptsView.getRows();
	var schoolDetail;
	
	// $model represents the current model accessible to this
	// controller from the markup's model-view binding. $model
	// will be null if no binding.	
	if(!data.length && $model){
		schoolDetail = Alloy.createModel("Connection");
		schoolDetail.setDir("Schools/" + $model.get("SOC_SCHOOL_CODE"));
		
		schoolDetail.fetch({
			success : function() {
				//set up department
				depts.reset(schoolDetail.get("SOC_DEPARTMENT_CODE"));
				console.log(schoolDetail.get("SOC_SCHOOL_CODE") + ":" + schoolDetail.get("SOC_SCHOOL_CODE").length);

				_.each(depts.models,function(dept){
					var title = dept.get('SOC_DEPARTMENT_DESCRIPTION');
					var row = Ti.UI.createTableViewRow({
						"title" : title,
					});
					row.applyProperties($.createStyle({
						height : "20dp"
					}));
					data.push(row);
				});					
				deptsView.add(data);
				isDisplayed = true; 

			},
			erro:function(){
				;
			}
		}); 
	}
	else if(rows){
		while(deptsView.getRowCount() > 0){
			var row = deptsView.getRows()[0];
			deptsView.remove(row);
		}
		isDisplayed = !isDisplayed;
	}
}
