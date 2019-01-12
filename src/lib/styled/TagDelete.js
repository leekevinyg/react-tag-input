import styled from 'styled-components'

const TagDelete = styled.span.attrs(props => ({
    'data-test': `tag-delete-${props.index}`,
}))`
    color: white;
    font-size: 1em;
    &:hover {
        color: gray;
    }
`

export default TagDelete;