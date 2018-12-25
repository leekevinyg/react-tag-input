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
        this.onInputKeyup = this.onInputKeyup.bind(this);
        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.input = React.createRef();
    }

    componentDidMount () {
        this.input.addEventListener('keyup', this.onInputKeyup);
    }

    componentWillUnmount () {
        this.input.removeEventListener('keyup', this.onInputKeyup);
    }

    clearInput () {
        this.input.value = '';
    }

    onInputKeyup (e) {
        if (e.key === 'Enter') {
            this.setState((state) => ({
                selectedTags: [
                    ...state.selectedTags,
                    e.target.value,
                ]
            }), () => this.clearInput());
        } else if (e.key === 'Backspace') {
            this.setState((state) => ({
                selectedTags: state.selectedTags.splice(0, state.selectedTags.length - 1),
            }));
        }
    }

    renderTags () {
        const { selectedTags } = this.state;
        return selectedTags.length > 0 ? selectedTags.map(tag => <Tag key={tag}>{tag}</Tag>) : null;
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
    listItems: PropTypes.array,
}

TagInput.defaultProps = {
    placeholder: 'Type something and hit enter...',
    listItems: ['Bruce Lee', 'Royce Gracie'],
}

export default TagInput;