import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as enums from "../../utils/enums/ContatoEnums";

type FiltroState = {
  termo?: string;
  criterio: "status" | "todos";
  valor?: enums.Status;
};

const initialState: FiltroState = {
  termo: "",
  criterio: "status",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio;
      state.valor = action.payload.valor;
    },
  },
});

export const { alterarTermo, alterarFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
