import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux'
import { getTracks, getOneTrack } from '../../store/track';

// function TrackList () {
//     const tracks = useSelector(state => {
//         return state.tracks
//     })
//     return (
//         <main>
//             {}
//         </main>
//     )
// }