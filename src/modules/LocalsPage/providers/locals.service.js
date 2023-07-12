import { formatString } from '../../../Helpers/formatString';

export default class AuthService {
    /**
     * @param {object} props
     * @param {import('adapters/axios').Axios} props.http
     */
    constructor({ http }) {
      this.http = http;
    }

    async createLocal(payload){
        const local = await this.http.post('http://localhost:8080/locais', payload)

        return local;
    }

    async getAllLocals(){
      const locals = await this.http.get('http://localhost:8080/locais')

      return locals
    }

    async getLocalById(id) {
      const url = formatString("http://localhost:8080/locais/{id}", { id });
      const local = await this.http.get(url);
      return local;
    }
}