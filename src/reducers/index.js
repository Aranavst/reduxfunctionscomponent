import { combineReducers } from "redux";

const songState = () => {
  return [
    { name: "hi", age: 26 },
    { name: "bye", age: 36 }
  ];
};

const songReducers = (songState = null, action) => {
  if (action.type === "SONG_ACTION") {
    console.log("actio.payload");
    return null;
  }

  return songState;
};

export default combineReducers({
  songState,
  songReducers
});
