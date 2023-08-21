import { useState } from "react";
import style from "../module.css/Form.module.css";
import Button from "@mui/material/Button";
import { TextField, MenuItem } from "@mui/material";

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
      let res = await fetch(
        "https://api-cadastro-clientes.onrender.com/clientes",
        {
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
            uf: uf,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

  const [ufMenu, setUfMenu] = useState("");

  const handleUfChange = (event) => {
    setUfMenu(event.target.value);
  };

  return (
    <div className={style.box}>
      <form>
        <fieldset className={style.fieldset}>
          <legend className={style.legend}>
            <b>Fórmulário de Clientes</b>
          </legend>
          <br />
          <div className={style.inputBox}>
            <input type="text" name="nome" id="nome" className={style.inputUser} onChange={(e) => setNome(e.target.value)} required />
            <label for="nome" className={style.labelInput}> Nome:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="sobrenome" id="sobrenome" className={style.inputUser}
              onChange={(e) => setSobrenome(e.target.value)} required />
            <label for="sobrenome" className={style.labelInput}>Sobrenome:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="cpf" id="cpf" className={style.inputUser}
              onChange={(e) => setCpf(e.target.value)} required />
            <label for="cpf" className={style.labelInput}>Cpf:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="telefone" id="telefone" className={style.inputUser}
              onChange={(e) => setTelefone(e.target.value)} required />
            <label for="telefone" className={style.labelInput}>Telefone:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="email" id="email" className={style.inputUser}
              onChange={(e) => setEmail(e.target.value)} required />
            <label for="email" className={style.labelInput}>Email</label>
          </div>
          <br />
          <br />
        </fieldset>
        <fieldset className={style.fieldset}>
          <div className={style.inputBox}>
            <input type="text" name="cep" id="cep" className={style.inputUser}
              onChange={(e) => setCep(e.target.value)} required />
            <label for="cep" className={style.labelInput}>Cep:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="logradouro" id="logradouro" className={style.inputUser}
              onChange={(e) => setLogradouro(e.target.value)} required />
            <label for="logradouro" className={style.labelInput}>Logradouro:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="nr_residencial" id="nr_residencial" className={style.inputUser}
              onChange={(e) => setNr(e.target.value)} required />
            <label for="nr_residencial" className={style.labelInput}>Número Residencial:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="complemento" id="complemento" className={style.inputUser}
              onChange={(e) => setComplemento(e.target.value)} required />
            <label for="complemento" className={style.labelInput}>Complemento</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="bairro" id="bairro" className={style.inputUser}
              onChange={(e) => setBairro(e.target.value)} required />
            <label for="bairro" className={style.labelInput}>Bairro:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
            <input type="text" name="cidade" id="cidade" className={style.inputUser}
              onChange={(e) => setCidade(e.target.value)} required />
            <label for="cidade" className={style.labelInput}>Cidade:</label>
          </div>
          <br />
          <br />
          <div className={style.inputBox}>
          <select
          id="uf"
          name="uf"
          label="Escolha o UF:"
          className={style.inputUser}
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
        </select>
        <label for="uf" className={style.labelInput}>UF:</label>
          </div>
          <br />
          <br />
          <input type="submit" name="submit" id="submit" className={style.submit}></input>
        </fieldset>
      </form>
    </div>
  );
}
export default Form;
