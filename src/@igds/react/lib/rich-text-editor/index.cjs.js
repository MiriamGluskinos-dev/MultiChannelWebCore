'use strict';

var richTextEditor_RichTextEditor = require('./RichTextEditor.cjs.js');
var richTextEditor_EditorToolbar = require('./EditorToolbar.cjs.js');
var richTextEditor_ToolbarItem = require('./ToolbarItem.cjs.js');
var richTextEditor = require('@igds/core-web/rich-text-editor');
require('react/jsx-runtime');
require('react');
require('@lit/react');
require('@igds/core-web/constants');



exports.RichTextEditor = richTextEditor_RichTextEditor.RichTextEditor;
exports.EditorToolbar = richTextEditor_EditorToolbar.EditorToolbar;
exports.ToolbarItem = richTextEditor_ToolbarItem.ToolbarItem;
Object.defineProperty(exports, "EditorToolbarWC", {
	enumerable: true,
	get: function () { return richTextEditor.EditorToolbar; }
});
Object.defineProperty(exports, "RichTextEditorWC", {
	enumerable: true,
	get: function () { return richTextEditor.RichTextEditor; }
});
Object.defineProperty(exports, "ToolbarItemWC", {
	enumerable: true,
	get: function () { return richTextEditor.ToolbarItem; }
});
