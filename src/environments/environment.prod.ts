import {Environment} from './interface';
import {apiKey} from '../app/firebase/firebaseConfig'

export const environment: Environment = {
  production: true,
  apiKey: apiKey
};
