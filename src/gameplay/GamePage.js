import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GamePage() {
  const [game, setGame] = useState(null);
  const { gameId } = useParams();

  useEffect(() => {
    // Récupérez les informations de la partie à partir d'un service web ou d'un autre mécanisme de stockage de données
  }, [gameId]);

  const handlePlayMove = (x, y) => {
    // Jouez le coup et mettez à jour l'état de la partie
  };

  return (
    <div>
      {game ? (
        <div>
          <h1>{game.name}</h1>
          <div className="game-board">
            {game.board.map((row, y) => (
              <div key={y} className="game-row">
                {row.map((cell, x) => (
                  <button key={x} className="game-cell" onClick={() => handlePlayMove(x, y)}>
                    {cell}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <p>Joueur actuel : {game.currentPlayer}</p>
          <p>Temps restant : {game.timeLeft}</p>
        </div>
      ) : (
        <p>Chargement de la partie...</p>
      )}
    </div>
  );
}

export default GamePage;
