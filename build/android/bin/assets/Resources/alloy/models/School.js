var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        URL: "http://petri.esd.usc.edu/socAPI/Schools/",
        adapter: {
            type: "restapi",
            collection_name: "School",
            idAttribute: "SOC_SCHOOL_CODE"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("School", exports.definition, []);

collection = Alloy.C("School", exports.definition, model);

exports.Model = model;

exports.Collection = collection;