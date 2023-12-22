import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { BehaviorSubject } from 'rxjs';
import ProgressBar from 'react-bootstrap/ProgressBar';



const chess = new Chess();

const subjectGame = new BehaviorSubject()

export const initGame = () => {
    updateGame();
}
export const resetGame = () => {
    chess.reset();
}

export const move = (from, to, promotion = undefined) => {
    console.log(from, to, promotion);
    const moveOperation = chess.move({ from, to, promotion });
    if (moveOperation) {
        updateGame();
    }
}

const updateGame = () => {
    const isGameOver = chess.isGameOver();
    subjectGame.next({ chess: chess.board(), isGameOver, result: isGameOver ? getGameResult() : null })
    if (isGameOver) {
        subjectGame.complete();
    }
};

const calculateProgress = () => {
    const totalMoves = chess.history().length;
    const maxMoves = 50;
    const progress = Math.min((totalMoves / maxMoves) * 100, 100);
    return progress;
};

const getGameResult = () => {
    if (chess.isCheckmate()) {
        const winner = chess.turn() === 'w' ? 'Black' : 'White';
        return `CHECKMATE - Winner : ${winner}`
    } else if (chess.isDraw()) {
        let reason = "50 Move Rule";
        if (chess.isStalemate()) {
            reason = 'infinite loop'
        } else if (chess.isThreefoldRepetition()) {
            reason = 'Repetition'
        } else if (chess.isInsufficientMaterial()) {
            reason = 'Insufficient Materials'
        }
        return reason
    } else {
        return 'Unknown Situation'
    }
}


const ChessGame = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const subscription = subjectGame.subscribe((game) => {
            setProgress(game.progress);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
        <div>
            <ProgressBar now={progress} label={`${progress}%`} />
        </div>
    );
};


export { subjectGame, ChessGame };








