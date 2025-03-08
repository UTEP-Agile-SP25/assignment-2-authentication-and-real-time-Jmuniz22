import { db } from './config'; // Assuming you have already configured Firebase
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

// Reference to the 'songs' collection in Firestore
const songsCollectionRef = collection(db, "songs");

// Function to add a song to Firestore
export const addSong = async (title, artist) => {
    try {
        await addDoc(songsCollectionRef, {
            title: title,
            artist: artist,
            timestamp: new Date(),
        });
        console.log("Song added to Firestore");
    } catch (error) {
        console.error("Error adding song: ", error);
    }
};

// Function to delete a song from Firestore
export const deleteSong = async (songId) => {
    try {
        const songDocRef = doc(db, "songs", songId);
        await deleteDoc(songDocRef);
        console.log("Song deleted from Firestore");
    } catch (error) {
        console.error("Error deleting song: ", error);
    }
};

// Real-time listener to get updates from Firestore
export const getSongsRealTime = (callback) => {
    onSnapshot(songsCollectionRef, (snapshot) => {
        const songs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        callback(songs);
    });
};
