import { createContext } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const playerContext = createContext();

export const PlayersContextProvider = ({ children }) => {

    return(
        <playerContext.Provider value={{ socket }}>
            {children}
        </playerContext.Provider>
    );
}