import React from 'react';
import "./App.css"
import { Container, ContentModule } from './module';


function App() {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-slate-500">
      <Container.Provider>
        <ContentModule />
      </Container.Provider>
    </div>
  );
}

export default App;
