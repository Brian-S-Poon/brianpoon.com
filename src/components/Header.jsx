import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Brian Poon</Link>
      <nav className="space-x-4">
        <Link to="/projects" className="text-gray-700 hover:underline">Projects</Link>
        <Link to="/about" className="text-gray-700 hover:underline">About</Link>
        <Link to="/contact" className="text-gray-700 hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
