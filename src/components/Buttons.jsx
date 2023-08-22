import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { green, red, yellow } from '@mui/material/colors';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  
function Buttons({ id, actualizeTable }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      nome: '',
      sobrenome: '',
      cpf: '',
      telefone: '',
      email: '',
      cep: '',
      logradouro: '',
      nr_residencial: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    });

    const [forceUpdate, setForceUpdate] = useState(false); // Adicionamos um estado para forçar a re-renderização

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const dataToSend = {};
      for (const key in formData) {
        if (formData[key]) {
          dataToSend[key] = formData[key];
        }
      }
      
      try {
        const res = await axios.patch(
          `https://api-cadastro-clientes.onrender.com/clientes/${id}`,
          dataToSend
        );
        if (res.status === 200) {
          console.log('Resposta da API:', res.data);
          actualizeTable();
          handleClose()
        } else {
          console.error('Erro na requisição:', res.status, res.statusText);
        }
      } catch (err) {
        console.error('Erro na requisição:', err);
      }
    };

  const handleDelete = () => {
    axios.delete(`https://api-cadastro-clientes.onrender.com/clientes/${id}`)
      .then(response => {
        setForceUpdate(!forceUpdate);
        actualizeTable();
      })
      .catch(error => {
        console.error('Erro ao deletar o item:', error);
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: red[500], color: 'white',margin:'5px' }}
        onClick={handleDelete}
      >
        <BsFillTrashFill />
      </Button>
      
      <Button onClick={handleClickOpen} variant="contained" style={{ backgroundColor: 'gray', color: 'white',margin:'5px' }}>
        <AiFillEdit />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Formulário de Update </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Logradouro"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Número Residencial"
              name="nr_residencial"
              value={formData.nr_residencial}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              select
              label="UF"
              name="uf"
              value={formData.uf}
              onChange={handleInputChange}
              fullWidth
              style={{margin:'5px 0px 5px 0px'}}
            >
              {estados.map((estado) => (
                <MenuItem key={estado} value={estado}>
                  {estado}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <Button type="submit" style={{ background: 'rgb(28, 31, 37)', width:'100%', color:'white' }}>
              Enviar
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}  style={{ background: 'red', color:"white"}}>
              Fechar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Buttons;
