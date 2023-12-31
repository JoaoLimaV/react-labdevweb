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
import { AiOutlineUserAdd } from 'react-icons/ai';

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
  
function Cadastro( { actualizeTable }) {
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
      try {
        const res = await axios.post(
          'https://api-cadastro-clientes.onrender.com/clientes',
          formData
        );
  
        if (res.status === 200 || res.status === 201) {
          console.log('Resposta da API:', res.data);
          actualizeTable()
           handleClose(); 

        } else {
          console.error('Erro na requisição:', res.status, res.data);
        }
      } catch (err) {
        console.error('Erro na requisição:', err);
      }
    };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'end'}}>
      <Button onClick={handleClickOpen} variant="contained" style={{ backgroundColor: green[500], color: 'white', fontSize:'24px'}}>
        <AiOutlineUserAdd />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Formulário de Clientes </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Logradouro"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Número Residencial"
              name="nr_residencial"
              value={formData.nr_residencial}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              fullWidth
              required
              style={{margin:'5px 0px 5px 0px'}}
            />
            <TextField
              select
              label="UF"
              name="uf"
              value={formData.uf}
              onChange={handleInputChange}
              fullWidth
              required
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
          <Button onClick={ () => { handleClose() }}  style={{ background: 'red', color:"white"}}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cadastro;