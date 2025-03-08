// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // If you want to redirect after registration
// import { createUser } from '../firebaseAuth'; // Import createUser function

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate(); // Optional: for redirecting after successful registration

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;

//     try {
//       // Call createUser from firebaseAuth.js
//       await createUser(email, password, name);

//       // Redirect after successful registration (optional)
//       navigate('/profile'); // Redirect to profile page
//     } catch (error) {
//       alert('Error creating user: ' + error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
