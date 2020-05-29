export const SHOW_LIST = "SHOW_LIST";
export const EPISODE_LIST = "EPISODE_LIST";

export const getShowList = () => (dispatch) => {
  fetch("http://api.tvmaze.com/shows")
    .then((res) => res.json())
    .then((data) => {
      // console.log("WHERE IS DATA", data);
      dispatch({
        type: SHOW_LIST,
        payload: data,
      });
    })
    .catch(console.log);
};

export const getEpisodeList = (id) => (dispatch) => {
  fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
    .then((res) => res.json())
    .then((data) => {
      console.log("LOOOK THE DATA", data);
      dispatch({
        type: EPISODE_LIST,
        payload: data,
      });
    })
    .catch(console.log);
};

// export const getEpisodeList = () => (dispatch) => {
//   fetch("http://localhost:3000/api.tvmaze.com/shows/episodes")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("LOOOK THE DATA", data);
//       dispatch({
//         type: EPISODE_LIST,
//         payload: data,
//       });
//     })
//     .catch(console.log);
// };
