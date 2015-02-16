var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "properties",
            collection_name: "Course",
            idAttribute: "COURSE_ID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            urlRoot: "http://petri.esd.usc.edu/socAPI/Courses/",
            url: function() {
                return urlRoot + this.dir ? this.dir : "" + this.id ? this.id : "";
            }
        });
        return Collection;
    }
};

model = Alloy.M("Course", exports.definition, []);

collection = Alloy.C("Course", exports.definition, model);

exports.Model = model;

exports.Collection = collection;