var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "restapi",
            collection_name: "Connection",
            idAttribute: "id"
        },
        hearders: {
            "Access-Control-Allow-Origin": "http://petri.esd.usc.edu/socAPI",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "X-PINGOTHER"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            baseUrl: "http://petri.esd.usc.edu/socAPI/",
            setDir: function(dir) {
                this.dir = dir;
            },
            url: function() {
                return this.baseUrl + this.dir;
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            baseUrl: "http://petri.esd.usc.edu/socAPI/",
            setDir: function(dir) {
                this.dir = dir;
            },
            url: function() {
                return this.baseUrl + this.dir;
            }
        });
        return Collection;
    }
};

model = Alloy.M("Connection", exports.definition, []);

collection = Alloy.C("Connection", exports.definition, model);

exports.Model = model;

exports.Collection = collection;