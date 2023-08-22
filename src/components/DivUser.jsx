import React from 'react';
import styles from '../module.css/FindAllCustomer.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DivUser( props ) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`https://api-cadastro-clientes.onrender.com/delete/${props.id}`)
      .then(response => {
        console.log('Usuário excluído com sucesso:', response.data);
        navigate('/cliente');
      })
      .catch(error => {
        console.error('Erro ao excluir usuário:', error);
      });
  };

  return (
    <div className={styles.div_user}>

        <div className={styles.container_info}>
          <div className={styles.div_img}>
            <img className={styles.img} src="https://img.freepik.com/icones-gratis/do-utilizador_318-552176.jpg" alt=''/>
          </div>

          <div className={styles.info_user}>
            <span> <strong>ID:</strong> <small> { props.id } </small>  </span>
            <span> <strong>Nome:</strong> <small> { props.nome } </small>  </span>
            <span> <strong>Telefone:</strong> <small> { props.telefone }</small>  </span>
            <span> <strong>Email:</strong> <small> { props.email } </small></span>

          </div>
        </div>

        <Link to={`/cliente/find/${props.id}`} className={styles.a}>  Ver mais </Link>
        <button className={styles.deleteButton} onClick={handleDelete}>Excluir</button>
    </div>
  );
}