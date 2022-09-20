import { Prime, State } from '@model';

export class Address extends Prime<string> {
  constructor(
    id: string,
    public cep: string,
    public street: string,
    public complement: string,
    public district: string,
    public city: string,
    public state: State,
    public number: string
  ) {
    super(new Date(), new Date(), id);
  }
}
