function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId11(e) {
        if (e && e.fromAdapter) return;
        __alloyId11.opts || {};
        var models = __alloyId10.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId7 = models[i];
            __alloyId7.__transform = {};
            var __alloyId9 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId7.__transform["SOC_DEPARTMENT_DESCRIPTION"] ? __alloyId7.__transform["SOC_DEPARTMENT_DESCRIPTION"] : __alloyId7.get("SOC_DEPARTMENT_DESCRIPTION")
            });
            rows.push(__alloyId9);
        }
        $.__views.__alloyId6.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "courseList";
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
    Alloy.Collections.instance("Course");
    $.__views.courseList = Ti.UI.createWindow({
        id: "courseList"
    });
    $.__views.courseList && $.addTopLevelView($.__views.courseList);
    $.__views.__alloyId2 = Ti.UI.createPicker({
        id: "__alloyId2"
    });
    $.__views.courseList.add($.__views.__alloyId2);
    var __alloyId3 = [];
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "2015Spring",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "2014Fall",
        id: "__alloyId5"
    });
    __alloyId3.push($.__views.__alloyId5);
    $.__views.__alloyId2.add(__alloyId3);
    $.__views.__alloyId6 = Ti.UI.createTableView({
        id: "__alloyId6"
    });
    $.__views.courseList.add($.__views.__alloyId6);
    var __alloyId10 = Alloy.Collections["Course"] || Course;
    __alloyId10.on("fetch destroy change add remove reset", __alloyId11);
    exports.destroy = function() {
        __alloyId10.off("fetch destroy change add remove reset", __alloyId11);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.deptcode;
    Alloy.Collections.Course;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;