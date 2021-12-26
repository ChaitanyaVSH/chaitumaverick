import { Route, Routes } from "react-router-dom";
import App from "./App";
import ConfettiComponent from "./components/confetti/confetti";
import NotFound from "./components/error/NotFound";

const routes = (
    <Routes>
        <Route exact path="/happynewyear" element={<ConfettiComponent />}/>
        <Route exact path="/" element={<App />}/>
        <Route exact path="*" element={<NotFound />} />
    </Routes>
);

export default routes;
