import React, { Component } from "react";
import PropTypes from 'prop-types';
import Wrapper from './styled/Wrapper';
import Tag from './styled/Tag';
import Input from './styled/Input';

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: [],
        }
        this.renderTags = this.renderTags.bind(this);
        this.onInputKeyUp = this.onInputKeyUp.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onWrapperClick = this.onWrapperClick.bind(this);
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

    clearInput () {
        this.input.value = '';
    }

    onInputKeyUp (e) {
        const inputValue = e.target.value;
        if (e.key === 'Enter' && inputValue && inputValue.trim() !== '') {
            this.setState((state) => ({
                selectedTags: [
                    ...state.selectedTags,
                    e.target.value,
                ]
            }), () => this.clearInput());
        }
    }

    onInputKeyDown (e) {
        if (e.key === 'Backspace' && e.target.selectionStart === 0) {
            this.setState((state) => ({
                selectedTags: state.selectedTags.splice(0, state.selectedTags.length - 1),
            }));
        }
    }

    renderTags () {
        const { selectedTags } = this.state;
        return selectedTags.length > 0 ? selectedTags.map((tag, index) => 
            <Tag key={index}>{tag}</Tag>) : null;
    }

    focusInput () {
        this.input.focus();
    }

    onWrapperClick () {
        this.focusInput();
    }

    renderPlaceholder () {
        const { selectedTags } = this.state;
        const { placeholder } = this.props;
        return selectedTags.length > 0 ? null : placeholder;
    }

    render () {
        return (
            <Wrapper onClick={this.onWrapperClick}>
                {this.renderTags()}
                <Input ref={el => this.input = el} placeholder={this.renderPlaceholder()} type="text" />
            </Wrapper>
        )
    }
}

TagInput.propTypes = {
    placeholder: PropTypes.string,
}

TagInput.defaultProps = {
    placeholder: 'Type something and hit enter...',
}

export default TagInput;