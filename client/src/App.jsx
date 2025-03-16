import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCrate from "./components/game-create/GameCreate";

import "./App.css";

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/games" element={<GameCatalog />} />
                    <Route path="/games/create" element={<GameCrate />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
