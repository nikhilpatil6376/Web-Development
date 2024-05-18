import React from "react"
import Card from "../Card/Card";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import isWinner from "../../helper/checkWinner";

import "./Grid.css";
import 'react-toastify/dist/ReactToastify.css';

function Grid({numberOfCards}) {
    const [turn, setTurn] = useState(true); // true => Circle; false => Cross;

    const [board, setBoard] = useState(Array(numberOfCards).fill("")); //["","","","","","","","",""];

    const [winner, setWinner] = useState(null);

    function play(index) {
        if(turn == true) {
            board[index]= '0'
        }else {
            board[index]= 'X'
        }

        const win = isWinner(board, turn ? "0" : "X" );
        if(win){
            setWinner(win);
            toast.success(`Congratulation ${win} Win Game!`);
        }
        setBoard([...board]);
        setTurn(!turn);
    };

    function resetGame() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    };

    return(
        <>  
            <ToastContainer position="top-center"/>
            <h1 className="turnHightlight">Current Turn: {(turn) ? '0': 'X'}</h1>
            <div className="grid">
                {board.map((value, idx) => {
                    return <Card key={idx} onPlay={play} player={value} index={idx} gameEnd={winner?true:false} />
                })}
            </div>
            <br />
            <button onClick={resetGame} className="resetGame">Reset Game</button>
        </>
    );
};

export default Grid;