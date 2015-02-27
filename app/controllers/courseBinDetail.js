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
	Titanium.UI.currentTab.open(Alloy.createController("sectionDetail2",args).getView(),{animated : true});
}
