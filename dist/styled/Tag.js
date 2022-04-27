'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    float: left;\n    background: #77B6EA;\n    color: #69626D;\n    border-radius: 5px;\n    color: white;\n    padding: 5px;\n    margin: 0 5px 5px 0;\n    letter-spacing: 1px;\n    cursor: pointer;\n'], ['\n    float: left;\n    background: #77B6EA;\n    color: #69626D;\n    border-radius: 5px;\n    color: white;\n    padding: 5px;\n    margin: 0 5px 5px 0;\n    letter-spacing: 1px;\n    cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tag = _styledComponents2.default.span(_templateObject);

exports.default = Tag;