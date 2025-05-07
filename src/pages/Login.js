import React, { useState } from 'react';
import AuthService from '../components/AuthService';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    AuthService.login(form.username, form.password)
      .then(() => {
        window.location.href = '/';
      })
      .catch(err => {
        setMessage(err.response?.data?.message || 'Error al iniciar sesión');
      });
  };

  return (
    <div className="col-md-6 mx-auto mt-5">
      <h4>Iniciar sesión</h4>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleLogin}>
        <input type="text" name="username" className="form-control mb-2" placeholder="Usuario" onChange={handleChange} />
        <input type="password" name="password" className="form-control mb-2" placeholder="Contraseña" onChange={handleChange} />
        <button className="btn btn-success">Entrar</button>
      </form>
    </div>
  );
}
