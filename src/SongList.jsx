import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { songAction } from "./actions";

const SongList = (props) => {
  const final = () => {
    return props.name.map((info) => {
      return (
        <div key={info.name}>
          <h1>hope it will work</h1>
          <p onClick={() => props.songAction(info)}>{info.name}</p>
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
      <h3>{final()}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.songState
  };
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ songAction: songAction }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SongList);
