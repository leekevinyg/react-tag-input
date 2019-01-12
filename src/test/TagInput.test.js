import React from 'react';
import { mount } from 'enzyme';
import { TagInput } from "../lib";

describe('<TagInput />', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            tags: [{
                id: 1,
                displayValue: 'Bruce Lee',
            }, {
                id: 2,
                displayValue: 'Royce Gracie',
            }],
            onTagsChanged: jest.fn(),
            onInputChanged: jest.fn(),
        };
    });

    it('focuses the search input when the component mounts', () => {
        const focusInputSpy = jest.spyOn(TagInput.prototype, 'focusInput');
        wrapper = mount(<TagInput {...props} />);
        wrapper.instance().componentDidMount();
        expect(focusInputSpy).toHaveBeenCalled();
    });

    it('deletes a tag when x is pressed', () => {
        wrapper = mount(<TagInput {...props} />);
        wrapper.find('[data-test="tag-delete-0"]').simulate("click");
        expect(wrapper.state().selectedTags.length).toBe(1);
    });

    it('adds a tag when enter is pressed', () => {
        wrapper = mount(<TagInput {...props} />);
        const input = wrapper.find('input');
        input.simulate('keyup', {
            key: 'Enter',
            target: {
                value: 'Angela Lee',
            },
        });
        expect(wrapper.state().selectedTags.length).toBe(3);
    });

    it('removes a tag when backspace is pressed', () => {
        wrapper = mount(<TagInput {...props} />);
        const input = wrapper.find('input');
        input.simulate('keydown', {
            key: 'Backspace',
        });
        expect(wrapper.state().selectedTags.length).toBe(1);
    });
});
