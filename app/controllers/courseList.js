var args = arguments[0] || {};
var courses = Alloy.Collections.Course;
var term = "20151";

//clear data in courses
courses.reset({});
if(args.deptcode){
	fetchCourseList(args.deptcode);
}

function fetchCourseList(deptcode) {
	var conn = Alloy.createCollection("Connection");
	//requrest url
	conn.setDir("Courses/" + term +"/" + deptcode);
	//get data
	conn.fetch({
		success : function() {
			console.log(conn);
			_.each(conn.models, function(elem){
				courses.add(Alloy.createModel("Course",{
					COURSE_ID:elem.COURSE_ID,
					TITLE:elem.TITLE,
					DESCRIPTION:elem.DESCRIPTION
				}));
			});
		},
		error : function() {
			Ti.API.error("hmm - this is not good!");
		}
	});
}