const parent = React.createElement(
    "div",                 // the element name
    {id: "parent"},        // the attributes
    React.createElement(   // the child
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
            "Inside Header 1"
        )
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);