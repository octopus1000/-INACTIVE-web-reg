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
	if(model.get("BEGIN_TIME"))
		tran.secTime = 'Time:' + model.get("BEGIN_TIME") + "-" + model.get("END_TIME");
	else
		tran.secTime = 'Time:N/A';
	tran.secDay =  'Day:' + (model.get('DAY') ? model.get("DAY") : "N/A");
	tran.secRoom = 'Room:' + (model.get('LOCATION') ? model.get("LOCATION") : "N/A");
	tran.secProf = 'Instructor:' + (model.get('INSTRUCTOR') ? model.get("INSTRUCTOR") : "N/A");
	return tran;
}


function register(e){
	
	var courseBin = Alloy.Collections.cbin;
	secid = e.source.section;
	var model = courseBin.where({SECTION:secid})[0];
	
	if (Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
		performCalendarWriteFunctions(model);
	} else {
		Ti.Calendar.requestEventsAuthorization(function(e) {
			if (e.success) {
				performCalendarWriteFunctions(model);
			} else {
				alert('Access to calendar is not allowed');
			}
		});
	}
}

function printEventDetails(eventID) {
    Ti.API.info('eventID:' + eventID);
    var defCalendar = Ti.Calendar.defaultCalendar;
    var eventFromCalendar = defCalendar.getEventById(eventID);
    if (eventFromCalendar != null) {
        Ti.API.info('Printing event values ::');
        Ti.API.info('title : '+ eventFromCalendar.title);
        Ti.API.info('notes : ' + eventFromCalendar.notes);
        Ti.API.info('location:' + eventFromCalendar.location);
        Ti.API.info('allDay ? :' + eventFromCalendar.allDay);
        Ti.API.info('status : '+ eventFromCalendar.status);
        Ti.API.info('availability : '+ eventFromCalendar.availability);
        Ti.API.info('hasAlarm ? : '+ eventFromCalendar.hasAlarm);
        Ti.API.info('id : '+ eventFromCalendar.id);
        Ti.API.info('isDetached ? : '+ eventFromCalendar.isDetached);
        Ti.API.info('begin : '+ eventFromCalendar.begin);
        Ti.API.info('end : '+ eventFromCalendar.end);
        var eventRule = eventFromCalendar.recurrenceRules;
        Ti.API.info("recurrenceRules : " + eventRule);
        for (var i = 0; i < eventRule.length; i++) {
            Ti.API.info("Rule # "+ i);
            Ti.API.info('frequency : ' + eventRule[i].frequency);
            Ti.API.info('interval : ' + eventRule[i].interval);
            Ti.API.info('daysofTheWeek : ' );
            var daysofTheWeek = eventRule[i].daysOfTheWeek; 
            for (var j = 0; j < daysofTheWeek.length; j++) {
                Ti.API.info('{ dayOfWeek : '+ daysofTheWeek[j].dayOfWeek +'weekNumber : '+daysofTheWeek[j].week +'}, ');
            }
            Ti.API.info('firstDayOfTheWeek : ' + eventRule[i].firstDayOfTheWeek);
            Ti.API.info('daysOfTheMonth : ');
            var daysOfTheMonth = eventRule[i].daysOfTheMonth;
            for(var j=0;j<daysOfTheMonth.length;j++) {
                Ti.API.info(' ' + daysOfTheMonth[j]);
            }
            Ti.API.info('daysOfTheYear : ');
            var daysOfTheYear = eventRule[i].daysOfTheYear;
            for(var j=0;i<daysOfTheYear.length;j++) {
                Ti.API.info(' ' + daysOfTheYear[j]);
            }
            Ti.API.info('weeksOfTheYear : ');
            var weeksOfTheYear = eventRule[i].weeksOfTheYear;
            for(var j=0;j<weeksOfTheYear.length;j++) {
                Ti.API.info(' ' + weeksOfTheYear[j]);
            }
            Ti.API.info('monthsOfTheYear : ');
            var monthsOfTheYear = eventRule[i].monthsOfTheYear;
            for(var j=0;j<monthsOfTheYear.length;j++) {
                Ti.API.info(' ' + monthsOfTheYear[j]);
            }
            Ti.API.info('daysOfTheYear : ');
            var setPositions = eventRule[i].setPositions;
            for(var j=0;j<setPositions.length;j++) {
                Ti.API.info(' ' + setPositions[j]);
            }
        };
       /* Ti.API.info('alerts : '+ eventFromCalendar.alerts);
        var newAlerts = eventFromCalendar.alerts;
        
        for(var i=0 ; i < newAlerts.length ; i++) {
            Ti.API.info('*****ALert '+ i);
            Ti.API.info('absoluteDate :'+ newAlerts[i].absoluteDate);
            Ti.API.info('relativeOffset ;' + newAlerts[i].relativeOffset);
        }
        */
   }
}
function performCalendarWriteFunctions(section){
    var defCalendar = Ti.Calendar.defaultCalendar;
    var days = getDayInt(section.get("DAY"));   
    
     if(!section.get("BEGIN_TIME") || !section.get("END_TIME") || !days){
    	alert("invalid time.");
    	return;
    }
    
    var today = new Date();
    var daycurrent = today.getDay();//get current day of week
    var daytoset = days[0] - 1;//get the first day
    
    today.setDate(today.getDate() + daytoset - daycurrent);
    
    today = today.toString();
    today = today.substring(0,16);  
    
    var date1 = new Date(today + section.get("BEGIN_TIME")),
        date2 = new Date(today + section.get("END_TIME"));


    Ti.API.info('Date1 : '+ date1 + 'Date2 : '+ date2);
    
    try{
    var event1 = defCalendar.createEvent({
                        title: section.get("SIS_COURSE_ID"),
                        notes: 'Courses.',
                        location: section.get("LOCATION"),
                        begin: date1,
                        end: date2,
                        availability: Ti.Calendar.AVAILABILITY_FREE,
                        allDay: false,
                });    	
    }
    catch(e){
    	console.log("fail to create event");
    }

 /*   var alert1 = event1.createAlert({
                        absoluteDate: new Date(new Date().getTime() - (1000*60*20))
                });
    var alert2 = event1.createAlert({
        relativeOffset:-(60*15)
    })
    var allAlerts = new Array(alert1,alert2);
    event1.alerts = allAlerts;*/
   
   
   var recur = [];
   _.each(days,function(day){
   	recur.push({dayOfWeek: day + 1});
   });
   
    var newRule = event1.createRecurenceRule({
                        frequency: Ti.Calendar.RECURRENCEFREQUENCY_WEEKLY,
                        interval: 1,
                        daysOfTheWeek: recur,
                        end: {occurrenceCount:10}
                });
    Ti.API.info('newRule : '+ newRule);
    event1.recurrenceRules = [newRule];
    Ti.API.info('Going to save event now');
    event1.save(Ti.Calendar.SPAN_THISEVENT);
    Ti.API.info('Done with saving event,\n Now trying to retreive it.');
    alert("Successfully saved event.");
    printEventDetails(event1.id);
}
