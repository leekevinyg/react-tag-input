'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: gray;\n    }\n'], ['\n    color: white;\n    font-size: 1em;\n    &:hover {\n        color: gray;\n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TagDelete = _styledComponents2.default.span.attrs(function (props) {
    return {
        'data-test': 'tag-delete-' + props.index
    };
})(_templateObject);

exports.default = TagDelete;