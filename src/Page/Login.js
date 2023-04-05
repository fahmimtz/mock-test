import React from 'react'
import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'

const Login = () => {
  const Context = useContext(AppContext);
  let navigasi = useNavigate();
    const loginClick = async(e) => {
        e.preventDefault();
        let u = e.target.username.value;
        let p = e.target.paswd.value;

        let cek_login = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({

            username: u,
            password: p,
          })
        })
        .then(res =>res.json())
        .then(hasil =>{return hasil})
        if(cek_login.username === undefined)
        alert('Login Gagal')
        // else{
        //   Context.setPengunna(cek_login);
        //   navigasi('todo')

        // }
      }

  return (
    <div>
        <h3 className='pb-4 mb-4 border-bottom'>
            Halaman Login
        </h3>
        <form onSubmit={loginClick}>
            <div className='form-group'>
                <label htmlFor='idUsername'>Name</label>
                <input className='form-control' type='text' name='username' id='idUsername'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='idPasswd'>Password</label>
                <input className='form-control' type='passwword' name='paswd' id='idPasswd'></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login