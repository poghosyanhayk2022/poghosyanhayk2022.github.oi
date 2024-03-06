

import './App.css';
import Routers from './Route/Routers';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div className="App">
    <Routers/>
    </div>
    <ToastContainer/>
    </>
  );
}

export default App;
