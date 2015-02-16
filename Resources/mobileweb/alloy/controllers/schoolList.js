function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showDeptList() {
        alert("click label");
        var model = $model;
        model.fetch({
            success: function() {
                var depts = model.get("SOC_DEPARTMENT_CODE");
                var data = [];
                for (var i = 0; i < depts.length; i++) {
                    var row = Titanium.UI.createLabel({
                        title: depts[i].SOC_DEPARTMENT_CODE
                    });
                    data.push(row);
                }
                console.log(data[0]);
                $.schoolRow.add(data[0]);
                console.log($.schoolRow);
            }
        });
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
    $.__views.schoolRow = Ti.UI.createTableViewRow({
        height: "auto",
        id: "schoolRow",
        layout: "vertical"
    });
    $.__views.schoolRow && $.addTopLevelView($.__views.schoolRow);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "undefined" != typeof $model.__transform["SOC_SCHOOL_DESCRIPTION"] ? $model.__transform["SOC_SCHOOL_DESCRIPTION"] : $model.get("SOC_SCHOOL_DESCRIPTION"),
        id: "__alloyId21"
    });
    $.__views.schoolRow.add($.__views.__alloyId21);
    showDeptList ? $.__views.__alloyId21.addEventListener("click", showDeptList) : __defers["$.__views.__alloyId21!click!showDeptList"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Collections.School;
    __defers["$.__views.__alloyId21!click!showDeptList"] && $.__views.__alloyId21.addEventListener("click", showDeptList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;