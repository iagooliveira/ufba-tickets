import { http } from  '../../../Managers/Http/index'  

import UsersService from './users.service';
import UsersUseCases from './users.useCases';

export const usersService = new UsersService({ http });

export const usersUseCases = new UsersUseCases({
    usersService
});
