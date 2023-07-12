export default class AuthUseCases {
    /**
     * @param {object} props
     */
    constructor({ usersService }) {
      this.usersService = usersService;
    }

    async createUser(formData){
        const response = await this.usersService.createUser(formData);

        return response;
    }

    async patchUser(id, formData){

      const response = await this.usersService.patchUser(id,formData);

        return response;
    }
}  