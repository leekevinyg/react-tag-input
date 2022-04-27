'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n            ', '\n        '], ['\n            ', '\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Wrapper = require('./styled/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Tag = require('./styled/Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _Input = require('./styled/Input');

var _Input2 = _interopRequireDefault(_Input);

var _TagDelete = require('./styled/TagDelete');

var _TagDelete2 = _interopRequireDefault(_TagDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagInput = function (_Component) {
    _inherits(TagInput, _Component);

    function TagInput(props) {
        _classCallCheck(this, TagInput);

        var _this = _possibleConstructorReturn(this, (TagInput.__proto__ || Object.getPrototypeOf(TagInput)).call(this, props));

        _this.state = {
            selectedTags: []
        };
        _this.renderTags = _this.renderTags.bind(_this);
        _this.onInputKeyUp = _this.onInputKeyUp.bind(_this);
        _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
        _this.focusInput = _this.focusInput.bind(_this);
        _this.removeTag = _this.removeTag.bind(_this);
        _this.input = _react2.default.createRef();
        return _this;
    }

    _createClass(TagInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var tags = this.props.tags;

            var propTags = tags.map(function (tag, index) {
                return _extends({
                    index: index
                }, tag);
            });

            this.setState(function (state) {
                return {
                    selectedTags: [].concat(_toConsumableArray(state.selectedTags), _toConsumableArray(propTags))
                };
            });
            this.focusInput();
        }
    }, {
        key: 'onInputKeyUp',
        value: function onInputKeyUp(e) {
            var _this2 = this;

            var _props = this.props,
                addTagOnEnterKeyPressed = _props.addTagOnEnterKeyPressed,
                onTagsChanged = _props.onTagsChanged;

            var inputValue = e.target.value;
            var inputNotEmpty = inputValue && inputValue.trim() !== '';
            var addTag = function addTag() {
                _this2.setState(function (state) {
                    return {
                        selectedTags: [].concat(_toConsumableArray(state.selectedTags), [{
                            index: state.selectedTags.length + 1,
                            displayValue: inputValue
                        }])
                    };
                }, function () {
                    var selectedTags = _this2.state.selectedTags;


                    _this2.clearInput();
                    onTagsChanged(selectedTags);
                });
            };

            if (e.key === 'Enter' && inputNotEmpty && addTagOnEnterKeyPressed) {
                addTag();
            }
        }
    }, {
        key: 'onInputKeyDown',
        value: function onInputKeyDown(e) {
            var _this3 = this;

            var onTagsChanged = this.props.onTagsChanged;

            var deleteLastTag = function deleteLastTag() {
                _this3.setState(function (state) {
                    return {
                        selectedTags: state.selectedTags.splice(0, state.selectedTags.length - 1)
                    };
                }, function () {
                    var selectedTags = _this3.state.selectedTags;

                    onTagsChanged(selectedTags);
                });
            };

            if (e.key === 'Backspace' && e.target.selectionStart === 0) {
                deleteLastTag();
            }
        }
    }, {
        key: 'clearInput',
        value: function clearInput() {
            this.input.value = '';
        }
    }, {
        key: 'focusInput',
        value: function focusInput() {
            this.input.focus();
        }
    }, {
        key: 'removeTag',
        value: function removeTag(index) {
            var _this4 = this;

            this.setState(function (state) {
                return {
                    selectedTags: state.selectedTags.filter(function (tag) {
                        return tag.index !== index;
                    })
                };
            }, function () {
                var selectedTags = _this4.state.selectedTags;
                var onTagsChanged = _this4.props.onTagsChanged;

                onTagsChanged(selectedTags);
            });
        }
    }, {
        key: 'renderTags',
        value: function renderTags() {
            var _this5 = this;

            var selectedTags = this.state.selectedTags;

            var TagComponent = this.getTagStyledComponent();
            var Delete = this.getTagDeleteComponent();
            var DeleteIcon = this.getDeleteIcon();

            return selectedTags.length > 0 ? selectedTags.map(function (tag, index) {
                return _react2.default.createElement(
                    TagComponent,
                    { key: index },
                    tag.displayValue,
                    _react2.default.createElement(
                        Delete,
                        { index: tag.index, onClick: function onClick() {
                                return _this5.removeTag(tag.index);
                            } },
                        DeleteIcon
                    )
                );
            }) : null;
        }
    }, {
        key: 'renderPlaceholder',
        value: function renderPlaceholder() {
            var selectedTags = this.state.selectedTags;
            var _props2 = this.props,
                placeholder = _props2.placeholder,
                hideInputPlaceholderTextIfTagsPresent = _props2.hideInputPlaceholderTextIfTagsPresent;


            return hideInputPlaceholderTextIfTagsPresent && selectedTags.length > 0 ? null : placeholder;
        }
    }, {
        key: 'getDeleteIcon',
        value: function getDeleteIcon() {
            var tagDeleteIcon = this.props.tagDeleteIcon;

            return tagDeleteIcon || ' x';
        }
    }, {
        key: 'getTagDeleteComponent',
        value: function getTagDeleteComponent() {
            var tagDeleteStyle = this.props.tagDeleteStyle;


            return tagDeleteStyle ? (0, _styledComponents2.default)(_TagDelete2.default)(_templateObject, tagDeleteStyle) : _TagDelete2.default;
        }
    }, {
        key: 'getTagStyledComponent',
        value: function getTagStyledComponent() {
            var tagStyle = this.props.tagStyle;


            return tagStyle ? (0, _styledComponents2.default)(_Tag2.default)(_templateObject, tagStyle) : _Tag2.default;
        }
    }, {
        key: 'getInputWrapperStyledComponent',
        value: function getInputWrapperStyledComponent() {
            var wrapperStyle = this.props.wrapperStyle;


            return wrapperStyle ? (0, _styledComponents2.default)(_Wrapper2.default)(_templateObject, wrapperStyle) : _Wrapper2.default;
        }
    }, {
        key: 'getInputStyledComponent',
        value: function getInputStyledComponent() {
            var inputStyle = this.props.inputStyle;


            return inputStyle ? (0, _styledComponents2.default)(_Input2.default)(_templateObject, inputStyle) : _Input2.default;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var onInputChanged = this.props.onInputChanged;

            var InputWrapper = this.getInputWrapperStyledComponent();
            var InputComponent = this.getInputStyledComponent();

            return _react2.default.createElement(
                InputWrapper,
                { onClick: this.focusInput },
                this.renderTags(),
                _react2.default.createElement(InputComponent, {
                    ref: function ref(el) {
                        return _this6.input = el;
                    },
                    onChange: onInputChanged,
                    placeholder: this.renderPlaceholder(),
                    type: 'text',
                    onKeyUp: this.onInputKeyUp,
                    onKeyDown: this.onInputKeyDown })
            );
        }
    }]);

    return TagInput;
}(_react.Component);

TagInput.propTypes = {
    tags: _propTypes2.default.array.isRequired,
    onTagsChanged: _propTypes2.default.func.isRequired,
    onInputChange: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    wrapperStyle: _propTypes2.default.string,
    inputStyle: _propTypes2.default.string,
    tagStyle: _propTypes2.default.string,
    tagDeleteStyle: _propTypes2.default.string,
    tagDeleteIcon: _propTypes2.default.element,
    addTagOnEnterKeyPressed: _propTypes2.default.bool,
    hideInputPlaceholderTextIfTagsPresent: _propTypes2.default.bool
};

TagInput.defaultProps = {
    placeholder: 'Type something and hit enter...',
    addTagOnEnterKeyPressed: true,
    hideInputPlaceholderTextIfTagsPresent: true
};

exports.default = TagInput;