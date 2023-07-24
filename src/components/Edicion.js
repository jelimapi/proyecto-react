import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/Edicion.css';

const Edicion = () => {
  
  const {artID} = useParams();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({});
  
useEffect(() => {
    fetch(`https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos/${artID}`)
    .then( (Articulo) => Articulo.json())
    .then( (Articulo) => {setDatos(Articulo)})
},[artID])

const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos/${artID}`,{
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(datos)
    })
        .then( respuesta => { navigate('/articulo'); })
}

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDatos(antDatos => ({...antDatos, [name]:value}));
}

    return (
    <div className='container-editar'>
        <h2>Editar Articulo</h2>
        <form onSubmit={handleSubmit} className='form2'>
            Nombre: <input type='text' name="nombre" value={datos.nombre || ''} onChange={handleChange} /><br></br>
            Imagen: <input type='text' name="imagen" value={datos.imagen || ''} onChange={handleChange} /><br></br>
            Categoria: <input type='text' name="categoria" value={datos.categoria || ''} onChange={handleChange} /><br></br>
            Talla: <input type='text' name="talla" value={datos.talla || ''} onChange={handleChange} /><br></br>
            Descripcion: <input type='text' name="descripcion" value={datos.descripcion || ''} onChange={handleChange} /><br></br>
            Precio: <input type='text' name="precio" value={datos.precio || ''} onChange={handleChange} /><br></br>
            <button type= 'submit'> Actualizar </button>
            <button onClick={() => navigate('/editar')}> Cancelar </button>
        </form>
    </div>
  )
}

export default Edicion





