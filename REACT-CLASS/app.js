const card = (
    <div
        style={{
            border: "2px solid black",
            padding: "20px",
            width: "300px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#f4f4f4"
        }}
    >
        <h1>Nitin Kumar</h1>

        <p>Frontend Developer</p>

        <button
            onClick={() => alert("Welcome Nitin!")}
        >
            Click Me
        </button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(card);