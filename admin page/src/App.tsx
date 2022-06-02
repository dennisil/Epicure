import { useState } from "react";
import { Homepage } from "./pages/Homepage";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import { ResEdit } from "./pages/ResEdit";
import { Login } from "./pages/Login";
import axios from "axios";
import { MainHeader } from "./components/MainHeader";
import { RequireAuth } from "./components/RequireAuth";

const USER_URL = "http://localhost:2718/api/v1/user/login";

function App() {
  const [user, setUser] = useState<any>(null);
  const login = async (userName: string, password: string) => {
    let data = JSON.stringify({ userName, password });
    const res = await axios.post(USER_URL, { userName, password });
    setUser(res.data.user);
    console.log(res.data.token);
    localStorage.setItem("token", res.data.token);
  };
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Login login={login} user={user} />} />
        <Route path="/home" element={<Homepage user={user} />} />
        <Route path="/edit" element={<ResEdit user={user} />} />
        <Route path="/edit/:resId" element={<ResEdit user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
