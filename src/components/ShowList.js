import React from "react";

export default function ShowList(props) {
  console.log("---the list---", props);
  if (!props.show) return <div>Loading...</div>;
  return (
    <div>
      <br />
      <h1>Show List</h1>
      <div>
        {props.show.map((list) => {
          return (
            <div key={list.id}>
              <p>{list.show}</p>
              <p>{list.summary}</p>
              <p>{list.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
