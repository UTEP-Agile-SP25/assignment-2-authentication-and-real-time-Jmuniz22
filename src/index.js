import { logout, signUp, login } from "./auth"

const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const firstname = document.getElementById("firstName").value
    const lastname = document.getElementById("lastName").value
    const email= document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname,lastname,email,password)

})

const logInForm = document.querySelector("#loginForm")
logInForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    login(email,password)
    
})

const logOutForm = document.querySelector("#logoutForm")
logOutForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    logout()
    
})


document.addEventListener('DOMContentLoaded', () => {
    const addSongForm = document.querySelector('#addSongForm');
    if (addSongForm) {
        addSongForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.querySelector('#songTitle').value;
            const artist = document.querySelector('#songArtist').value;

            addSong(title, artist); // Call function to add song to Firestore
            document.querySelector('#songTitle').value = ''; // Clear form fields
            document.querySelector('#songArtist').value = '';
        });
    } else {
        console.error('addSongForm element not found!');
    }

    // Function to render the songs list
    const renderSongs = (songs) => {
        const songsList = document.getElementById('songsList');
        if (songsList) {
            songsList.innerHTML = ''; // Clear the list

            songs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = `${song.title} by ${song.artist}`;

                // Delete button for each song
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    deleteSong(song.id); // Call function to delete song from Firestore
                });

                li.appendChild(deleteBtn);
                songsList.appendChild(li);
            });
        } else {
            console.error('songsList element not found!');
        }
    };

    // Fetch songs and display them in real-time
    getSongsRealTime(renderSongs);
});
