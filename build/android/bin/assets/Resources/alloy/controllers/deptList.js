function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        __alloyId19.opts || {};
        var models = __alloyId18.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = {};
            var __alloyId17 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId15.__transform["SOC_DEPARTMENT_DESCRIPTION"] ? __alloyId15.__transform["SOC_DEPARTMENT_DESCRIPTION"] : __alloyId15.get("SOC_DEPARTMENT_DESCRIPTION")
            });
            rows.push(__alloyId17);
        }
        $.__views.__alloyId14.setData(rows);
    }
    function fetchDeptList(schoolcode) {
        var conn = Alloy.createModel("Connection");
        conn.setDir("Schools/" + schoolcode);
        conn.fetch({
            success: function() {
                console.log(conn);
                depts.reset(conn.get("SOC_DEPARTMENT_CODE"));
            },
            error: function() {
                Ti.API.error("hmm - this is not good!");
            }
        });
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
    Alloy.Collections.instance("Dept");
    $.__views.deptList = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "deptList"
    });
    $.__views.deptList && $.addTopLevelView($.__views.deptList);
    $.__views.__alloyId14 = Ti.UI.createTableView({
        id: "__alloyId14"
    });
    $.__views.deptList.add($.__views.__alloyId14);
    var __alloyId18 = Alloy.Collections["Dept"] || Dept;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var depts = Alloy.Collections.Dept;
    args.schoolcode && fetchDeptList(args.schoolcode);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;