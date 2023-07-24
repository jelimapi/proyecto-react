import React from 'react';
import '../css/Home.css';

const Contacto = () => {
  return (
    
<>
    <h2 className="subtitulo">CONTACTENOS</h2>
    <div class="contenedor-servicio">
        
        <div class="checklist-servicio">
            <div class="service">
                <h3 class="n-service"><span class="number">1</span> ESTAMOS UBICADOS EN:</h3>
                <p>Calle 152b # 109-14</p>
                <p>Suba, Bogotá</p>
                <p>Whatsapp: 3168869428</p>
            </div>
            <div class="checklist-servicio">
                <div class="service">
                    <h3 class="n-service"><span class="number">2</span> NUESTRAS REDES</h3>
                    <p>Facebook: implementosdeportivosel </p>
                    <br />
                    <p>Instagram: @implementosdeportivosel</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
  
}

export default Contacto