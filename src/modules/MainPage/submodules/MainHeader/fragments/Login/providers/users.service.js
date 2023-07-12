import { formatString } from '../../../../../../../Helpers/formatString';

export default class AuthService {
    /**
     * @param {object} props
     * @param {import('adapters/axios').Axios} props.http
     */
    constructor({ http }) {
      this.http = http;
    }

    async createUser(payload){
        const user = await this.http.post('http://localhost:8080/usuarios', payload)

        return user
    }

    async patchUser(id, payload){
      const url = formatString("http://localhost:8080/usuarios/{id}", { id });
      const user = await this.http.patch(url, payload);
      return user;
    }
}