import { useState } from 'react';
import './App.css'
import { Register } from './Register';
import { SuccessWindow } from './components/SuccessWindow';

function App() {
  const [isRegistrated, setIsRegistrated] = useState(false);

  return isRegistrated
    ? <SuccessWindow />
    : <Register onRegistred={() => setIsRegistrated(true)} />
}

export default App
