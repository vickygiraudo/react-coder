
import './App.css';
import {Navbar} from "./Contenedor/Navbar/Navbar"
import { ItemListContainer } from './Contenedor/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <ItemListContainer greeting="Proyecto React" />
    </div>
  );
}

export default App;
