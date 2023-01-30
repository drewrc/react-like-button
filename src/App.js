import "./App.css";

import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  // const likeHTML = <button onClick={addLike}></button>;

  const addLike = () => {
    const like = 1;
    setLikes (like + likes);
  }
   
  

  const changeLike = () => {
    if (likes === 1) {
      return `${likes} like`
    } else {
      return `${likes} likes`
   };
  }
  return <button onClick={addLike}> {changeLike()}</button>;
}

export default App;
