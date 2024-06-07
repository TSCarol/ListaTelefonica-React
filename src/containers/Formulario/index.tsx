import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BotaoSalvar, MainContainer, Titulo } from "../../styles";
import { Campo } from "../../styles";
import { Form, Opcoes, Opcao } from "./styles";
import * as enums from "../../utils/enums/ContatoEnums";
import Contato from "../../models/ContatoModels";
import { cadastrar } from "../../store/reducers/contatos";

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(enums.Status.NORMAL);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();
    const contatoParaAdicionar = new Contato(name, email, phone, status, 0);

    dispatch(cadastrar(contatoParaAdicionar));
    navigate("/");
  };

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={name}
          onChange={(evento) => setName(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Opções de Contato</p>
          {Object.values(enums.Status).map((status) => (
            <Opcao key={status}>
              <input value={status} name="status" type="radio" id={status} />{" "}
              <label htmlFor={status}>{status}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;
