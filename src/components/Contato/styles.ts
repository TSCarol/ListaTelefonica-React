import styled from "styled-components";
import variaveis from "../../styles/variaveis";

import * as enums from "../../utils/enums/ContatoEnums";

type TagProps = {
  status?: enums.Status;
  parametro: "status";
};

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === "status") {
    if ("status" in props) {
      if (props.status === enums.Status.FAVORITOS) return variaveis.bege;
      if (props.status === enums.Status.EMERGENCIA) return variaveis.laranja;
    }
  }
  return "#ccc";
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`;

export const NomeTitulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Email = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const Telefone = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
