exports.definition = {
	config: {
		adapter: {
			type: "restapi",
			collection_name: "Connection",
			idAttribute: "id"
		},
		hearders:{
			"Access-Control-Allow-Origin": "http://petri.esd.usc.edu/socAPI",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "X-PINGOTHER"
		}
	},
	extendModel: function(Model) {
		// extended functions and properties go here
		_.extend(Model.prototype, {
			baseUrl:"http://petri.esd.usc.edu/socAPI/",
			setDir:function(dir){
				//set directory url = [baseUrl] + [dir]
				this.dir = dir;
			},
			url:function() {
                return this.baseUrl + this.dir;
            }
		}); 

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			baseUrl:"http://petri.esd.usc.edu/socAPI/",
			setDir:function(dir){
				//set directory url = [baseUrl] + [dir]
				this.dir = dir;
			},
			url:function() {
                return this.baseUrl + this.dir;
            }
		});

		return Collection;
	}
};