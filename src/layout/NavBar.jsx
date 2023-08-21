import { Link } from 'react-router-dom';
import styles from '../module.css/NavBar.module.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoReact } from 'react-icons/bi';

import React, { useState } from 'react';

function NavBar() {

    const toogleSideBar = (value) => {
        setActive(value);
    };

    const [active, setActive] = useState("fixed_disable"); 
    
    return (
        <>
            <div className={`fixed ${active}`} onClick={() => toogleSideBar("fixed_disable")}>
                <div className={styles.side_menu}>
                    <span className={styles.close_side_menu} onClick={() => toogleSideBar("fixed_disable")}> <AiOutlineClose /> </span>
                    <Link to="/cliente">  Todos os Clientes </Link>
                    <Link to="/cliente/find"> Procurar Cliente  </Link>
                    <Link to="/cliente/save"> Cadastrar Cliente </Link>
                    <Link to="/cliente/update"> Alterar Cliente </Link>
                    <Link to="/cliente/delete"> Deletar Cliente </Link>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={styles.logo}> 
                    <Link to="/" > 
                        <BiLogoReact /> <span className={styles.text}> Cadastro de Clientes </span> 
                    </Link>
                </div>
                <div className={styles.menu}> <FaBars onClick={() => toogleSideBar("fixed_active")}/> </div>
            </nav>
        </>

    );
}

export default NavBar; 