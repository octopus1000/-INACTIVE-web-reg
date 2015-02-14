exports.definition = {
	config: {
		adapter: {
			type: "properties",
			collection_name: "Dept"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			defaults:{
				SOC_DEPARTMENT_CODE:"",
				SOC_DEPARTMENT_DESCRIPTION:""
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