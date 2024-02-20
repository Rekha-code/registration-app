import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Register />
    </>
  );
}

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [registeredUsers, setRegisteredUsers] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setRegisteredUsers([...registeredUsers, formData]);
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleInputChange}
//           placeholder="Username"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           placeholder="Password"
//         />
//         <button type="submit">Register</button>
//       </form>
//       <div>
//         <h2>Registered Users</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Password</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registeredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.username}</td>
//                 <td>{user.email}</td>
//                 <td>{user.password}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;
