exports.definition = {
	config: {
		adapter: {
			type: "properties",
			collection_name: "Course"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			defaults:{
				id:"NULL",
				name:"NULL"
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