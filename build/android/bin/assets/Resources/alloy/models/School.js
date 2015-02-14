var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "School"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            defaults: {
                SOC_SCHOOL_CODE: "",
                SOC_SCHOOL_DESCRIPTION: "",
                SOC_DEPARTMENT_CODE: []
            }
        });
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