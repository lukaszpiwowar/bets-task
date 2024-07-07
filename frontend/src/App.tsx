import React from 'react';
import './App.css';
import { AppLayout } from './componentes/Layout';
import { Events } from './componentes/Events';

function App() {
  return (
    <AppLayout>
      <div className="App">
        <Events />
      </div>
    </AppLayout>
  );
}

export default App;
