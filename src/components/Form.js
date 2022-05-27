import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import UserList from "./UserList";
const axios = require("axios");

export default function Form() {
  const [user, setuser] = React.useState("");
  const [userbody, setuserbody] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      user,
    });
  };

  const handleUserChange = ({ target: { value } }) => setuser(value);
  const handleClick = () => {
    const Data = axios
      .get(`https://api.github.com/users/${user}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then((res) => {
        setuserbody([
          {
            username: res.name,
            userIamge: res.avatar_url,
            company: res.company,
          },
          ...userbody,
        ]);
      });
  };
  return (
    <Container>
      <FormLabel sx={{ textAlign: "center", color: "primary.main", m: 2 }}>
        The GitHub Cards App
      </FormLabel>

      <Box
        component="form"
        sx={{
          border: 1,

          p: 4,
          flexGrow: 1,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container flexDirection="raw">
          <Grid item xs={10}>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="GitHub UserName"
              variant="outlined"
              onSubmit={handleSubmit}
              value={user}
              onChange={handleUserChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              style={{ width: "100%", height: "100%" }}
              variant="contained"
              onClick={handleClick}
              color="primary"
            >
              Add card
            </Button>
          </Grid>
        </Grid>
      </Box>
      <UserList User={userbody} />
    </Container>
  );
}
