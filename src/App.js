import "./App.css";

import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  // const likeHTML = <button onClick={addLike}></button>;

  const addLike = () => {
    const like = 1;

    setLikes(like + likes);
  };

  return <button onClick={addLike}>likes {likes}</button>;
}

export default App;
