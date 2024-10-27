import React, {useState, useEffect, useRef} from "react";
import '../styles/CatchTheBug.css';

const CatchTheBug = () => {
    const [bugs, setBugs] = useState(0);
    const [bugPosition, setBugPosition] = useState({x:0 , y:0});
    const [gameActive, setGameActive] = useState(true);
    const containerRef = useRef(null);

    // function to randomly position the bug
    const getRandomPosition = () => {
        if(containerRef.current)
            {
            const containerWidth = containerRef.current.clientWidth;
            const containerHeight = containerRef.current.clientHeight;
            
            // Generate random positions ensuring the bug stays within the container
            const x = Math.random() * (containerWidth - 50); //50is the bug size
            const y = Math.random() * (containerHeight - 50);
            setBugPosition({x,y});
            }
    };


    useEffect(() => {
        getRandomPosition();
    }, []);


    //Catch the bug function
    const catchBug = () => {
        if(gameActive){
            setBugs(bugs + 1);
            getRandomPosition();
        }
    };

    const startGame = () => {
        setBugs(0);
        setGameActive(true);
    }

 


    return(
        <div className="game-container" ref={containerRef}>
            <h2>Catch the Bug Game</h2>
            <p>Bugs Caught: {bugs}</p>
            {gameActive ? (
            <div
             className="bug"
             style={{
                left: `${bugPosition.x}px`,
                top: `${bugPosition.y}px`,
                position: 'absolute',
                cursor: 'pointer'
             }}
             onClick={catchBug}
             >
                🐛
             </div>
            ) : (
                <p>Game Over! You caught {bugs} bugs.</p>
            )}

            {gameActive ? (
                <button onClick={() => setGameActive(false)}>End Game</button>
            ) : (
                <button onClick={startGame}>Play Again</button>
            )}
        </div>
    );
}

export default CatchTheBug;