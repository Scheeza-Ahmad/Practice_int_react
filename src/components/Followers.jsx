import React from "react";
import { useState } from "react";
const Followers = (props) => {
  const [follow, setfollow] = useState(props.fol);
  const followers = () => {
    setfollow(follow + 1);
  };
  return (
    <div>
      <p>Followers:{follow}</p>
      <button onClick={followers}>Follow</button>
    </div>
  );
};

export default Followers;
