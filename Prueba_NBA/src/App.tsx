import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Prueba } from './components/Component1';
import {ErrorComponent} from './components/Menu/ErrorComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Prueba />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
