import { formatString } from '../../../Helpers/formatString';

export default class AuthService {
    /**
     * @param {object} props
     * @param {import('adapters/axios').Axios} props.http
     */
    constructor({ http }) {
      this.http = http;
    }

    async getAllUsers(){
      const users = await this.http.get('http://localhost:8080/usuarios')

      return users;
    }

    async getUserById(id) {
      const url = formatString("http://localhost:8080/usuarios/{id}", { id });
      const user = await this.http.get(url);
      return user;
    }

    async deleteUserById(id){
      const url = formatString("http://localhost:8080/usuarios/{id}", { id });
      const user = await this.http.delete(url);
      return user;
    }
}