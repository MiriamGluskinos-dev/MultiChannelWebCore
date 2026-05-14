'use strict';

var stepIndicator_StepIndicator = require('./StepIndicator.cjs.js');
var stepIndicator_StepItem = require('./StepItem.cjs.js');
var stepIndicator = require('@igds/core-web/step-indicator');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.StepIndicator = stepIndicator_StepIndicator.StepIndicator;
exports.StepItem = stepIndicator_StepItem.StepItem;
Object.defineProperty(exports, "StepIndicatorWC", {
	enumerable: true,
	get: function () { return stepIndicator.StepIndicator; }
});
Object.defineProperty(exports, "StepItemWC", {
	enumerable: true,
	get: function () { return stepIndicator.StepItem; }
});
