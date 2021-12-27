export default (stories = [], action) => {
  const updatedStory = stories.map((story) =>
    story._id === action.payload._id ? action.payload : story
  );
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...stories, action.payload];
    case "UPDATE":
      return updatedStory;
    case "DELETE":
      return stories.filter((story) => story._id !== action.payload);
    default:
      return stories;
  }
};
