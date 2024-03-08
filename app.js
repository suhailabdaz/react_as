const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"hello"),React.createElement("h2",{},"there")]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"General"),React.createElement("h2",{},"Kenobi !!")])])

const root=ReactDOM.createRoot(document.getElementById("root"))
console.log(parent);

root.render(parent)