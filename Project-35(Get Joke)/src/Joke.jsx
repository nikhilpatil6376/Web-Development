import { useEffect } from "react";
import { useState } from "react";
import "./Joke.css";

export default function Joke(){
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }

    useEffect(() => {
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline });
        }
        getFirstJoke();
    }, []);

    return(
        <div className="joke-container">
            <h1>joke!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    );
};