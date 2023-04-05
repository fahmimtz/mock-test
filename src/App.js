import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Config/Router'
import {useState, createContext} from 'react';

export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState();
  return (
    <div className="App">
      <AppContext.Provider value = {{pengguna, setPengguna}}>
      <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
