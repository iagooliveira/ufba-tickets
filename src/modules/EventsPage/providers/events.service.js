import { formatString } from '../../../Helpers/formatString';

export default class AuthService {
    /**
     * @param {object} props
     * @param {import('adapters/axios').Axios} props.http
     */
    constructor({ http }) {
      this.http = http;
    }

    async createEvent(payload){
        const event = await this.http.post('http://localhost:8080/eventos', payload)

        return event;
    }

    async getAllEvents(payload){
      const events = await this.http.get('http://localhost:8080/eventos', payload)

      return events;
    }

    async getEventById(id) {
      const url = formatString("http://localhost:8080/eventos/{id}", { id });
      const event = await this.http.get(url);
      return event;
    }

    async deleteEventById(id){
      const url = formatString("http://localhost:8080/eventos/{id}", { id });
      const event = await this.http.delete(url);
      return event;
    }
}