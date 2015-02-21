var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "restapi",
            collection_name: "Course",
            idAttribute: "COURSE_ID"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            urlRoot: "http://petri.esd.usc.edu/socAPI/Courses/",
            setDir: function(dir) {
                this.dir = dir;
            },
            url: function() {
                return this.urlRoot + this.dir;
            },
            title: function() {
                return this.get("SIS_COURSE_ID") + " " + this.get("TITLE");
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            urlRoot: "http://petri.esd.usc.edu/socAPI/Courses/",
            setDir: function(dir) {
                this.dir = dir;
            },
            url: function() {
                return this.urlRoot + this.dir;
            }
        });
        return Collection;
    }
};

model = Alloy.M("Course", exports.definition, []);

collection = Alloy.C("Course", exports.definition, model);

exports.Model = model;

exports.Collection = collection;