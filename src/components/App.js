import { Link, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Login from './Login';
import Articulos from './Articulos';
import logo from "../img/logo.png";
import Detalle from './Detalle';


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
                  <Link to='/Login'> Login </Link>
            </nav>
            </div>
        </header>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route path="/articulos/:artID" element={<Detalle />}></Route>
        </Routes>

        <footer id="contacto">
        <div className="contenedor footer-content">
            <div className="contact-us">
                <h2 className="brand">IMPLEMENTOS DEPORTIVOS Y</h2>
                <h2 className="brand">CONFECCIONES EL</h2>
            </div>
            <div className="social-media">
                <a href="contactenos.html" className="social-media-icon">
                    <i className='bx bxl-facebook-square'></i>
                </a>  
                <a href="contactenos.html" classNames="social-media-icon">
                    <i className='bx bxl-whatsapp-square'></i>
                </a>  
                <a href="contactenos.html" className="social-media-icon">
                    <i className='bx bxl-instagram-alt'></i>
                </a>
            </div>
        </div>
        </footer>

    </div>
  )
}

export default App
