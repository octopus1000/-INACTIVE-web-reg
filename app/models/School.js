exports.definition = {
	config: {
		adapter: {
			type: "properties",
			collection_name: "School"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			defaults:{
				"SOC_SCHOOL_CODE":"",
				"SOC_SCHOOL_DESCRIPTION":"",
				"SOC_DEPARTMENT_CODE":[]
			}
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