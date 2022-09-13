import React, { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const BASE_URL = 'https://api.steamapis.com/market/apps?api_key=LFyzRdj4kWo2O3zYNsKMqRfYIOw'

  let data = []

  const getGames = async () => {
    data = await axios.get(BASE_URL);
    return data;
  }

  useEffect(() => {
    getGames();
  },[])

  return (
    <div>
      <h1>Games</h1>
      {JSON.stringify(data)}
      <ul>
      </ul>
    </div>
  );
}

export default Home;