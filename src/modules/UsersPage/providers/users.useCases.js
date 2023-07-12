export default class AuthUseCases {
    /**
     * @param {object} props
     */
    constructor({ usersService }) {
      this.usersService = usersService;
    }

    async getAllUsers(){
      const response = await this.usersService.getAllUsers();

      return response;
  }

  async getLocalById(id) {
    const response = await this.usersService.getUserById(id);
    return response;
  }

  async deleteUserById(id) {
    const response = await this.usersService.deleteUserById(id);
    return response;
  }
}  