import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Board from './Board';
import subjectGame, { initGame } from './Game';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleStartGame = () => {
    setIsLoading(true);
    initGame();
  };

  const handleResetGame = () => {
    setIsLoading(true);
    initGame();
  };

  useEffect(() => {
    initGame()
    const subscribe = subjectGame.subscribe(sub => {
      setBoard(sub.chess)
      setIsGameOver(sub.isGameOver)
      setResult(sub.result)
    });

    return () => subscribe.unsubscribe();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>

      <div className='bg-black h-screen flex items-center justify-center relative'>
        {isGameOver && (
          <div className='absolute bg-white bg-opacity-80 rounded-lg p-3 flex flex-col items-center justify-center'>
            <h1 className='font-bold'>GAME OVER!CONGRATULATIONS🎉 </h1>
            {result && <div>{result}</div>}
          </div>
        )}
        {!isLoading && <Board board={board} />}
        {!isLoading && !isGameOver && (
          <button onClick={handleStartGame}>Start New Game</button>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
