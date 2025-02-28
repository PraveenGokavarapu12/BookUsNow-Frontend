import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate=useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem("isLoggedIn", "true"); // Store login status
           
            Navigate('/home');
            
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div className="flex justify-center items-center bg-red-200 p-10 rounded-lg shadow-md flex-col w-2/5 h-3/5">
                <h2 className="text-red-600 font-bold text-2xl m-2">Login</h2>
                <form onSubmit={handleLogin} className="flex justify-center items-center flex-col gap-5 w-3/5" autoComplete="off">
                    <input autoComplete="off" type="text" placeholder="Username" className="p-1 border-2 w-full rounded-lg" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input autoComplete='new-password' type="password" placeholder="Password" className="p-1 border-2 w-full rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="bg-red-500 rounded-lg text-white p-2 px-4">Login</button>
                </form>
            </div>
            <p>Don't have an account <span className="text-blue-500 cursor-pointer" onClick={()=>Navigate('/signup')}>Signup</span></p>

        </div>

    );
};

export default Login;

