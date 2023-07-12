import UserCard from "./fragments/UserCard";
import { ListUsersWrapper } from "./style";
import { AsyncLoad } from "../../../../Components/AsyncLoad/index";
import { usersUseCases } from "./../../providers/index";
import { useCallback } from "react";

const ListUsers = () => {
  const getUsers = useCallback(async () => {
    const users = usersUseCases.getAllUsers();
    console.log(users);
    return users;
  }, []);
  return (
    <ListUsersWrapper>
      <AsyncLoad promiseFn={getUsers}>
        {(response) =>
          response.map((local) => <UserCard key={Math.random()} data={local} />)
        }
      </AsyncLoad>
    </ListUsersWrapper>
  );
};

export default ListUsers;
