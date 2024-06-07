import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";

import { remover, editar } from "../../store/reducers/contatos";
import ContatoClass from "../../models/ContatoModels";
import { BotaoSalvar } from "../../styles";

type Props = ContatoClass;

const Contato = ({
  status,
  phone: phoneOriginal,
  email: emailOriginal,
  name,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [email, setEmail] = useState(emailOriginal || "");
  const [phone, setPhone] = useState(phoneOriginal || "");

  useEffect(() => {
    if (emailOriginal) {
      setEmail(emailOriginal);
    }
  }, [emailOriginal]);

  useEffect(() => {
    if (phoneOriginal) {
      setPhone(phoneOriginal);
    }
  }, [phoneOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setEmail(emailOriginal);
    setPhone(phoneOriginal);
  }

  function salvarEdicao() {
    dispatch(editar({ status, phone, email, name, id }));
    setEstaEditando(false);
  }

  return (
    <S.Card>
      <S.NomeTitulo>
        {estaEditando && <em>Editando: </em>}
        {name}
      </S.NomeTitulo>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Email
        disabled={!estaEditando}
        type="text"
        value={email}
        placeholder={email === "" ? "E-mail" : ""}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.Telefone
        disabled={!estaEditando}
        type="text"
        value={phone}
        placeholder={phone === "" ? "Telefone" : ""}
        onChange={(evento) => setPhone(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Contato;
