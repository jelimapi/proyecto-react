import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/Detalle.css';

const Detalle = () => {

    const {artID} = useParams();
    const [ListadoArticulos, setListadoArticulos] = useState([]);

    useEffect(() => {
        fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/Articulos')
        .then((Listado) => Listado.json())
        .then((Listado) => { setListadoArticulos(Listado)})  
    }, [])
  
    const artinfo = ListadoArticulos.find( article => article.id === artID )
  
    if(!artinfo){
        return (
            <div>
            <h1> No hay Articulos </h1> 
            </div>
        )  
    }
    else{
        return (
            <div className= "contenedor1">
                <h2> {artinfo.nombre} </h2>
                <img src={artinfo.imagen} ></img>
                <p> <b>CATEGORIA:</b> {artinfo.categoria} </p>
                <p> <b>TALLA:</b> {artinfo.talla} </p>
                <p> <b>DESCRIPCION:</b> {artinfo.descripcion} </p>
                <p> <b>PRECIO:</b> ${artinfo.precio} </p>
            </div>
            )
    }
    
}

export default Detalle