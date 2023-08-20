import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FindAllCustomer() {

  // const [customers, setCustomer] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api-cadastro-clientes.onrender.com/clientes';
    axios(apiUrl)
      .then((response) => {
        // setCustomer(response.data.clientes)
        console.log(response.data)
        // customers.map(() => {
        // })
      })
      .catch((error) => {
        console.error('Erro ao consumir a API:', error);
      });
  }, []);

  return (
    <>
      <h1> Todos os Clientes </h1>
    </>
  );
}

export default FindAllCustomer