import {
  deleteStory,
  fetchStories,
  createStory,
  updateStory,
} from "../api/index";

//action creators

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await fetchStories();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const makeStory = (storyData) => async (dispatch) => {
  try {
    const { data } = await createStory(storyData);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const patchStory = (id, storyData) => async (dispatch) => {
  try {
    const { data } = await updateStory(id, storyData);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const removeStory = (id) => async (dispatch) => {
  try {
    await deleteStory(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
