import React, { Fragment } from "react";
import styled from 'styled-components';
import { TagInput } from "../lib";

const exampleTags = [{
    id: 1,
    displayValue: 'Bruce Lee',
 }, {
    id: 2,
    displayValue: 'Royce Gracie',
 }];

const onTagsChanged = (newTags) => {
    console.log('tags changed to: ', newTags);
};

const onInputChanged = (e) => {
    console.log(`input value is now: ${e.target.value}`);
}

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
        <TagInput tags={exampleTags} onTagsChanged={onTagsChanged} onInputChanged={onInputChanged}/>
        <GithubRibbon>
            <GithubRibbonLink href="https://github.com/leekevinyg/react-tag-input">
                Fork me on github
            </GithubRibbonLink>
        </GithubRibbon>
    </Fragment>
);

export default App;
