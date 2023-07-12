import { http } from  '../../../Managers/Http/index'  

import LocalsService from './locals.service';
import LocalsUseCases from './locals.useCases';

export const localsService = new LocalsService({ http });

export const localsUseCases = new LocalsUseCases({
    localsService
});
