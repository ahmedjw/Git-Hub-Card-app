import { Card, Container, Grid, Stack } from "@mui/material";
import React from "react";
import Userbody from "./Userbody";

export default function UserList(props) {
  const UserLsitArray = props.User;
  console.log(UserLsitArray);
  return (
    <Container style={{ flexGrow: 1 }}>
      <Grid container direction="raw">
        {UserLsitArray.map((user, index) => (
          <Grid key={index} item xs={4}>
            <Userbody user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
