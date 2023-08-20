import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from '../components/Home'

function IndexRoutes() {
    return (
        <div className='nav'>
            <Router>
            <ul>
                <li> <Link to="/"> Início </Link> </li>
                <li> <Link to="/cliente"> Todos os Clientes      </Link> </li>
                <li> <Link to="/cliente/find"> Procurar Cliente  </Link> </li>
                <li> <Link to="/cliente/save"> Cadastrar Cliente </Link> </li>
                <li> <Link to="/cliente/update"> Alterar Cliente </Link> </li>
                <li> <Link to="/cliente/delete"> Deletar Cliente </Link> </li>
            </ul>
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/cliente"  />
                    <Route path="/cliente/find"  />
                    <Route path="/cliente/save"  />
                    <Route path="/cliente/update"  />
                    <Route path="/cliente/delete"  />
                    {/* element={<Register />} */}
                </Routes>
            </Router>
        </div>
    );
} 

export default IndexRoutes;