import './App.css';
import { NavBar } from './components/NavBar';
import { Servicios } from './components/Servicios';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';

import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SimpleSlider from './components/SimpleSlider';
import { Catalogo } from './components/Catalogo';
import DatosContacto from './components/DatosContacto';


function App() {

  return (
    <div className="App">
      <DatosContacto/>
      <NavBar/>
      <SimpleSlider/>
      <Servicios/>
      <Nosotros/>
      <Contacto/>
      <Catalogo/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
