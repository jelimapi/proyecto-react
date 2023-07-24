import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Adicionar.css';

const Adicionar = () => {

const navigate = useNavigate();
const [datos, setDatos] = useState({
    nombre: '',
    imagen: '',
    categoria: '',
    talla: '',
    descripcion: '',
    precio: '',
});
    
const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos',{
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(datos)
    })
        .then( respuesta => { navigate('/editar'); })
}

const handleChange = (event) => {
    setDatos ({...datos, [event.target.name]: event.target.value})
}

    return (
        <div className='container-adicionar'>
        <h2>Añadir Articulo</h2>
        <form onSubmit={handleSubmit} className='form3'>
            Nombre: <input type='text' name="nombre" value={datos.nombre} onChange={handleChange} /><br></br>
            Imagen: <input type='text' name="imagen" value={datos.imagen} onChange={handleChange} /><br></br>
            Categoria: <input type='text' name="categoria" value={datos.categoria} onChange={handleChange} /><br></br>
            Talla: <input type='text' name="talla" value={datos.talla} onChange={handleChange} /><br></br>
            Descripcion: <input type='text' name="descripcion" value={datos.descripcion} onChange={handleChange} /><br></br>
            Precio: <input type='text' name="precio" value={datos.precio} onChange={handleChange} /><br></br>
            <button type= 'submit'> Crear </button>
            <button onClick={() => navigate('/editar')}> Cancelar </button>
        </form>
    </div>
    )
}

export default Adicionar