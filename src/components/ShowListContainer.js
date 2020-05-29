import React, { Component } from "react";
import { connect } from "react-redux";
import { getShowList } from "../actions/shows";
import ShowList from "./ShowList";

class ShowListContainer extends Component {
  componentDidMount() {
    this.props.getShowList();
  }
  render() {
    console.log("THIS IS LIST?", this.props.list);
    return <ShowList list={this.props.list} />;
  }
}

const mapStateToProps = (state) => {
  console.log("STATEEE", state);
  return {
    list: state,
  };
};

export default connect(mapStateToProps, { getShowList })(ShowListContainer);
