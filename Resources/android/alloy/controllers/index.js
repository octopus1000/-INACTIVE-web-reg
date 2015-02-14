function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Alloy.createController("schoolList", {
                $model: __alloyId3
            });
            rows.push(__alloyId5.getViewEx({
                recurse: true
            }));
        }
        $.__views.__alloyId2.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("School");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["School"] || School;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    $.index.open();
    var schools = Alloy.Collections.School;
    var restAdaptor = Alloy.createCollection("Connection");
    restAdaptor.setDir("Schools");
    restAdaptor.fetch({
        success: function() {
            console.log(restAdaptor);
            _.each(restAdaptor.models, function(elem) {
                schools.add(Alloy.createModel("School", {
                    SOC_SCHOOL_CODE: elem.get("SOC_SCHOOL_CODE"),
                    SOC_SCHOOL_DESCRIPTION: elem.get("SOC_SCHOOL_DESCRIPTION"),
                    SOC_DEPARTMENT_CODE: elem.get("SOC_DEPARTMENT_CODE")
                }));
                console.log(schools);
            });
        },
        error: function() {
            Ti.API.error("hmm - this is not good!");
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;