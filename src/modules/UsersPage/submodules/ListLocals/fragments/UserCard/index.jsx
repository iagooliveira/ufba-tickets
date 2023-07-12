import { IconButton, Typography } from "@mui/material";
import { UserCardWrapper } from "./style";
import EditIcon from "@mui/icons-material/Edit";
import { useCallback, useState } from "react";
import { usersUseCases } from "../../../../providers";
import EditUserModal from "../EditUserModal";

const UserCard = ({ data }) => {
  const { userId, nome, email, login, cidade } = data;
  console.log(data);
  const [editUserModal, setEditUserModal] = useState(false);
  const handleOpen = () => setEditUserModal(true);
  const setClose = () => setEditUserModal(false);

  return (
    <>
      <UserCardWrapper>
        <Typography
          name="nome"
          variant="subtitle1"
          sx={{ marginBottom: "24px", marginLeft: "12px", marginTop: "12px" }}
        >
          Nome: {nome}
        </Typography>
        <Typography
          name="email"
          variant="subtitle1"
          sx={{ marginBottom: "24px", marginLeft: "12px", marginTop: "12px" }}
        >
          Email: {email}
        </Typography>
        <Typography
          name="login"
          variant="subtitle1"
          sx={{ marginBottom: "24px", marginLeft: "12px", marginTop: "12px" }}
        >
          Login: {login}
        </Typography>
        <Typography
          name="cidade"
          variant="subtitle2"
          sx={{ marginBottom: "24px", marginLeft: "12px" }}
        >
          Cidade: {cidade}
        </Typography>
        <IconButton
          aria-label="delete"
          onClick={handleOpen}
          handleClose={setClose}
        >
          <EditIcon />
        </IconButton>
      </UserCardWrapper>
      <EditUserModal modal={editUserModal} handleClose={setClose} id={userId} />
    </>
  );
};

export default UserCard;
