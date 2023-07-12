import LocalCard from "./fragments/LocalCard";
import { ListLocalsWrapper } from "./style";
import { AsyncLoad } from "../../../../Components/AsyncLoad/index";
import { localsUseCases } from "./../../providers/index";
import { useCallback } from "react";

const ListLocals = () => {
  const getLocals = useCallback(async () => {
    const locals = localsUseCases.getAllLocals();
    console.log(locals);
    return locals;
  }, []);
  return (
    <ListLocalsWrapper>
      <AsyncLoad promiseFn={getLocals}>
        {(response) =>
          response.map((local) => (
            <LocalCard key={local.usuario.userId} data={local} />
          ))
        }
      </AsyncLoad>
    </ListLocalsWrapper>
  );
};

export default ListLocals;
