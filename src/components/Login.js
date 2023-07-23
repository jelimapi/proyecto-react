import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
  
    const handleSumit = (event) => {

        event.preventDefault();
        
        fetch('https://64b58468f3dbab5a95c76a68.mockapi.io/USUARIOS',{
            method: 'POST',
            Headers: {'Content-tipe':'application/json'},
            body: JSON.stringify({username,password})
        })
        .then( response => {
            if(response.ok){
                navigate('/articulos');
            }else{
                console.log("no hubo conexion");
            }
        })
    }
    
    return (
    <div className='container'>
        <div className='card'>
            <h2 className='text'>Inicio de sesión</h2>
            <form onSubmit={handleSumit}>
                <input 
                    type='text'
                    placeholder='Nombre de usuario'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='input'
                />
                <input 
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className='input'
                />
                <button type='submit' className='button'> Ingresar </button>
            </form>
        </div>
    </div>
  )
}

export default Login
