import Link from 'next/link';

export default function Index() {
  return (
    <div className="bg-blue-500 p-4">
      <nav>
      <ul className="flex space-x-4 ml-auto">
        <li>
          <Link href="/noticias">
            <p className="text-white hover:underline text-lg">Notícias</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className="text-white hover:underline text-lg">Calcular Dose</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className="text-white hover:underline text-lg">Scores</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <p className="text-white hover:underline text-lg">Prontuário</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p className="text-white hover:underline text-lg">Sair</p>
          </Link>
        </li>
      </ul>

      </nav>
    </div>
    
  );
}
