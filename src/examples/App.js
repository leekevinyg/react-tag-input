import React, { Fragment } from "react";
import styled from 'styled-components';
import { TagInput } from "../lib";

const exampleTags = ['Bruce Lee', 'Royce Gracie'];
const onTagsChanged = (newTags) => {
    console.log(`tags changed to: ${newTags}`)
};

const GithubRibbon = styled.div`
    position: absolute;
    font-family: 'Hind', sans-serif;
    font-size: 20px;
    top:-35px;
    right:-114px;
    transform-origin: top left;
    transform: rotate(45deg);
    background-color: black;
`;

const GithubRibbonLink = styled.a`
    display: inline-block;
    width: 250px;
    color: #fff;
    font-size: 0.8em;
    letter-spacing: 0.06em;
    text-shadow: 0 -1px #777;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
`;

const App = () => (
    <Fragment>
        <TagInput tags={exampleTags} onTagsChanged={onTagsChanged} />
        <GithubRibbon>
            <GithubRibbonLink href="https://github.com/leekevinyg/react-tag-input">
                Fork me on github
            </GithubRibbonLink>
        </GithubRibbon>
    </Fragment>
);

export default App;
