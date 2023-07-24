import React, { useEffect, useState } from 'react';
import '../css/Articulos.css';
import { Link, useNavigate } from 'react-router-dom';

const Articulos = () => {

  const navigate =useNavigate();

  const [articles, setArticles] = useState([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [tallaFiltro, setTallaFiltro] = useState('');
  const [tallas, setTallas] = useState([]);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchCategorias();
    fetchTallas();
    
  },[paginaActual,categoriaFiltro,tallaFiltro]);

  const fetchData = () => {
    const startPagina = (paginaActual - 1 ) * 4;
    const endPagina = (startPagina + 4);

    var url = 'https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos';

    if(categoriaFiltro){
        url += `?categoria=${categoriaFiltro}`;
    }

    fetch(url)
    .then((Listado) => Listado.json())
    .then((Listado) => { 
      const paginasData = Listado.slice(startPagina,endPagina);
      setArticles(paginasData);
      setTotalRegistros(Listado.length);
    })
  }

  const fetchCategorias = () => {
    fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos')
    .then((datos) => datos.json())
    .then((datos) => {
        const catUnicas = [...new Set(datos.map((prod) => prod.categoria))]
            setCategorias(catUnicas);
    })
  }
  

    const fetchData2 = () => {

      var url = 'https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos';

    if(tallaFiltro){
      url += `?talla=${tallaFiltro}`;
    }
  
    fetch(url)
    .then((Listados2) => Listados2.json())
    .then((Listados2) => { setArticles(Listados2)})
  }

  const fetchTallas = () => {
    fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos')
    .then((datos2) => datos2.json())
    .then((datos2) => {
        const talUnicas = [...new Set(datos2.map((prod) => prod.talla))]
            setTallas(talUnicas);
    })
  }

  const sigPagina = () => {
    setPaginaActual(paginaActual+1);
  }

  const antPagina = () => {
    setPaginaActual(paginaActual-1);
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
        
        <p>Pagina {paginaActual} de {Math.ceil(totalRegistros/4)} </p>
        <button onClick={antPagina} disabled={paginaActual===1}> Anterior </button>
        <button onClick={sigPagina} disabled={paginaActual=== Math.ceil(totalRegistros/4)}> Siguiente </button> 

        <div className='cardContainer1'>
            {articles.map( art => (
                <div key={art.id} className='card1'>
                <h3><Link to={`/articulo/${art.id}`} className='enlace'>{art.nombre} - {art.talla} </Link></h3>
                <img src={art.imagen} width="75px" height="75px" className='imagen1'/>
                </div>
            ) )}
        </div>
        
    </div>
  )
}

export default Articulos