import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, width } from "@mui/system";
import { Grid, Stack } from "@mui/material";
import Item from "@mui/material/ListItem";

export default function Userbody(props) {
  const User = props.user;
  return (
    <Box sx={{ p: 2, m: 2 }} style={{ width: "100%" }}>
      <Grid container spacing={2} sx={{ border: 1 }} direction="row">
        <Grid item xs={6} sx={{ mb: 2 }}>
          <img src={User.userIamge} style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={6}>
          <Stack direction="column" style={{ width: "100%" }}>
            <Item style={{ width: "100%" }}>{User.username}</Item>
            <Item style={{ width: "100%" }}>{User.company}</Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
