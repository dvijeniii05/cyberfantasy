import {atom} from 'recoil';

export const userState = atom({
  key: 'user state',
  default: {
    name: 'sasa',
    surname: 'dede',
    age: '',
  },
});
