import React, { useState } from 'react';
import AuthService from '../components/AuthService';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    AuthService.register(form.username, form.email, form.password)
      .then(() => {
        setMessage('¡Registrado exitosamente! Puedes iniciar sesión.');
      })
      .catch(err => {
        setMessage(err.response?.data?.message || 'Error al registrar');
      });
  };

  return (
    <div className="col-md-6 mx-auto mt-5">
      <h4>Registro</h4>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" className="form-control mb-2" placeholder="Usuario" onChange={handleChange} />
        <input type="email" name="email" className="form-control mb-2" placeholder="Correo" onChange={handleChange} />
        <input type="password" name="password" className="form-control mb-2" placeholder="Contraseña" onChange={handleChange} />
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
}
