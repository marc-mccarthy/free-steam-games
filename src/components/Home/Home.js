import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Page } from './Home.styles'

function Home() {
  const APPS_URL = `https://api.steamapis.com/market/apps?api_key=${process.env.REACT_APP_STEAM_KEY}`

  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const games = await axios.get(APPS_URL);
        setGames(games.data);
      } catch (err) {
        console.log('Error occured when fetching free games');
      }
    };
    getGames();
  }, []);

  return (
    <Page>
      {games.length === 0 ? (
        <h3>Loading Games...</h3>
      ) : (
        <>
          <h2>Free Steam Games</h2>
          <ul>
            {games.filter((game) => game.is_free).map((game, index) => {
              return (
                <li>{game.name}</li>
              )
            })}
          </ul>
        </>
      )}
    </Page>
  );
}

export default Home;