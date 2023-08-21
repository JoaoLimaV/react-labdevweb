import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DivUser from './DivUser';
import styles from '../module.css/FindAllCustomer.module.css'

function FindAllCustomer() {

  const [customers, setCustomer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api-cadastro-clientes.onrender.com/clientes';
    axios(apiUrl)
      .then((response) => {
        setCustomer(response.data.data.clientes)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao consumir a API:', error);
      });
  }, []);

  if (isLoading) {
    return <p> Carregando...</p>;
  }

  return (
    <div className={styles.container}>

      <h2> Todos os Clientes </h2>
      <div className={styles.customers}>
        { 
          customers.map((customer, index) => {
            return (
              <DivUser key={index} id={customer.id} nome={customer.nome} telefone={customer.telefone} email={customer.email}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default FindAllCustomer