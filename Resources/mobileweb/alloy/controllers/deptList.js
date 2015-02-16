function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId13(e) {
        if (e && e.fromAdapter) return;
        __alloyId13.opts || {};
        var models = filter(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = {};
            var __alloyId11 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId9.__transform["SOC_DEPARTMENT_DESCRIPTION"] ? __alloyId9.__transform["SOC_DEPARTMENT_DESCRIPTION"] : __alloyId9.get("SOC_DEPARTMENT_DESCRIPTION")
            });
            rows.push(__alloyId11);
        }
        $.__views.__alloyId8.setData(rows);
    }
    function filter(depts) {
        return school ? depts.where({
            SOC_SCHOOL_CODE: school.get("SOC_SCHOOL_CODE")
        }) : depts.models;
    }
    function showCourseList(e) {
        var filteredDepts = filter(depts);
        var model = filteredDepts[e.index];
        if (model) {
            var args = {
                deptcode: model.get("SOC_DEPARTMENT_CODE")
            };
            Alloy.createController("courseList", args).getView().open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "deptList";
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
    var __defers = {};
    Alloy.Collections.instance("Dept");
    $.__views.deptList = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "deptList"
    });
    $.__views.deptList && $.addTopLevelView($.__views.deptList);
    $.__views.__alloyId8 = Ti.UI.createTableView({
        id: "__alloyId8"
    });
    $.__views.deptList.add($.__views.__alloyId8);
    var __alloyId12 = Alloy.Collections["Dept"] || Dept;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    showCourseList ? $.__views.__alloyId8.addEventListener("click", showCourseList) : __defers["$.__views.__alloyId8!click!showCourseList"] = true;
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var depts = Alloy.Collections.Dept;
    var school = args.school;
    !school || void 0 != school.get("SOC_DEPARTMENT_CODE") && 0 != school.get("SOC_DEPARTMENT_CODE").length || school.fetch({
        success: function() {
            console.log("get department");
            depts.add(school.get("SOC_DEPARTMENT_CODE"));
        }
    });
    __defers["$.__views.__alloyId8!click!showCourseList"] && $.__views.__alloyId8.addEventListener("click", showCourseList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;