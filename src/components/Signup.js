import { useState } from "react";

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.some((user) => user.username === username)) {
      alert("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
  };

  return (
    <div className="flex justify-center items-center h-screen">
             <div className="flex justify-center items-center bg-red-200 p-10 rounded-lg shadow-md flex-col w-2/5 h-3/5">
        <h2 className="text-red-600 font-bold text-2xl m-2">Signup</h2>
        <form onSubmit={handleSignup} className="flex justify-center items-center flex-col gap-5 w-3/5" autoComplete="off">
          <input autoComplete="off" type="text" placeholder="Username" className="p-1 border-2 w-full rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input autoComplete='new-password' type="password" placeholder="Password"  className="p-1 border-2 w-full rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="bg-red-500 rounded-lg text-white p-2 px-4">Signup</button>
        </form>
      </div>

        </div>
  );
};

export default Signup;