import React, { Fragment } from "react";
import styled from 'styled-components'
import { TagInput } from "../lib";

const exampleTags = ['Bruce Lee', 'Royce Gracie'];
const onTagsChanged = (newTags) => {
    console.log(`tags changed to: ${newTags}`)
};
const GithubLink = styled.a`
    font-family: 'Hind', sans-serif;
    box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 40px;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: black;
    color: white;
`

const App = () => (
    <Fragment>
        <TagInput tags={exampleTags} onTagsChanged={onTagsChanged} />
        <GithubLink href="https://github.com/leekevinyg/react-tag-input">Fork me on github</GithubLink>
    </Fragment>
);

export default App;
