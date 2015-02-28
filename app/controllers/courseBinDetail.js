function swipe(e){
	
	if(!e.row)
	return;
	console.log(e.index);

	//courseBin.remove(courseBin.at(e.index));
	if (e.direction == "left") {
		e.row.children[0].animate({
			left : "-200dp"
		});
	}
	else {
		e.row.children[0].animate({
			left:0
		});
	}
}
function remove(e){
	var courseBin = Alloy.Collections.cbin;
	secid = e.source.section;
	var model = courseBin.where({SECTION:secid})[0]; 
	courseBin.remove(model);
	model.destroy();
}
function showSection(e){
	var courseBin = Alloy.Collections.cbin;
	var args = {
			section: courseBin.at(e.index)
		};
		if(e.row.toggle){
			/*e.row.animate({
				height:'0dp'
			});*/
			e.row.height = "50dp";
			e.row.toggle=false;
		}
		else{
		/*e.row.animate({
			height : '300dp'
		}); */

			e.row.toggle=true;
			e.row.height="230dp";
		}
	//Alloy.Globals.tab2.open(Alloy.createController("sectionDetail2",args).getView(),{animated : true});
}

//include:SECTION,SESSION,TYPE,BEGIN_TIME,END_TIME,DAY,LOCATION,REGISTERED,INSTRUCTOR
function transform(model){
	var tran = model.toJSON();
	tran.secId =   'Section:' + (model.get("SECTION") ? model.get("SECTION") : "N/A");
	tran.secType = 'Type:' + (model.get('TYPE') ? model.get("TYPE") : "N/A");
	tran.secUnit = 'Units:' + (model.get('REGISTERED') ? model.get("REGISTERED") : "N/A");
	tran.secTime = 'Time:' + (model.get('BEGIN_TIME') ? model.get("BEGIN_TIME") + "-" + model.get("END_TIME") : "N/A");
	tran.secDay =  'Day:' + (model.get('DAY') ? model.get("DAY") : "N/A");
	tran.secRoom = 'Room:' + (model.get('LOCATION') ? model.get("LOCATION") : "N/A");
	tran.secProf = 'Instructor:' + (model.get('INSTRUCTOR') ? model.get("INSTRUCTOR") : "N/A");
	return tran;
}
