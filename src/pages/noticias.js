import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('/api/noticias')
      .then((response) => response.json())
      .then((data) => setNoticias(data));
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Notícias sobre TEV</h1>
        <Link href="/dashboard" className="mr-40"> {/* Defina a rota correta aqui */}
          <p className="text-blue-500 hover:underline text-lg">Home</p>
        </Link>
      </div>
      
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id} className="mb-4 p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">{noticia.titulo}</h2>
            <p className="mt-2">{noticia.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Noticias;
