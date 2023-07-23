import React, { useEffect, useState } from 'react';
import '../css/Articulos.css';
import { Link } from 'react-router-dom';

const Articulos = () => {

const [articles, setArticles] = useState([]);
const [categoriaFiltro, setCategoriaFiltro] = useState('');
const [categorias, setCategorias] = useState([]);
const [tallaFiltro, setTallaFiltro] = useState('');
const [tallas, setTallas] = useState([]);


  useEffect(() => {
    fetchData();
    fetchCategorias();
    fetchTallas();
    
  },[categoriaFiltro], [tallaFiltro]);

  const fetchData = () => {

    var url = 'https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos';

    if(categoriaFiltro){
        url += `?categoria=${categoriaFiltro}`;
    }

    fetch(url)
    .then((Listado) => Listado.json())
    .then((Listado) => { setArticles(Listado)})

    if(tallaFiltro){
      url += `?talla=${tallaFiltro}`;
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

  const fetchTallas = () => {
    fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos')
    .then((datos) => datos.json())
    .then((datos) => {
        const talUnicas = [...new Set(datos.map((prod) => prod.talla))]
            setTallas(talUnicas);
    })
  }

    return (
    <div className='container1'>
        <h2 className='text'> LISTADO DE ARTICULOS </h2>
        <div className='categoria'>Categoria:
            <select value={categoriaFiltro} onChange={(event) => setCategoriaFiltro(event.target.value)}>
                <option value=""> TODOS </option>
                {categorias.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
        </div>

        <div className='talla'>Talla:
        <select value={tallaFiltro} onChange={(event) => setTallaFiltro(event.target.value)}>
                <option value=""> TODOS </option>
                {tallas.map((tal, index) => (
                    <option key={index} value={tal}>{tal}</option>
                ))}
            </select>
        </div>

        <div className='cardContainer1'>
            {articles.map( art => (
                <div key={art.id} className='card1'>
                <h3><Link to={`/articulos/${art.id}`} className='enlace'>{art.nombre} - {art.talla} </Link></h3>
                <img src={art.imagen} width="75px" height="75px" className='imagen1'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Articulos