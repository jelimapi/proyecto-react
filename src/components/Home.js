import '../css/Home.css';
import boxeo from "../img/boxeo.png";
import publicidad from "../video/publicidad el 1.mp4";

function Home() {
  return (
    <div className="App">
    
    <main>
        <section classNames="contenedor" id="servicio">
            <h2 className="subtitulo">NUESTRO SERVICIO</h2>
            <div className="contenedor-servicio">
                <img src={boxeo} alt="" />           
                <video controls src={publicidad} type="video/mp4#t=00,01" />
                                        
                <div className="servicio">
                    <div className="service">
                        <h4 className="n-service"><span className="number">1</span> DISEÑO PROPIO</h4>
                        <p>Personalizamos los artículos con su marca, colores. Brindamos pequeñas asesorías para amoblar gimnasios.</p>
                    </div>
                <div className="checklist-servicio">
                    <div className="service">
                        <h4 className="n-service"><span className="number">2</span> GARANTIA</h4>
                        <p>Garantizamos nuestros articulos hasta 6 meses en costuras, cremalleras</p>
                    </div>
              </div>
            </div>
            </div>
        </section>
    </main>
    
    </div>
    
  );
}

export default Home;
