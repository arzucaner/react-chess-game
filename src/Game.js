import { Chess } from 'chess.js'
import { BehaviorSubject } from 'rxjs'

const chess = new Chess();

const subjectGame = new BehaviorSubject()

export default subjectGame

export const initGame = () => {
    updateGame();
}
export const resetGame = () => {
    chess.reset();
}

export const move = (from, to) => {
    console.log(from, to);
    const moveOperation = chess.move({ from, to })
    if (moveOperation) {
        updateGame();
    }
}

const updateGame = () => {
    const isGameOver = chess.isGameOver();
    subjectGame.next({ chess: chess.board(), isGameOver, result: isGameOver ? getGameResult() : null })
}

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







