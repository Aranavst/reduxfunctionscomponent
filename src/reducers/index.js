import { combineReducers } from "redux";

const songState = () => {
  return [
    { name: "hi", age: 26 },
    { name: "bye", age: 36 }
  ];
};

const songReducers = (preReducer = null, action) => {
  if (action.type === "SONG_ACTION") {
    console.log("action.type.payload");
    return action.type.payload;
  }

  return preReducer;
};

export default combineReducers({
  songState,
  songReducers
});
