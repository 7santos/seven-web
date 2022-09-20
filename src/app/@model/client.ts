import { Address, DocType, Prime } from '@model';

export class Client extends Prime<string> {
  constructor(
    createdDate: Date,
    lastModifiedDate: Date,
    id: string,
    public name: string,
    public phone: string,
    public cellPhone: string,
    public whatsapp: boolean,
    public cpf: string,
    public cnpj: string,
    public doc: string,
    public docType: DocType,
    public birthDate: Date,
    public email: string,
    public address: Address,
    public observation: string,
    public addressFilled: boolean
  ) {
    super(createdDate, lastModifiedDate, id);
  }
}
