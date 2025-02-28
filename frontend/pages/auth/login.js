import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </main>
    </>
  );
};

export default Login;
