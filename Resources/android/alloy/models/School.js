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
<<<<<<< HEAD
        _.extend(Model.prototype, {});
=======
        _.extend(Model.prototype, {
            defaults: {
                SOC_SCHOOL_CODE: "NULL",
                SOC_SCHOOL_DESCRIPTION: "NULL",
                SOC_DEPARTMENT_CODE: []
            }
        });
>>>>>>> parent of 3b2732f... seperate dept and school view
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