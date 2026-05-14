'use strict';

var table_Table = require('./Table.cjs.js');
var table_TableHeader = require('./TableHeader.cjs.js');
var table_TableRow = require('./TableRow.cjs.js');
var table_TableCell = require('./TableCell.cjs.js');
var table = require('@igds/core-web/table');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.Table = table_Table.Table;
exports.TableHeader = table_TableHeader.TableHeader;
exports.TableRow = table_TableRow.TableRow;
exports.TableCell = table_TableCell.TableCell;
Object.defineProperty(exports, "TableCellWC", {
	enumerable: true,
	get: function () { return table.TableCell; }
});
Object.defineProperty(exports, "TableHeaderWC", {
	enumerable: true,
	get: function () { return table.TableHeader; }
});
Object.defineProperty(exports, "TableRowWC", {
	enumerable: true,
	get: function () { return table.TableRow; }
});
Object.defineProperty(exports, "TableWC", {
	enumerable: true,
	get: function () { return table.Table; }
});
