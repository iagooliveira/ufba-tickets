export class TokenManager {
  /**
   * Create a token manger
   *
   * @param {object} controllerProps
   */
  constructor({ storage, storageKey }) {
    this.storageKey = storageKey;
    this.storage = storage;
  }

  /**
   * @returns {string} Stores user access token
   */
  setToken(token) {
    this.storage.set(this.storageKey, token);
    return token;
  }

  /**
   * @returns {string} Current stored user access token
   */
  getToken() {
    const stored = this.storage.get(this.storageKey);
    if (!stored) return null;

    const json = JSON.parse(stored);
    return json || null;
  }

  /**
   * Removes access token from storage
   */
  clearToken() {
    this.storage.remove(this.storageKey);
  }
}
