import React, { Component } from "react";
import { connect } from "react-redux";
import { getEpisodeList } from "../actions/shows";
import Episode from "./Episode";

class EpisodeContainer extends Component {
  componentDidMount() {
    this.props.getEpisodeList();
  }
  render() {
    console.log("THIS IS EPISODES?", this.props.episode);
    return <Episode episodes={this.props.episode} />;
  }
}

const mapStateToProps = (state) => {
  console.log("STATE EPISODES", state);
  return {
    episode: state,
  };
};

export default connect(mapStateToProps, { getEpisodeList })(EpisodeContainer);
