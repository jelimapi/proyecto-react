import { Link, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Login from './Login';
import Articulos from './Articulos';
import Contacto from './Contacto';
import EditarArticulos from './EditarArticulos';
import logo from "../img/logo.png";
import Detalle from './Detalle';
import Editar from './Edicion';
import Adicionar from './Adicionar';
import facebook from "../img/facebook.png";
import whatsapp from "../img/whatsapp.png";


function App() {
  return (
    <div>
        <header className="header" id="inicio">
            <div className="barrita">
                <h4>FABRICAMOS IMPLEMENTOS PARA ARTES MARCIALES Y ENTRENAMIENTO FUNCIONAL</h4>
            </div>
            <div className="contenedor-logo">
                <img src= {logo} className="logo" alt="" />
                <div className="marca">
                    <h2 className="marca">IMPLEMENTOS DEPORTIVOS Y </h2>
                    <h2 className="marca">CONFECCIONES EL</h2>
            </div>  
            <nav className='menu'>
                  <Link to='/'> Inicio </Link>
                  <Link to='/Articulos'> Articulos </Link>
                  <Link to='/Contacto'> Contacto </Link>
                  <Link to='/Login'> Login Admin </Link>
                  
            </nav>
            </div>
        </header>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Articulos" element={<Articulos />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/add" element={<Adicionar />}></Route>
          <Route path="/editar" element={<EditarArticulos />}></Route>
          <Route path="/articulo/:artID" element={<Detalle />}></Route>
          <Route path="/editar/edicion/:artID" element={<Editar />}></Route>

        </Routes>

        <footer id="contactos">
        <div className="contenedor footer-content">
            <div className="contact-us">
                <h2 className="brand">IMPLEMENTOS DEPORTIVOS Y</h2>
                <h2 className="brand">CONFECCIONES EL</h2>
            </div>
            <div className="social-media">
                <img src={facebook} alt="" className="social-media-icon" ></img>
                <img src={whatsapp} alt="" className="social-media-icon" ></img>
            </div>
        </div>
        </footer>

    </div>
  )
}

export default App
