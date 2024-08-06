"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStateUpdateNew = showStateUpdateNew;
var glide_1 = require("@servicenow/glide");
function showStateUpdateNew(current, previous) {
    var currentState = current.getDisplayValue('state');
    var previousState = previous.getDisplayValue('state');
    printMsg(currentState, previousState);
}
var printMsg = function (currentState, previousState) {
    glide_1.gs.addInfoMessage("currentState: ".concat(currentState, "; previousState: ").concat(previousState));
};
// "allowJs": true,
