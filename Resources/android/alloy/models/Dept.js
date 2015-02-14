var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "Dept"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            defaults: {
                SOC_DEPARTMENT_DESCRIPTION: ""
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("Dept", exports.definition, []);

collection = Alloy.C("Dept", exports.definition, model);

exports.Model = model;

exports.Collection = collection;