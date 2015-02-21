function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    var __alloyId14 = [];
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId15"
    });
    $.__views.__alloyId16 = Alloy.createController("schoolList", {
        id: "__alloyId16",
        __parentSymbol: $.__views.__alloyId15
    });
    $.__views.__alloyId16.setParent($.__views.__alloyId15);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        id: "tab1"
    });
    __alloyId14.push($.__views.tab1);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId14,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    Titanium.UI.currentTab = $.tab1;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;