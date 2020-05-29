import { SHOW_LIST, EPISODE_LIST } from "../actions/shows";

const initialState = {
  list: [],
  episodes: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LIST:
      return { ...state, list: action.payload };
    case EPISODE_LIST:
      console.log("AHHHHHHH", action.payload);
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};
