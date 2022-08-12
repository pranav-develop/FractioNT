import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateNewMint from "./pages/CreateNewMint";
import { ROUTE_TYPES } from "./utils/RouteTypes";
import FactionalizeMinted from "./pages/FactionalizeMinted";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={ROUTE_TYPES.HOME_ROUTE} element={<Home />} />
                <Route path={ROUTE_TYPES.CREATE_NEW_MINT_ROUTE} element={<CreateNewMint />} />
                <Route path={ROUTE_TYPES.FRAC_MINTED_ROUTE} element={<FactionalizeMinted />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
