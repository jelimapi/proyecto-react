import React, { useEffect, useState } from 'react';
import '../css/Articulos.css';
import { Link, useNavigate } from 'react-router-dom';

const EditarArticulos = () => {

  const navigate =useNavigate();

  const [articles, setArticles] = useState([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [categorias, setCategorias] = useState([]);
  

  useEffect(() => {
    fetchData();
    fetchCategorias();
    
  },[categoriaFiltro]);

  const fetchData = () => {
    
    var url = 'https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos';

    if(categoriaFiltro){
        url += `?categoria=${categoriaFiltro}`;
    }

    fetch(url)
    .then((Listado) => Listado.json())
    .then((Listado) => { setArticles(Listado)})
  }

  const fetchCategorias = () => {
    fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos')
    .then((datos) => datos.json())
    .then((datos) => {
        const catUnicas = [...new Set(datos.map((prod) => prod.categoria))]
            setCategorias(catUnicas);
    })
  }
  
  const editarArticulo = (artID) => {
    navigate(`/editar/edicion/${artID}`);
  }

  const deleteArticulo = (artID) => {
    fetch(`https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos/${artID}`,{
      method: 'DELETE',
      headers: {'Content-type':'application/json'}
    })
    .then( respuesta => fetchData())
    .catch(error => {console.log(error)})
  
  }


    return (

    <div className='container1'>
        <nav className='menu'>
          <Link to='/add'> Añadir </Link>
          <Link to='/'> Salir </Link>
            
        </nav>

        <h2 className='text'> LISTADO DE ARTICULOS </h2>
        <div className='categoria'>Categoria:
            <select value={categoriaFiltro} onChange={(event) => setCategoriaFiltro(event.target.value)}>
                <option value=""> TODOS </option>
                {categorias.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
        </div>

        
        <div className='cardContainer1'>
            {articles.map( art => (
                <div key={art.id} className='card1'>
                <h3>{art.nombre} - {art.talla}</h3>
                <img src={art.imagen} width="75px" height="75px" className='imagen1'/>
                <button onClick={() => editarArticulo(art.id)}>Editar</button>
                <button onClick={() => deleteArticulo(art.id)}>Eliminar</button>
                </div>
            ) )}
        </div>
        
    </div>
  )
}

export default EditarArticulos