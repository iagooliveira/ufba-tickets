import { http } from  '../../../Managers/Http/index'  

import EventsService from './events.service';
import EventsUseCases from './events.useCases';

export const eventsService = new EventsService({ http });

export const eventsUseCases = new EventsUseCases({
    eventsService
});
