import { Link } from 'react-router-dom';
import styles from '../module.css/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <li> <Link to="/"> Home </Link> </li>
            </div>

            <div className={styles.div_links}>
                <li> <Link to="/cliente"> Todos os Clientes      </Link> </li>
                <li> <Link to="/cliente/find"> Procurar Cliente  </Link> </li>
                <li> <Link to="/cliente/save"> Cadastrar Cliente </Link> </li>
                <li> <Link to="/cliente/update"> Alterar Cliente </Link> </li>
                <li> <Link to="/cliente/delete"> Deletar Cliente </Link> </li>
            </div>
        </nav>
    );  
}

export default NavBar; 