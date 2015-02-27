var courseBin = Alloy.Collections.cbin;

function swipe(e){

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
	secid = e.source.section;
	courseBin.remove(courseBin.where({SECTION_ID:secid})[0]);
}
function showSection(e){
	var args = {
			section: courseBin.at(e.index)
		};
		if(e.row.toggle){
			e.row.height = "0dp";
			e.row.toggle=false;
		}
		else{
			e.row.toggle=true;
			e.row.height="300dp";
		}
	//Alloy.Globals.tab2.open(Alloy.createController("sectionDetail2",args).getView(),{animated : true});
}
