import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Story from "./story/Story";
import useStyle from "./styles";

function Stories({ setCurrentId }) {
  const stories = useSelector((state) => state.stories);
  const classes = useStyle();
  console.log(stories);
  return stories.length == 0 ? (
    "No Stories Available"
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {stories.map((story) => (
        <Grid key={story._id} item xs={12} sm={6}>
          <Story story={story} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Stories;
