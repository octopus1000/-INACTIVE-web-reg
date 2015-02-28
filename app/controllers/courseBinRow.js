var args = arguments[0] || {};
var courseBin = Alloy.Collections.CBin;
var id;

if($model){
	console.log($model);
	id = $model.get("id");
}
function remove(){
	courseBin.remove($model);
}
function swipeLeft(e){
	if (e.direction == "left") {//when swipe left
		$.rowView.animate({
			left : "-100dp"
		});
	}
	else{
		$.rowView.animate({
			left : "0dp"
		}); 
	}

}
