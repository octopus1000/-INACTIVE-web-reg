exports.definition = {
	config: {
		URL:"http://petri.esd.usc.edu/socAPI/Schools/",
		adapter: {
			type: "restapi",
			collection_name: "School",
			idAttribute: "SOC_SCHOOL_CODE"
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