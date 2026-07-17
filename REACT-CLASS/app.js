const card = React.createElement("div",{style:{
    border: "2px solid black",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    textAlign:"center",
    backgroundColor:"#f4f4fr4"

}},
React.createElement(
    "h1",
    null,
    "Nitin Kumar"
),
React.createElement(
    "p",
    null,
    "Frontend Developer"
),
React.createElement("button",{
    onClick: function(){
        alert("Welcome Nitin!");
    }
}, "Click Me"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(card);