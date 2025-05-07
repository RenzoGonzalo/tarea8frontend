import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';

const Navbar = () => {
  const user = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">Mi App</Link>

      <div className="navbar-nav mr-auto">
        {user && (
          <li className="nav-item">
            <Link to="/user" className="nav-link">Usuario</Link>
          </li>
        )}

        {user?.roles.includes("ROLE_MODERATOR") && (
          <li className="nav-item">
            <Link to="/mod" className="nav-link">Moderador</Link>
          </li>
        )}

        {user?.roles.includes("ROLE_ADMIN") && (
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin</Link>
          </li>
        )}
      </div>

      <div className="navbar-nav ms-auto">
        {user ? (
          <>
            <li className="nav-item">
              <span className="nav-link">{user.username}</span>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>Cerrar sesión</a>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Iniciar sesión</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Registrarse</Link>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
