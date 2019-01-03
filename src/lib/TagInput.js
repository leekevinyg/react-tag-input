import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Wrapper from './styled/Wrapper';
import Tag from './styled/Tag';
import Input from './styled/Input';
import TagDelete from './styled/TagDelete';

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
        }
        this.renderTags = this.renderTags.bind(this);
        this.onInputKeyUp = this.onInputKeyUp.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.removeTag = this.removeTag.bind(this);
        this.input = React.createRef();
    }

    componentDidMount () {
        this.input.addEventListener('keyup', this.onInputKeyUp);
        this.input.addEventListener('keydown', this.onInputKeyDown);
    }

    componentWillUnmount () {
        this.input.removeEventListener('keyup', this.onInputKeyUp);
        this.input.removeEventListener('keydown', this.onInputKeyDown);
    }

    onInputKeyUp (e) {
        const inputValue = e.target.value;
        const inputNotEmpty = inputValue && inputValue.trim() !== '';
        const addTag = () => {
            this.setState((state) => ({
                selectedTags: [
                    ...state.selectedTags, {
                        index: state.selectedTags.length + 1,
                        displayValue: e.target.value,
                    },
                ]
            }), () => this.clearInput());
        }

        if (e.key === 'Enter' && inputNotEmpty) {
            addTag();
        }
    }

    onInputKeyDown (e) {
        const deleteLastTag = () => {
            this.setState((state) => ({
                selectedTags: state.selectedTags.splice(0, state.selectedTags.length - 1),
            }));
        };

        if (e.key === 'Backspace' && e.target.selectionStart === 0) {
            deleteLastTag();
        }
    }

    clearInput () {
        this.input.value = '';
    }

    focusInput () {
        this.input.focus();
    }

    removeTag (index) {
        this.setState((state) => ({
            selectedTags: state.selectedTags.filter(tag => tag.index !== index),
        }));
    }

    renderTags () {
        const { selectedTags } = this.state;
        const TagComponent = this.getTagStyledComponent();
        const Delete = this.getTagDeleteComponent();
        const DeleteIcon = this.getDeleteIcon();

        return selectedTags.length > 0 ?
            selectedTags.map((tag, index) =>
                <TagComponent key={index}>
                    {tag.displayValue}
                    <Delete onClick={() => this.removeTag(tag.index)}>{DeleteIcon}</Delete>
                </TagComponent>
            ) :
            null;
    }

    renderPlaceholder () {
        const { selectedTags } = this.state;
        const { placeholder } = this.props;

        return selectedTags.length > 0 ? null : placeholder;
    }

    getDeleteIcon () {
        const { tagDeleteIcon } = this.props;
        return tagDeleteIcon || ' x';
    }

    getTagDeleteComponent () {
        const { tagDeleteStyle } = this.props;

        return tagDeleteStyle ? styled(TagDelete)`
            ${tagDeleteStyle}
        ` : TagDelete;
    }

    getTagStyledComponent () {
        const { tagStyle } = this.props;

        return tagStyle ? styled(Tag)`
            ${tagStyle}
        ` : Tag;
    }

    getInputWrapperStyledComponent () {
        const { wrapperStyle } = this.props;

        return wrapperStyle ? styled(Wrapper)`
            ${wrapperStyle}
        ` : Wrapper;
    }

    getInputStyledComponent () {
        const { inputStyle } = this.props;

        return inputStyle ? styled(Input)`
            ${inputStyle}
        ` : Input;
    }

    render () {
        const InputWrapper = this.getInputWrapperStyledComponent();
        const InputComponent = this.getInputStyledComponent();

        return (
            <InputWrapper onClick={this.focusInput}>
                {this.renderTags()}
                <InputComponent ref={el => this.input = el} placeholder={this.renderPlaceholder()} type="text" />
            </InputWrapper>
        );
    }
}

TagInput.propTypes = {
    placeholder: PropTypes.string,
    wrapperStyle: PropTypes.string,
    inputStyle: PropTypes.string,
    tagStyle: PropTypes.string,
    tagDeleteStyle: PropTypes.string,
    tagDeleteIcon: PropTypes.element,
}

TagInput.defaultProps = {
    placeholder: 'Type something and hit enter...',
}

export default TagInput;