import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Registrar</Link>
    </nav>
  );
};

export default Navbar;
