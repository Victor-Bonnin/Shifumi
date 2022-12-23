import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GameListPage() {
  const [games, setGames] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Récupérez la liste des parties à partir d'un service web ou d'un autre mécanisme de stockage de données
  }, []);

  const handleCreateGame = () => {
    location.push('/create-game');
  };

  const handleViewGame = (gameId) => {
    location.push(`/view-game/${gameId}`);
  };

  return (
    <div>
      <button onClick={handleCreateGame}>Créer une partie</button>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Joueurs</th>
            <th>État</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.players}</td>
              <td>{game.status}</td>
              <td>
                <button onClick={() => handleViewGame(game.id)}>Voir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameListPage;
