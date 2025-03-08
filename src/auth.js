import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from "./config";
import { db } from "./config";
import { doc, setDoc} from "firebase/firestore";

onAuthStateChanged(auth, async(user)=>{
    if(user){
        console.log("Logged in User: ", user.email)
    }else{
        console.log("No user is signed in")
    }
})
export async function signUp(firstName, lastName, email,password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up:", userCredential.user.email)
        console.log("User ID:", userCredential.user.uid)
        const userRef= doc(db, "users", userCredential.user.uid)

        await setDoc(userRef,{
            firstname:firstName,
            lastname: lastName,
            timesstamp: new Date()
        })
        window.location.href= "profile.html";
    }catch(error){
        console.error("Error, fetching user data: ",error);
    }
}

export async function login(email,password){
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email, password)
        console.log("User Logged In")
        window.location.href= "profile.html"

    }catch(error){
        console.error("Login error: "+error.message)
    }
}

export async function logout(){
    try{
        await signOut(auth)
        console.log("User Logged Out")
    }catch(error){
        console.error("Logout error: "+error.message)
    }
}

const createDummyUsers = async () => {
    // Dummy User Data
    const users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "password456",
      },
      {
        firstName: "Sam",
        lastName: "Brown",
        email: "sam.brown@example.com",
        password: "password789",
      },
    ];
  
    // Loop through each user and create them
    for (const user of users) {
      try {
        // Create user using Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        console.log("User created:", userCredential.user.email);
        
        // Store additional user data in Firestore
        const userRef = doc(db, "users", userCredential.user.uid);
        await setDoc(userRef, {
          firstname: user.firstName,
          lastname: user.lastName,
          timestamp: new Date(),
        });
        console.log(`User ${user.firstName} ${user.lastName} added to Firestore`);
  
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };
  
  // Call the function to create dummy users
  //createDummyUsers();
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { db } from './firebaseConfig'; // Assuming firebaseConfig.js exists
// import { addDoc, collection } from 'firebase/firestore';

// const auth = getAuth();

// // User Registration Function
// export const createUser = async (email, password, name) => {
//   try {
//     // Create user in Firebase Authentication
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Store user details in Firestore
//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name: name,
//       email: email,
//       createdAt: new Date(),
//     });

//     // Optionally, update display name in Firebase Authentication
//     // You can also update profile here if needed

//     console.log('User created:', user);
//   } catch (error) {
//     console.error('Error creating user:', error.message);
//     throw error; // Optional: You can handle the error more gracefully in your UI
//   }
// };

// // Sign In Function
// export const signInUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log('User signed in:', userCredential.user);
//   } catch (error) {
//     console.error('Error signing in:', error.message);
//   }
// };

// // Sign Out Function
// export const signOutUser = async () => {
//   try {
//     await signOut(auth);
//     console.log('User signed out');
//   } catch (error) {
//     console.error('Error signing out:', error.message);
//   }
// };

