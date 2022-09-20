import { Injectable } from '@angular/core';
import { State } from '@model';
import { sortBy } from 'lodash';

@Injectable({ providedIn: 'root' })
export class StateService {
  constructor() {}

  getStates(): State[] {
    return sortBy(
      [
        {
          code: 11,
          initials: 'RO',
          name: 'Rondônia',
        },
        {
          code: 12,
          initials: 'AC',
          name: 'Acre',
        },
        {
          code: 13,
          initials: 'AM',
          name: 'Amazonas',
        },
        {
          code: 14,
          initials: 'RR',
          name: 'Roraima',
        },
        {
          code: 15,
          initials: 'PA',
          name: 'Pará',
        },
        {
          code: 16,
          initials: 'AP',
          name: 'Amapá',
        },
        {
          code: 17,
          initials: 'TO',
          name: 'Tocantins',
        },
        {
          code: 21,
          initials: 'MA',
          name: 'Maranhão',
        },
        {
          code: 22,
          initials: 'PI',
          name: 'Piauí',
        },
        {
          code: 23,
          initials: 'CE',
          name: 'Ceará',
        },
        {
          code: 24,
          initials: 'RN',
          name: 'Rio Grande do Norte',
        },
        {
          code: 25,
          initials: 'PB',
          name: 'Paraíba',
        },
        {
          code: 26,
          initials: 'PE',
          name: 'Pernambuco',
        },
        {
          code: 27,
          initials: 'AL',
          name: 'Alagoas',
        },
        {
          code: 28,
          initials: 'SE',
          name: 'Sergipe',
        },
        {
          code: 29,
          initials: 'BA',
          name: 'Bahia',
        },
        {
          code: 31,
          initials: 'MG',
          name: 'Minas Gerais',
        },
        {
          code: 32,
          initials: 'ES',
          name: 'Espírito Santo',
        },
        {
          code: 33,
          initials: 'RJ',
          name: 'Rio de Janeiro',
        },
        {
          code: 35,
          initials: 'SP',
          name: 'São Paulo',
        },
        {
          code: 41,
          initials: 'PR',
          name: 'Paraná',
        },
        {
          code: 42,
          initials: 'SC',
          name: 'Santa Catarina',
        },
        {
          code: 43,
          initials: 'RS',
          name: 'Rio Grande do Sul',
        },
        {
          code: 50,
          initials: 'MS',
          name: 'Mato Grosso do Sul',
        },
        {
          code: 51,
          initials: 'MT',
          name: 'Mato Grosso',
        },
        {
          code: 52,
          initials: 'GO',
          name: 'Goiás',
        },
        {
          code: 53,
          initials: 'DF',
          name: 'Distrito Federal',
        },
      ],
      ['name']
    );
  }
}