import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Auth from "./Pages/Auth";
import RoleSelection from "./Pages/RoleSelection";
import WorkspaceSetup from "./Pages/WorkspaceSetup";
import WorkspaceDashboard from "./Pages/WorkspaceDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/role" element={<RoleSelection />}/>
        <Route path="/workspace/setup" element={<WorkspaceSetup />} />
        <Route path="/workspace/:id" element={<WorkspaceDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
