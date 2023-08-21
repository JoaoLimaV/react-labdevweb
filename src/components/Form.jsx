import { useState } from "react";
import style from "../module.css/Form.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario ${name} foi cadastrado`);
  }

  const [name, setName] = useState();
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

  return (
    <div className={style.container}>
      <form onSubmit={cadastrarUsuario}>
        <div className={style.form}>
          <div className={style.div}>
            <TextField
              type="text"
              id="name"
              name="name"
              label="Digite o seu Nome:"
              variant="filled"
              className={style.background}
              onChange={(e) => setName(e.target.value)}
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
              type="text"
              id="uf"
              name="uf"
              label="Digite o seu UF:"
              variant="filled"
              className={style.background}
              onChange={(e) => setUf(e.target.value)}
            />
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
