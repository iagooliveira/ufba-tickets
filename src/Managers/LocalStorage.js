/* eslint-disable class-methods-use-this */
export class LocalStorage {
  set(key, value) {
    if (typeof value === 'object') {
      value = `[object]${JSON.stringify(value)}`;
    }

    localStorage.setItem(key, value);
  }

  get(key) {
    let value = localStorage.getItem(key);

    if (value && value.startsWith('[object]')) {
      value = JSON.parse(value.replace('[object]', ''));
    }

    return value;
  }

  remove(key) {
    return localStorage.removeItem(key);
  }
}
