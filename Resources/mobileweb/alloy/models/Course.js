var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "Course"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            defaults: {
                id: "NULL",
                name: "NULL"
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("Course", exports.definition, []);

collection = Alloy.C("Course", exports.definition, model);

exports.Model = model;

exports.Collection = collection;