import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { red, yellow } from '@mui/material/colors';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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
  
function Cadastro( { id_usuario }) {
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
         `https://api-cadastro-clientes.onrender.com/update/${id_usuario}`,
          formData
        );
  
        if (res.status === 200 || res.status === 201) {
          console.log('Resposta da API:', res.data);
        } else {
          console.error('Erro na requisição:', res.status, res.statusText);
        }
      } catch (err) {
        console.error('Erro na requisição:', err);
      }
    };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" style={{ backgroundColor: 'gray', color: 'white' }}>
        Cadastrar
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
            />
            <TextField
              label="Sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="CPF"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Logradouro"
              name="logradouro"
              value={formData.logradouro}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Número Residencial"
              name="nr_residencial"
              value={formData.nr_residencial}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              select
              label="UF"
              name="uf"
              value={formData.uf}
              onChange={handleInputChange}
              fullWidth
            >
              {estados.map((estado) => (
                <MenuItem key={estado} value={estado}>
                  {estado}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <br />
            <Button type="submit" color="primary">
              Enviar
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cadastro;