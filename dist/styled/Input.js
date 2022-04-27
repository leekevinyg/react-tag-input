'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #F1F3F4;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  font-size: large;\n  display: inline-block;\n  width: 100%;\n  color: #69626D;\n  font-weight: 400;\n  &::-webkit-input-placeholder {\n    font-weight: 100;\n    font-style: italic;\n    color: #69626D;\n  }\n'], ['\n  background: #F1F3F4;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  font-size: large;\n  display: inline-block;\n  width: 100%;\n  color: #69626D;\n  font-weight: 400;\n  &::-webkit-input-placeholder {\n    font-weight: 100;\n    font-style: italic;\n    color: #69626D;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input(_templateObject);

exports.default = Input;