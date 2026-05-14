'use strict';

var accordion_Accordion = require('./Accordion.cjs.js');
var accordion_AccordionItem = require('./AccordionItem.cjs.js');
var accordion = require('@igds/core-web/accordion');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');
require('../hoc/Slotted.cjs.js');



exports.Accordion = accordion_Accordion.Accordion;
exports.AccordionItem = accordion_AccordionItem.AccordionItem;
Object.defineProperty(exports, "AccordionItemWC", {
	enumerable: true,
	get: function () { return accordion.AccordionItem; }
});
Object.defineProperty(exports, "AccordionWC", {
	enumerable: true,
	get: function () { return accordion.Accordion; }
});
