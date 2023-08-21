import { useState } from "react";
import style from "../module.css/Form.module.css";
import Button from "@mui/material/Button";
import { TextField, MenuItem } from '@mui/material';

function Form() {

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [nr_residencial, setNr] = useState();
  const [complemento, setComplemento] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUf] = useState();


  let cadastrarUsuario = async (e) => {
    e.preventDefault();
    try {
        let res = await fetch("https://api-cadastro-clientes.onrender.com/clientes", {
            method: "POST",
            body: JSON.stringify({
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                telefone: telefone,
                email: email,
                cep: cep,
                logradouro: logradouro,
                nr_residencial: nr_residencial,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                uf: uf
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.ok) {
            let resJson = await res.json();
            console.log("Resposta da API:", resJson);
        } else {
            console.log("Erro na requisição:", res.status, res.statusText);
            console.log(uf);
        }
    } catch (err) {
        console.log("Erro na requisição:", err);
        console.log(uf);
    }
  };

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const [ufMenu, setUfMenu] = useState('');

  const handleUfChange = (event) => {
  setUfMenu(event.target.value);
  };

  return (
    <div className={style.container}>
      <form onSubmit={cadastrarUsuario}>
        <div className={style.form}>
          <div className={style.div}>
            <TextField
              type="text"
              id="nome"
              name="nome"
              label="Digite o seu Nome:"
              variant="filled"
              className={style.background}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="sobrenome"
              name="sobrenome"
              label="Digite o seu Sobrenome:"
              variant="filled"
              className={style.background}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="cpf"
              name="cpf"
              label="Digite o seu CPF:"
              variant="filled"
              className={style.background}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="number"
              id="telefone"
              name="telefone"
              label="Digite o seu Telefone:"
              variant="filled"
              className={style.background}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="email"
              id="email"
              name="email"
              label="Digite o seu E-mail:"
              variant="filled"
              className={style.background}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="cep"
              name="cep"
              label="Digite o seu CEP:"
              variant="filled"
              className={style.background}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="logradouro"
              name="logradouro"
              label="Digite o seu Logradouro:"
              variant="filled"
              className={style.background}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="number"
              id="nr_residencial"
              name="nr_residencial"
              label="Digite o seu Número Residencial:"
              variant="filled"
              className={style.background}
              onChange={(e) => setNr(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="complemento"
              name="complemento"
              label="Digite o seu Complemento:"
              variant="filled"
              className={style.background}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="bairro"
              name="bairro"
              label="Digite o seu Bairro:"
              variant="filled"
              className={style.background}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
              type="text"
              id="cidade"
              name="cidade"
              label="Digite o seu Cidade:"
              variant="filled"
              className={style.background}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className={style.div}>
            <TextField
            select
            id="uf"
            name="uf"
            label="Escolha o UF:"
            variant="filled"
            className={style.background}
            value={ufMenu}
            onChange={(e) => {
              handleUfChange(e);
              setUf(e.target.value);
            }}>
            {estados.map((estado) => (
              <MenuItem key={estado} value={estado}>
                {estado}
              </MenuItem>
            ))}
          </TextField>
          </div>
          </div>
        <div className={style.divButton}>
          <Button type="submit" variant="outlined" className={style.button}>Cadastrar Cliente</Button>
        </div>
      </form>
    </div>
  );
}
export default Form;
