import axios from "axios";

const url = "http://localhost:5000";

export const fetchStories = () => axios.get(`${url}/stories`);
export const createStory = (newStory) => axios.post(`${url}/stories`, newStory);
export const updateStory = (id, updatedStory) =>
  axios.patch(`${url}/stories/${id}`, updatedStory);
export const deleteStory = (id) => axios.delete(`${url}/stories/${id}`);
