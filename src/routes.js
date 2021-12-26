import { Route, Routes } from "react-router-dom";
import App from "./App";
import Confetti from "./components/confetti/confetti";
import NotFound from "./components/error/NotFound";

const routes = (
    <Routes>
        <Route exact path="/confetti" element={<Confetti />}/>
        <Route exact path="/" element={<App />}/>
        <Route exact path="*" element={<NotFound />} />
    </Routes>
);

export default routes;
