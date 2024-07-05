import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { playerContext } from "../contexts/PlayerContext";
import { customAlphabet } from "nanoid";

const generateRoomId = () => {
  const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 5);

  return nanoid();
}

export default function JoinForm() {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const navigate = useNavigate();
  const { socket } = useContext(playerContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;

    if (!inputValue) {
      setError("Please enter a gamertag");
    }
    localStorage.setItem("gamertag", inputValue);

    const roomID = generateRoomId();
    socket.emit('join-room', roomID);
    navigate(`/game/${roomID}`);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h2 className="">Skribbble</h2>
      <label htmlFor="name" className="">
        Enter your gamertag:
      </label>
      <input
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder="Gamertag"
        className=""
      />
      <button type="submit" className="">
        Create Game
      </button>
      {error && <div className="">{error}</div>}
    </form>
  );
}
