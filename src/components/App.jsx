import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}/>
      </Route>
      </Routes>
    </div>
  );
};
