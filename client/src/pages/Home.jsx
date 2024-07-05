import { useParams, useNavigate } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import { playerContext } from '../contexts/PlayerContext';

const Home = () => {
  const { id } = useParams();
  const gamertag = localStorage.getItem("gamertag");
  const { socket } = useContext(playerContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/join/`);
  }

  return (
    <div>
      Welcome {gamertag} to Doodles, a free-to-play multiplayer game.

      <button className='' onClick={handleClick}>Go to join page</button>
    </div>
  )
}
export default Home;