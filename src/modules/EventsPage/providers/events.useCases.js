export default class AuthUseCases {
    /**
     * @param {object} props
     */
    constructor({ eventsService }) {
      this.eventsService = eventsService;
    }

    async createEvent(formData){
        const response = await this.eventsService.createEvent(formData);

        return response;
    }

    async getAllEvents(formData){
      const response = await this.eventsService.getAllEvents(formData);

      return response;
  }

  async getLocalById(id) {
    const response = await this.eventsService.getEventById(id);
    return response;
  }

  async deleteEventById(id){
    const response = await this.eventsService.deleteEventById(id);
    return response;
  }
}  