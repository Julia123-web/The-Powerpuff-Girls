import React from "react";

export default function ShowList(props) {
  console.log("---the episode---", props);
  if (!props.episode) return <div>Loading...</div>;
  return (
    <div>
      <br />
      <h1>Episodes List</h1>
      <div>
        {props.episode.map((episodes) => {
          return (
            <div key={episodes.id}>
              <p>{episodes.episode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
