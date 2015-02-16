function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId20(e) {
        if (e && e.fromAdapter) return;
        __alloyId20.opts || {};
        var models = __alloyId19.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Alloy.createController("schoolList", {
                $model: __alloyId16
            });
            rows.push(__alloyId18.getViewEx({
                recurse: true
            }));
        }
        $.__views.schoolTable.setData(rows);
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
    $.__views.schoolTable = Ti.UI.createTableView({
        id: "schoolTable"
    });
    $.__views.index.add($.__views.schoolTable);
    var __alloyId19 = Alloy.Collections["School"] || School;
    __alloyId19.on("fetch destroy change add remove reset", __alloyId20);
    exports.destroy = function() {
        __alloyId19.off("fetch destroy change add remove reset", __alloyId20);
    };
    _.extend($, $.__views);
    var schools = Alloy.Collections.School;
    schools.fetch({
        success: function() {
            console.log("schools fetched, length:" + schools.length);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;