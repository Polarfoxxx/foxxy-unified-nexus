import React from 'react';
import "./App.css"
import { Container, Content } from './module';
import { LoginPage } from './module/AuthentificationModule';
import { Routes, Route, useNavigate } from "react-router-dom";
import { servicesJWTdecodeAndValidity } from './module/utils';

function App() {
  const NAVIGATE = useNavigate();

  React.useEffect(() => {
    const JWT = localStorage.getItem("JWT");
    if (JWT !== null) {
        !servicesJWTdecodeAndValidity(JWT) && NAVIGATE("/LoginPage")
    } else {
        NAVIGATE("/LoginPage")
    };
}, [NAVIGATE]);

  return (
    <div className="w-full flex items-center justify-center h-auto">
      <Container.Provider>
        <Routes>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Content/*" element={<Content />} />
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
