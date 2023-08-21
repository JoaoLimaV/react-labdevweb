import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FindAllCustomer() {

  const { id_usuario } = useParams();

  const [customer, setCustomer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://api-cadastro-clientes.onrender.com/clientes/${id_usuario}`;
    axios(apiUrl)
      .then((response) => {
        setCustomer(response.data.data)
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
    <>
    <p>{customer.id} {customer.nome}</p>
    </>
  );
}

export default FindAllCustomer