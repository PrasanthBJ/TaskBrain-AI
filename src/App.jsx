import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Auth from "./Pages/Auth";
import RoleSelection from "./Pages/RoleSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/role" element={<RoleSelection />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
