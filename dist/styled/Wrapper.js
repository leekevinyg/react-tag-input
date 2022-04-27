'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #F1F3F4;\n  box-shadow: 3px 3px 10px rgba(0,0,0, 0.1);\n  font-family: \'Hind\', sans-serif;\n  font-weight: 400;\n  border-radius: 20px;\n  padding: 10px;\n  font-size: large;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n'], ['\n  background: #F1F3F4;\n  box-shadow: 3px 3px 10px rgba(0,0,0, 0.1);\n  font-family: \'Hind\', sans-serif;\n  font-weight: 400;\n  border-radius: 20px;\n  padding: 10px;\n  font-size: large;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 70%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

exports.default = Wrapper;