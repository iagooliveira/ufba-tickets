import EventCard from "./fragments/EventCard";
import { ListEventsWrapper } from "./style";
import { AsyncLoad } from "../../../../Components/AsyncLoad/index";
import { eventsUseCases } from "./../../providers/index";
import { useCallback } from "react";

const ListEvents = () => {
  const getEvents = useCallback(async () => eventsUseCases.getAllEvents(), []);
  return (
    <ListEventsWrapper>
      <AsyncLoad promiseFn={getEvents}>
        {(response) =>
          response.map((event) => (
            <EventCard key={event.userId.userId} data={event} />
          ))
        }
      </AsyncLoad>
    </ListEventsWrapper>
  );
};

export default ListEvents;
