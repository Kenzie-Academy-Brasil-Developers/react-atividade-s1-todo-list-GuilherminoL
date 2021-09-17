import "./style.css";
const RestrictedPage = ({ isLoggedIn, user, login, logout }) => {
  return isLoggedIn ? (
    <div>
      <h1>Bem vindo, {user}</h1>
      <button onClick={logout}>Sair</button>
    </div>
  ) : (
    <div>
      <h1>Você não pode acessar a página</h1>
      <button onClick={login}>Entrar</button>
    </div>
  );
};
export default RestrictedPage;
