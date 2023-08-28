import "../module.css/login.css";

function Login() {
  return (
    <main className="main">
      <div className="centralizar">
        <div className="logo">
          Logo
        </div>
        <p className="p">Fazer Login</p>

        <form>
          <input type="email" placeholder="E-mail"  className="input"/> <br/>
          <input type="password" placeholder="Senha" className="input"/> <br/>

          <div>
            <button className="btn">Face</button>
            <button className="btn">Google</button>
            <button className="btn">Apple</button><br/>

            <input type="checkbox" name="manter" id="manter" />
            <label htmlFor="manter" className="p">Manter Login</label><br/>

            <button className="btn">Submit</button>
          </div>
        </form>
        <div>GitHub</div>
      </div>
      <div></div>
    </main>
  );
}

export default Login;
