import React from 'react';
import "./App.css"
import { Container, Content } from './module';
import { LoginPage } from './module/AuthentificationModule';
import { Routes, Route, useNavigate } from "react-router-dom";
import { servicesJWTdecodeAndValidity } from './module/utils';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const JWT = localStorage.getItem("JWT");
    if (JWT !== null) {
        !servicesJWTdecodeAndValidity(JWT) && navigate("/LoginPage")
    } else {
      navigate("/LoginPage")
    };
  }, [navigate]);

  

  return (
    <div className="w-full flex items-center justify-center h-auto">
      <Container>
        <Routes>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Content/*" element={<Content />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
