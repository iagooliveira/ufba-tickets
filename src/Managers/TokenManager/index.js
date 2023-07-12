import { LocalStorage } from '../LocalStorage';

import { TokenManager } from './tokenManager';

const localStorage = new LocalStorage();

const tokenManager = new TokenManager({
  storage: localStorage,
  storageKey: 'ngStorage-jwt'
});

export { tokenManager };
