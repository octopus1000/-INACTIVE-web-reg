function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function majorDisplay(e) {
        var deptsView = e.source;
        var rows = deptsView.getRows();
        var schoolDetail;
        if (!data.length && $model) {
            schoolDetail = Alloy.createModel("Connection");
            schoolDetail.setDir("Schools/" + $model.get("SOC_SCHOOL_CODE"));
            schoolDetail.fetch({
                success: function() {
                    depts.reset(schoolDetail.get("SOC_DEPARTMENT_CODE"));
                    console.log(schoolDetail.get("SOC_SCHOOL_CODE") + ":" + schoolDetail.get("SOC_SCHOOL_CODE").length);
                    _.each(depts.models, function(dept) {
                        var title = dept.get("SOC_DEPARTMENT_DESCRIPTION");
                        var row = Ti.UI.createTableViewRow({
                            title: title
                        });
                        row.applyProperties($.createStyle({
                            height: "20dp"
                        }));
                        data.push(row);
                    });
                    deptsView.add(data);
                    isDisplayed = true;
                },
                erro: function() {}
            });
        } else if (rows) {
            while (deptsView.getRowCount() > 0) {
                var row = deptsView.getRows()[0];
                deptsView.remove(row);
            }
            isDisplayed = !isDisplayed;
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "schoolList";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        var $model = __processArg(arguments[0], "$model");
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.deptList = Ti.UI.createTableViewSection({
        id: "deptList",
        headerTitle: "undefined" != typeof $model.__transform["SOC_SCHOOL_DESCRIPTION"] ? $model.__transform["SOC_SCHOOL_DESCRIPTION"] : $model.get("SOC_SCHOOL_DESCRIPTION")
    });
    $.__views.deptList && $.addTopLevelView($.__views.deptList);
    majorDisplay ? $.__views.deptList.addEventListener("click", majorDisplay) : __defers["$.__views.deptList!click!majorDisplay"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var depts = Alloy.createCollection("Dept");
    var data = [];
    var isDisplayed = false;
    Alloy.createModel("Connection");
    __defers["$.__views.deptList!click!majorDisplay"] && $.__views.deptList.addEventListener("click", majorDisplay);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;