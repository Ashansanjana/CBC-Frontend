import { Link } from "react-router-dom";

export default function Header() {
  return (
      <div className="font-bold text-blue-300 text-2xl bg-amber-300" >
        <Link to="/">Home</Link>
        <Link to="/login" className="ml-4">Login</Link>
        <Link to="/signup" className="ml-4">Signup</Link>
      </div>
  );
}