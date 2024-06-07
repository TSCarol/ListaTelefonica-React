import * as enums from "../utils/enums/ContatoEnums";

class Contato {
  name: string;
  email: string;
  phone: string;
  status: enums.Status;
  id: number;

  constructor(
    name: string,
    email: string,
    phone: string,
    status: enums.Status,
    id: number,
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.status = status;
    this.id = id;
  }
}

export default Contato;
