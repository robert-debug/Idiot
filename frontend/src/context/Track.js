import { createContext, useContext, useState } from 'react';

export const TrackContext = createContext();

export const useTrack = () => useContext(TrackContext);


export default function TrackProvider({ children }) {
    const [ trackId, setTrackId ] = useState(1);
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