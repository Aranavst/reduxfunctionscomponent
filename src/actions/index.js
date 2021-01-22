export const songAction = (song) => {
  console.log("action is working fine", song.name);
  return {
    type: "SONG_ACTION",
    payload: song
  };
};
