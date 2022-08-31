import React from 'react';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="main">
      <Input placeholder="To do" />
      <Button children="Add" />
    </div>
  );
}

export default App;
