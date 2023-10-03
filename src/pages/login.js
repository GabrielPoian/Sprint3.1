import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  function checkAuthentication() {
    // Verifique se o usuário está autenticado.
    // Isso pode envolver verificar se um token de autenticação é válido, por exemplo.
    // Retorne true se o usuário estiver autenticado, caso contrário, retorne false.
    const authToken = localStorage.getItem('authToken'); // Suponha que o token seja armazenado no localStorage.

    // Verifique a lógica de autenticação aqui e retorne true ou false com base nela.
    if (authToken) {
      // Se houver um token de autenticação, considere o usuário autenticado.
      return true;
    } else {
      // Se não houver um token de autenticação, o usuário não está autenticado.
      return false;
    }
  }

  useEffect(() => {
    // Verifique se o usuário já está autenticado (por exemplo, com um token de autenticação)
    const isAuthenticated = checkAuthentication(); // Suponha que checkAuthentication seja uma função que verifica o token de autenticação.

    if (isAuthenticated) {
      // Se o usuário já estiver autenticado, redirecione para a página /index.
      router.push('/index');
    }
  }, []); // Este efeito só será executado uma vez quando a página de login for carregada.

  const handleLogin = () => {
    // Implemente a lógica de verificação de login aqui
    if (email === 'medico@sanofi.com' && password === '1234') {
      // Se o login for bem-sucedido, redirecione para a página /index.
      router.push('/');
    } else {
      // Se o login falhar, defina uma mensagem de erro.
      setErrorMessage('Credenciais inválidas. Verifique o e-mail e a senha.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-200		">
      <div className="bg-white p-8 rounded shadow-md border-2 border-solid border-gray-400">
        <h2 className="text-2xl mb-4">Login</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border border-solid border-gray-400 p-2 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border border-solid border-gray-400 p-2 mb-4 "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded font-bold">
          Entrar
        </button>
      </div>
    </div>
  );
}
