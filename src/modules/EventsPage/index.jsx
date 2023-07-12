import CreateEvent from "./submodules/CreateEvent/index"; //"./submodules/CreateEvents/index";
import ListEvents from "./submodules/ListEvents";

const EventsPage = () => {
  return (
    <>
      <CreateEvent />
      <ListEvents />
    </>
  );
};

export default EventsPage;
