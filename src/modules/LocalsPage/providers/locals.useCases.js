export default class AuthUseCases {
    /**
     * @param {object} props
     */
    constructor({ localsService }) {
      this.localsService = localsService;
    }

    async createLocal(formData){
        const response = await this.localsService.createLocal(formData);

        return response;
    }

    async getAllLocals(){
      const response = await this.localsService.getAllLocals();

      return response;
  }

  async getLocalById(id) {
    const response = await this.localsService.getLocalById(id);
    return response;
  }
}  