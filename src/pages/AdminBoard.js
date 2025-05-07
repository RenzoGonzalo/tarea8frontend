import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminBoard() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:8080/api/test/admin', {
      headers: { 'x-access-token': user.accessToken }
    })
      .then(res => setContent(res.data))
      .catch(err => setContent('No autorizado'));
  }, []);

  return <div className="container mt-4"><h4>{content}</h4></div>;
}
