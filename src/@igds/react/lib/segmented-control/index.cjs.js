'use strict';

var segmentedControl_SegmentedControl = require('./SegmentedControl.cjs.js');
var segmentedControl_Segment = require('./Segment.cjs.js');
var segmentedControl = require('@igds/core-web/segmented-control');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.SegmentedControl = segmentedControl_SegmentedControl.SegmentedControl;
exports.Segment = segmentedControl_Segment.Segment;
Object.defineProperty(exports, "SegmentWC", {
	enumerable: true,
	get: function () { return segmentedControl.Segment; }
});
Object.defineProperty(exports, "SegmentedControlWC", {
	enumerable: true,
	get: function () { return segmentedControl.SegmentedControl; }
});
