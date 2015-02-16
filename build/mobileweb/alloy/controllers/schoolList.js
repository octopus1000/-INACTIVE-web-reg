function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId21(e) {
        if (e && e.fromAdapter) return;
        __alloyId21.opts || {};
        var models = __alloyId20.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = {};
            var __alloyId19 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId17.__transform["SOC_SCHOOL_DESCRIPTION"] ? __alloyId17.__transform["SOC_SCHOOL_DESCRIPTION"] : __alloyId17.get("SOC_SCHOOL_DESCRIPTION")
            });
            rows.push(__alloyId19);
        }
        $.__views.schoolList.setData(rows);
    }
    function showDeptList(e) {
        var model = schools.at(e.index);
        if (model) {
            var args = {
                school: model
            };
            Alloy.createController("deptList", args).getView().open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schoolList";
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
    Alloy.Collections.instance("School");
    $.__views.schoolList = Ti.UI.createTableView({
        id: "schoolList"
    });
    var __alloyId20 = Alloy.Collections["School"] || School;
    __alloyId20.on("fetch destroy change add remove reset", __alloyId21);
    $.__views.schoolList && $.addTopLevelView($.__views.schoolList);
    showDeptList ? $.__views.schoolList.addEventListener("click", showDeptList) : __defers["$.__views.schoolList!click!showDeptList"] = true;
    exports.destroy = function() {
        __alloyId20.off("fetch destroy change add remove reset", __alloyId21);
    };
    _.extend($, $.__views);
    var schools = Alloy.Collections.School;
    schools.fetch({
        success: function() {
            console.log("schools fetched, length:" + schools.length);
        }
    });
    __defers["$.__views.schoolList!click!showDeptList"] && $.__views.schoolList.addEventListener("click", showDeptList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;