import { createContext, useContext, useState } from 'react';

export const TrackContext = createContext();

export const useTrack = () => useContext(TrackContext);


export default function TrackProvider({ children }) {
    const [ trackId, setTrackId ] = useState();
    return (
        <TrackContext.Provider
          value={{
            trackId,
            setTrackId
          }}
        >
          {children}
        </TrackContext.Provider>
    );
}