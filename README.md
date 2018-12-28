# React Tag Input 

A simple react tag input component built using styled components that is suitable for deployment to a npm registry.

To start up a dev env that runs the example react app utilizing the component: 

1) ``` npm install ``` 
2) ``` npm start ```

To build the example app, run: ``` npm run build-examples ```. The output of this command is what is running at https://leekevinyg.github.io/react-tag-input/.

To build for a npm registry run: ``` npm run build ```. When this command is run, contents in the src/lib will be bundled and outputted to the dist folder, which can in turn, be published to a npm registry.

# Component Interface

This is a customizable component. It exposes the following props:

* wrapperStyle

A js template string to be used to override the default wrapper styles. The example below will override the wrapper ```background``` and disable the default ```box-shadow```. The template string can be anything that you would normally pass down as a [styled-component](https://www.styled-components.com/docs/basics#getting-started "Styled Component") configuration.

```
  <TagInput wrapperStyle={`
    background: red;
    box-shadow: none;
  `}/>

```

* inputStyle

A js template string to be used to override the default input styles. The example below will override the input ```background``` color and override the placeholder text styling in webkit based browsers. The template string can be anything that you would normally pass down as a [styled-component](https://www.styled-components.com/docs/basics#getting-started "Styled Component") configuration.

```
  <TagInput inputStyle={`
    background: red;
    &::-webkit-input-placeholder {
        font-weight: 600;
        font-style: bold;
        color: black;
    }
  `}/>

```

* tagStyle

A js template string to be used to override the default tag styles. The example below will override the tag ```background``` color. The template string can be anything that you would normally pass down as a [styled-component](https://www.styled-components.com/docs/basics#getting-started "Styled Component") configuration.

```
  <TagInput tagStyle={`
    background: red;
  `}/>

```