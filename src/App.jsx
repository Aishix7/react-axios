import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
import { Posts } from "./components/Posts";
import "./App.css";

const App = () => {
  return (
    // <div>
    //   <h1>Hello React Crud Oper.</h1>
    //   <ul>
    //     {Posts.map((post) => (
    //       <li key={post.id}>{post.title}</li>
    //     ))}
    //   </ul>
    // </div>

    <Posts />
  );
};

export default App;
