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
});
