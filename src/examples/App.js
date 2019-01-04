import React, { Fragment } from "react";
import { TagInput } from "../lib";

const exampleTags = ['Bruce Lee', 'Royce Gracie'];
const onTagsChanged = (newTags) => {
    console.log(`tags changed to: ${newTags}`)
};

const App = () => (
    <Fragment>
        <TagInput tags={exampleTags} onTagsChanged={onTagsChanged} />
    </Fragment>
);

export default App;
