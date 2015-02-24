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
