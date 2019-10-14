import {Environment} from './interface';
import {apiKey, fbDbUrl} from '../app/firebase/firebaseConfig'

export const environment: Environment = {
  production: true,
  apiKey: apiKey,
  fbDbUrl: fbDbUrl
};
