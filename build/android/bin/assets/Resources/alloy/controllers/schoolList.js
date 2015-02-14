function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        __alloyId27.opts || {};
        var models = __alloyId26.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = {};
            var __alloyId25 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId23.__transform["SOC_SCHOOL_DESCRIPTION"] ? __alloyId23.__transform["SOC_SCHOOL_DESCRIPTION"] : __alloyId23.get("SOC_SCHOOL_DESCRIPTION")
            });
            rows.push(__alloyId25);
        }
        $.__views.schoolList.setData(rows);
    }
    function fetchSchoolList() {
        var conn = Alloy.createCollection("Connection");
        conn.setDir("Schools");
        conn.fetch({
            success: function() {
                _.each(conn.models, function(elem) {
                    schools.add(Alloy.createModel("School", {
                        SOC_SCHOOL_CODE: elem.get("SOC_SCHOOL_CODE"),
                        SOC_SCHOOL_DESCRIPTION: elem.get("SOC_SCHOOL_DESCRIPTION")
                    }));
                });
            },
            error: function() {
                Ti.API.error("hmm - this is not good!");
            }
        });
    }
    function showDeptList(e) {
        var model = schools.at(e.index);
        if (model) {
            var args = {
                schoolcode: model.get("SOC_SCHOOL_CODE")
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
    var __alloyId26 = Alloy.Collections["School"] || School;
    __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
    $.__views.schoolList && $.addTopLevelView($.__views.schoolList);
    showDeptList ? $.__views.schoolList.addEventListener("click", showDeptList) : __defers["$.__views.schoolList!click!showDeptList"] = true;
    exports.destroy = function() {
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
    };
    _.extend($, $.__views);
    var schools = Alloy.Collections.School;
    fetchSchoolList(schools);
    __defers["$.__views.schoolList!click!showDeptList"] && $.__views.schoolList.addEventListener("click", showDeptList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;