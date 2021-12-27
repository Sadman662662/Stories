import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { makeStory, patchStory } from "../../actions/stories";

function Form({ currentId, setCurrentId }) {
  const [storyData, setStoryData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const story = useSelector((state) =>
    currentId ? state.stories.find((s) => s._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (story) setStoryData(story);
  }, [story]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId) {
      dispatch(patchStory(currentId, storyData));
    } else {
      dispatch(makeStory(storyData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setStoryData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {!currentId ? "Creating" : "Editing"} a Story
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creator"
          fullWidth
          value={storyData.creator}
          onChange={(event) => {
            setStoryData({ ...storyData, creator: event.target.value });
          }}
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={storyData.title}
          onChange={(event) => {
            setStoryData({ ...storyData, title: event.target.value });
          }}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={storyData.message}
          onChange={(event) => {
            setStoryData({ ...storyData, message: event.target.value });
          }}
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={storyData.tags}
          onChange={(event) => {
            setStoryData({ ...storyData, tags: event.target.value });
          }}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setStoryData({ ...storyData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
export default Form;
