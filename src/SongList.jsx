import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

const SongList = (props) => {
  const [data, setData] = useState(props.name);

  const final = () => {
    return data.map((info) => {
      return (
        <div>
          <h1>hope it will work</h1>
          <p>{info.name}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>state has been updated</h2>
      <h1>Hello how are you</h1>
      <button>click Me </button>
      <h1>Using reducers</h1>
      <h2>{final()}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.songState[0].name);
  return {
    name: state.songState
  };
};

export default connect(mapStateToProps)(SongList);
