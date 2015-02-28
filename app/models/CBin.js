//var moment = require('alloy/moment');

exports.definition = {
	config: {
		"columns": {
			"SECTION":"text",
			"TYPE": "text",
			"REGISTERED": "text",
			"BEGIN_TIME":"text",
			"END_TIME":"text",
			"DAY":"text",
			"LOCATION":"text",
			"INSTRUCTOR":"text",
			"SIS_COURSE_ID":"text"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "cbin"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};