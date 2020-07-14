import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Bowl from "./Bowl";

function App() {

    const [bowls, setBowls] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [placeholder, setPlaceholder] = useState("Loading");

    useEffect(() => {
        getBowls();
    }, []);

    const getBowls = () => {
        fetch("api/bowl")
            .then(response => {
                if (response.status > 400) {
                    setPlaceholder("Something went wrong!")
                }
                return response.json();
            })
            .then(data => {
                setBowls(data)
                setLoaded(true)
            });
    }

    return (
        <div>
            <Header />
            {bowls.map(bowl => (
                <Bowl
                    key={bowl.id}
                    name={bowl.name}
                    style={bowl.style}
                    comment={bowl.comment}
                />
            ))}
        </div>
    );
}

export default App;

const container = document.getElementById("app");
ReactDOM.render(<App />, container);