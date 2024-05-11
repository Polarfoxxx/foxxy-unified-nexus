import React from 'react';
import "./App.css"
import { Container, Content } from './module';
import { LoginPage } from './module/AuthentificationModule';
import { Routes, Route, useNavigate } from "react-router-dom";
import { cookie } from './module/apis/cookie';

function App(): JSX.Element {
  const navigate = useNavigate();

  React.useEffect(() => {
    sendCookie()
  }, [navigate]);

  async function sendCookie() {
    const cookieIsValid = await cookie();   //volanie pre zistenie a nasledne odoslanie cookie
    cookieIsValid && navigate("/Content")
  };

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
