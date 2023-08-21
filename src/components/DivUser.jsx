import styles from '../module.css/FindAllCustomer.module.css'
import { Link } from 'react-router-dom';


export default function DivUser( props ) {
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
    </div>
  );
}