import React from 'react';
import "./App.css"
import { Container, ContentModule } from './module';
import { LoginPage } from './module/Authentification';
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const NAVIGATE = useNavigate();
  React.useEffect(() => {
    NAVIGATE("/LoginPage")
  }, [])

  return (
    <div className="w-full flex items-center justify-center h-auto bg-slate-500">
      <Container.Provider>
        <Routes>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Content/*" element={<ContentModule />} />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
