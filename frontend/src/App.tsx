import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
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
